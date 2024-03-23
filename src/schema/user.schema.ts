import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class UserSchema {

    @Prop({unique:true , required:true})
    username:string; 

    @Prop({unique:false , required:true})
    password:string;

    @Prop({unique:false , required:true})
    role:string;

    @Prop({unique:false , required:false})
    lastLogin:string;
}

export const UserFactory = SchemaFactory.createForClass(UserSchema);
