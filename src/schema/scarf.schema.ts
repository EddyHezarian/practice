import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Scarf{
    @Prop({unique:true , required:true})
    title:string;
    @Prop({unique:false , required:false})
    price?:string;
}

export const ScarfFactory = SchemaFactory.createForClass(Scarf);