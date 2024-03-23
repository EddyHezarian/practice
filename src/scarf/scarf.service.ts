import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Scarf } from 'src/schema/scarf.schema';
import { CreateScarfDTO } from './dto/createscarf.dto';
import { UpdateScarfDTO } from './dto/updatescarf.dto';

@Injectable()
export class ScarfService {  constructor(@InjectModel(Scarf.name)private scarfmodel:Model<Scarf> ){
}
getAllScarf(){
    return this.scarfmodel.find();
}
createScarf(createScarfDTO:CreateScarfDTO){
    const newScarf =  new this.scarfmodel(createScarfDTO);
    return newScarf.save();
}
updateScarfById(id:string , updateScarfDTO:UpdateScarfDTO){
    return this.scarfmodel.findByIdAndUpdate(id,updateScarfDTO,{new:true})
 } 
deleteteScarfById(id:string){
    return this.scarfmodel.findByIdAndDelete(id);
 }}
