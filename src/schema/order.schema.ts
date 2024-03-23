import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Order{
    @Prop({unique:false , required:true})
    name:string;
    @Prop({unique:false , required:false})
    purchase?:string;
    @Prop({unique:false , required:true})
    phone?:string;
    @Prop({unique:false , required:false})
    date:string;    
    @Prop({unique:false , required:false})
    description:string;    
    @Prop({unique:false , required:true})
    status:string;    
    @Prop({unique:false , required:true})
    brand_name:string;    
    @Prop({unique:false , required:true})
    shirt:string;    
    @Prop({unique:false , required:true})
    pants:string;    
    @Prop({unique:false , required:true})
    scarf:string;    
    @Prop({unique:false , required:true})
    shirtQTY:number;    
    @Prop({unique:false , required:true})
    pantsQTY:number;    
    @Prop({unique:false , required:true})
    scarfQTY:number;
}

export const OrderFactory = SchemaFactory.createForClass(Order);