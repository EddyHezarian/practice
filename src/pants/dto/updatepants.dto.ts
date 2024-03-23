import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdatePantsDTO{
    @IsString()
    @IsOptional()
    title?:string;
    @IsString()
    @IsOptional()
    price?:string;
}