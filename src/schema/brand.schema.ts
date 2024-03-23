import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Brand{
    @Prop({unique:true,required:true})
    title:string;
    @Prop({required:true})
    gender:string;
}
export const BrandSchema = SchemaFactory.createForClass(Brand);
