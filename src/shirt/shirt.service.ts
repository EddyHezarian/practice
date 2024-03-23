import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDTO } from 'src/brand/dto/createbrand.dto';
import { Shirt } from 'src/schema/shirt.schema';
import { CreateShirtDTO } from './dto/createshirt.dto';
import { UpdateShirtDTO } from './dto/updateshirt.dto';

@Injectable()
export class ShirtService {
    constructor(@InjectModel(Shirt.name)private  shirtmodel:Model<Shirt> ){
    }
    getAllShirts(){
        return this.shirtmodel.find();
    }
    createShirt(createShirtDTO:CreateShirtDTO){
        const newShirt =  new this.shirtmodel(createShirtDTO);
        return newShirt.save();
    }
    updateShirtById(id:string , updateShirtDTO:UpdateShirtDTO){
        return this.shirtmodel.findByIdAndUpdate(id,updateShirtDTO,{new:true})
     } 
    deleteteShirtById(id:string){
        return this.shirtmodel.findByIdAndDelete(id);
     }
}
