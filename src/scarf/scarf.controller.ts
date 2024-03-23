import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ScarfService } from './scarf.service';
import { CreateScarfDTO } from './dto/createscarf.dto';
import { UpdateScarfDTO } from './dto/updatescarf.dto';
import mongoose from 'mongoose';

@Controller('scarf')
export class ScarfController {
    constructor(private service:ScarfService){}
    @Get()
    async getAllShirts(){
        return this.service.getAllScarf();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createShirt(@Body() createScarfDTO:CreateScarfDTO ){
        return this.service.createScarf(createScarfDTO);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateShirtById(@Param('id')id:string,@Body() updateScarfDTO:UpdateScarfDTO){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const updated = await this.service.updateScarfById(id,updateScarfDTO);
        if(!updated){throw new HttpException('product not found',404)}
        else{
            return updated;
        }
    }    
    @Delete(':id')
    async deleteShirtById(@Param('id')id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const deleted = await this.service.deleteteScarfById(id);
        if(!deleted){throw new HttpException('product not found',404)}
        else{
            return deleted;
        }
    }


}
