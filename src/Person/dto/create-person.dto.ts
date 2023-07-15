import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Address } from "src/address/schema/address-schema";
import { Carrier } from "src/carrier/schema/carrier.schema";


export  class CreatePersondto{
    @IsNotEmpty()
    @IsString()
    readonly name:String;

    @IsNotEmpty()
    @IsNumber()
    readonly age:String;

    @IsNotEmpty()
    @IsNumber()
    readonly carrierId:Carrier;

    @IsNotEmpty()
    @IsNumber()
    readonly addressId:Address;

}