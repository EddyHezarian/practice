import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Shirt{
    @Prop({unique:true , required:true})
    title:string;
    @Prop({unique:false , required:false})
    price?:string;
}

export const ShirtFactory = SchemaFactory.createForClass(Shirt);