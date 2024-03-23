import { Optional } from "@nestjs/common";
import { IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class EditOrderDTO{
    @IsString()
    @IsOptional()
    name?:string;
    @IsMobilePhone()
    @IsOptional()
    phone?:string;
    @IsString()
    @IsOptional()
    purchase?:string;
    @IsString()
    @IsOptional()
    description?:string;
    @IsString()
    @IsOptional()
    brand_name?:string;
    @IsString()
    @IsOptional()
    shirt?:string;
    @IsString()
    @IsOptional()
    pants?:string;
    @IsString()
    @IsOptional()
    scarf?:string;
    @IsNumber()
    @IsOptional()
    shirtQTY?:number;
    @IsNumber()
    @IsOptional()
    pantsQTY?:number;
    @IsNumber()
    @IsOptional()
    scarfQTY?:number;
    
}