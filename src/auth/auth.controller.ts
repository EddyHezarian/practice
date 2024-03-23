import { Body, Controller, Delete, Get, HttpException, Param, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/signin.dto';
import mongoose from 'mongoose';
import {Request}from 'express';
import { LocalGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
    constructor(private service :AuthService){}

    @Post('signin')
    @UsePipes(new ValidationPipe())
    signin(@Body()  signinDTO:SignInDTO){
        return this.service.signin(signinDTO);
    }
    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req:Request){
     return req.user;
    }
    

    @Get('users')
    async getUsers (){
      return await this.service.getUsers();
    }



    @Delete(':id')
    async DeleteUserById(@Param('id') id :string){
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if(!isValid){throw new HttpException('invalid ID',400)}
      const deletedPerson = await  this.service.deleteUser(id)
      if(!deletedPerson){throw new HttpException('user not found',404)}
      else{ 
        return deletedPerson;
      }
    }
}
