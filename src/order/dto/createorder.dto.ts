import {  IsArray, IsDate, IsDateString, IsIn, IsInt, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateOrderDTO{
    @IsString()
    @IsNotEmpty()
    name:string;
    @IsMobilePhone()
    @IsNotEmpty()
    phone:string;
    @IsString()
    @IsNotEmpty()
    purchase:string;
    @IsDateString()
    @IsNotEmpty()
    date:string;
    @IsIn( ['OPEN','READY','DELIVERED'])
    @IsNotEmpty()
    status:string;
    @IsString()
    @IsOptional()
    description?:string;
    @IsString()
    @IsNotEmpty()
    brand_name:string;
    @IsString()
    @IsNotEmpty()
    shirt:string;
    @IsString()
    @IsNotEmpty()
    pants:string;
    @IsString()
    @IsNotEmpty()
    scarf:string;
    @IsNumber()
    @IsNotEmpty()
    shirtQTY:number;
    @IsNumber()
    @IsNotEmpty()
    pantsQTY:number;
    @IsNumber()
    @IsNotEmpty()
    scarfQTY:number;
    
}