import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarrierDto{
    @IsNotEmpty()
    @IsString()
    profession:String;
}