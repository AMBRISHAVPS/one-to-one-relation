import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateAddressDto{
    @IsOptional()
    @IsString()
    place:String;
}