import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePantsDTO{
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsOptional()
    price?:string;
}