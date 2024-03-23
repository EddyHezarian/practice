import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateScarfDTO{
    @IsString()
    @IsOptional()
    title?:string;
    @IsString()
    @IsOptional()
    price?:string;
}