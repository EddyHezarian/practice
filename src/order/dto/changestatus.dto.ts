import {  IsArray, IsDate, IsIn, IsInt, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class ChangeStatusDTO{
   @IsNotEmpty()
   @IsIn(['OPEN','READY','DELIVERED'])
    status:string; 
}