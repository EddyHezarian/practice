import { IsInt, IsMobilePhone, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateScarfDTO{
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsOptional()
    price?:string;
}