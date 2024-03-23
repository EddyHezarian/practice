import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateShirtDTO{
    @IsString()
    @IsOptional()
    title?:string;
    @IsString()
    @IsOptional()
    price?:string;
}