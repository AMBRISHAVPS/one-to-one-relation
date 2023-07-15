import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Address } from "./schema/address-schema";
import mongoose from "mongoose";
import { CreateAddressDto } from "./dto/Create-address.dto";
import { UpdateAddressDto } from "./dto/Update-address.dto";


@Injectable()
export class AddressService {
    constructor(@InjectModel(Address.name)
    private AddressModel:mongoose.Model<Address>,){}

    async get():Promise<Address[]>{
        const res=await this.AddressModel.find();
        return res;
    }

    async create(address:CreateAddressDto):Promise<Address>{
        const res=await this.AddressModel.create(address);
        return res;
    }

    async findbyid(id:String):Promise<Address>{
        const findid=await this.AddressModel.findById(id);
        return findid;
    }

    async update(id:String,person:UpdateAddressDto):Promise<Address>{
        return await this.AddressModel.findByIdAndUpdate(id,person);
        
    }

    async delete(id:String):Promise<Address>{
        return await this.AddressModel.findByIdAndDelete(id);
        
    }
   


}


