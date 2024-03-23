import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PantsService } from './pants.service';
import { CreatePantsDTO } from './dto/createpants.dto';
import { UpdatePantsDTO } from './dto/updatepants.dto';
import mongoose from 'mongoose';

@Controller('pants')
export class PantsController {
    constructor(private service:PantsService){}
    @Get()
    async getAllPants(){
        return this.service.getAllPants();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createPants(@Body() createPantsDTO:CreatePantsDTO ){
        return this.service.createPants(createPantsDTO);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updatePantsById(@Param('id')id:string,@Body() updatePantsDTO:UpdatePantsDTO){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const updated = await this.service.updatePantsById(id,updatePantsDTO);
        if(!updated){throw new HttpException('product not found',404)}
        else{
            return updated;
        }
    }    
    @Delete(':id')
    async deletePantsById(@Param('id')id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid){throw new HttpException('invalid ID',400)}
        const deleted = await this.service.deletetePantsById(id);
        if(!deleted){throw new HttpException('product not found',404)}
        else{
            return deleted;
        }
    }


}
