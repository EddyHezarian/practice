import { Injectable } from '@nestjs/common';
import { SignInDTO } from './dto/signin.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';
import { Model } from 'mongoose';
import { find } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login.dto';
import { use } from 'passport';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService ,
        @InjectModel(UserSchema.name)private userModel:Model<UserSchema> ){}

    
    signin(signInDTO:SignInDTO) {
        const NewUser = new this.userModel(signInDTO);
        return NewUser.save();
    }
    
    getUserByID(id:string){
       return this.userModel.findById(id);
    }    
    getUsers(){
       return this.userModel.find().exec();
    }
    async findByUsername(username: string) {      
        const user =await  this.userModel.find({username: username}).exec();
        return user ;
    }
    deleteUser(id:string){
        return this.userModel.findByIdAndDelete(id);
    }

    async login({username,password}:LoginDTO){
        console.log("ineer\n\n\n");
        const userList  =await this.findByUsername(username);
        console.log(userList);
        const findUser = userList[0];
        console.log(findUser);
        if(!findUser)return null ; 
        if(findUser.password === password){
            // create web token
            // const {password,...obj}= findUser;
            const user  = {
                _id :findUser._id ,
                username : findUser.username,
                role:findUser.role
            }
           // console.log(user);
            return this.jwtService.sign(user);
        }
    
    }
    


}
