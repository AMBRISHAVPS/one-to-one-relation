import { IsNotEmpty, IsString } from "class-validator";

export class CreateAddressDto{
    @IsNotEmpty()
    @IsString()
    place:String;
}