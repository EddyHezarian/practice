import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private  authService:AuthService){
        super();
    }
    validate(username:string , password:string){
        console.log("insid ");
        const thisUser = this.authService.login({username , password});
        if(!thisUser) throw new UnauthorizedException();
        return thisUser;
    }
}