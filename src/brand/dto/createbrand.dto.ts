import { IsOptional, IsString } from "class-validator";

export class CreateBrandDTO{
    @IsString()
    title:string;
    @IsString()
    gender:string;
}