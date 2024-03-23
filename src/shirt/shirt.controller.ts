import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ShirtService } from './shirt.service';
import { CreateShirtDTO } from './dto/createshirt.dto';
import { UpdateShirtDTO } from './dto/updateshirt.dto';
import mongoose from 'mongoose';

@Controller('shirt')
export class ShirtController {
    constructor(private service:ShirtService){}
    @Get()
    async getAllShirts(){
        return this.service.getAllShirts();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createShirt(@Body() createShirtDTO:CreateShirtDTO ){
        return this.service.createShirt(createShirtDTO);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateShirtById(@Param('id')id:string,@Body() updateShirtDTO:UpdateShirtDTO){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const updated = await this.service.updateShirtById(id,updateShirtDTO);
        if(!updated){throw new HttpException('product not found',404)}
        else{
            return updated;
        }
    }    
    @Delete(':id')
    async deleteShirtById(@Param('id')id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const deleted = await this.service.deleteteShirtById(id);
        if(!deleted){throw new HttpException('product not found',404)}
        else{
            return deleted;
        }
    }


}
