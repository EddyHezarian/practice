import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateShirtDTO{
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsOptional()
    price?:string;
}