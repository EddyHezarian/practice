import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Pants{
    @Prop({unique:true , required:true})
    title:string;
    @Prop({unique:false , required:false})
    price?:string;
}

export const PantsFactory = SchemaFactory.createForClass(Pants);