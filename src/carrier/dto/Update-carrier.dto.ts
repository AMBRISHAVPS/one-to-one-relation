import {IsOptional, IsString } from "class-validator";

export class UpdateCarrierDto{
    @IsOptional()
    @IsString()
    profession:String;
}