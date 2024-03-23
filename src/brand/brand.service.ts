import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from 'src/schema/brand.schema';
import { CreateBrandDTO } from './dto/createbrand.dto';
import { UpdateBrandDTO } from './dto/updatebrand.dto';

@Injectable()
export class BrandService {
    constructor(@InjectModel(Brand.name)private brandModel:Model<Brand>){}

    createBrand(createBrandDTO:CreateBrandDTO){
        const newBrand = new this.brandModel(createBrandDTO);
        return newBrand.save();
    }
    getBrands(){
        return this.brandModel.find();
    }
    deleteBrnad(id:string){
        return  this.brandModel.findByIdAndDelete(id);
    }
    updateBrandById(id:string, updateBrandDTO:UpdateBrandDTO){
        return this.brandModel.findByIdAndUpdate(id,updateBrandDTO,{new:true});
    }
}
