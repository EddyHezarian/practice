import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDTO } from './dto/createbrand.dto';
import mongoose from 'mongoose';
import { UpdateBrandDTO } from './dto/updatebrand.dto';

@Controller('brand')
export class BrandController {
    constructor(private brandService:BrandService){}
    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body()createUserDTO:CreateBrandDTO){
        return this.brandService.createBrand(createUserDTO);
    }
    @Get()
    getBrands(){
        return this.brandService.getBrands();
    }
        
    @Delete(':id')
    async DeleteBrandById(@Param('id') id :string){
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if(!isValid){throw new HttpException('invalid ID',400)}
      const deleted = await  this.brandService.deleteBrnad(id)
      if(!deleted){throw new HttpException('user not found',404)}
      else{ 
        return deleted;
      }
    }
    
    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updatedBrandById(@Param('id') id :string,@Body() updateBrandDTO:UpdateBrandDTO){
      const isValid = mongoose.Types.ObjectId.isValid(id);
      if(!isValid){throw new HttpException('invalid ID',400)}
      const updated = await  this.brandService.updateBrandById(id,updateBrandDTO)
      if(!updated){throw new HttpException('user not found',404)}
      else{ 
        return updated;
      }
    }
    
}
