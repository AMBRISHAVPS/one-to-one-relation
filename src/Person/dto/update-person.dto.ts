import { IsNumber, IsOptional, IsString } from "class-validator";
import { Address } from "src/address/schema/address-schema";
import { Carrier } from "src/carrier/schema/carrier.schema";


export class UpdatePersondto{
    @IsOptional()
    @IsString()
    readonly name:String;

    @IsOptional()
    @IsNumber()
    readonly age:Number;

    @IsOptional()
    @IsNumber()
    readonly carrierId:Carrier;

    @IsOptional()
    @IsNumber()
    readonly addressId:Address;

}