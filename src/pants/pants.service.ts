import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pants } from 'src/schema/pants.schema';
import { CreatePantsDTO } from './dto/createpants.dto';
import { UpdatePantsDTO } from './dto/updatepants.dto';

@Injectable()
export class PantsService {
    constructor(@InjectModel(Pants.name)private PantsModel:Model<Pants> ){
    }
    getAllPants(){
        return this.PantsModel.find();
    }
    createPants(createPantsDTO:CreatePantsDTO){
        const newShirt =  new this.PantsModel(createPantsDTO);
        return newShirt.save();
    }
    updatePantsById(id:string , updatePantsDTO:UpdatePantsDTO){
        return this.PantsModel.findByIdAndUpdate(id,updatePantsDTO,{new:true})
     } 
    deletetePantsById(id:string){
        return this.PantsModel.findByIdAndDelete(id);
     }
}
