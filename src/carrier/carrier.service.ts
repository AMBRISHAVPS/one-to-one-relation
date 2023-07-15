import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Carrier } from './schema/carrier.schema';
import * as mongoose from 'mongoose';
import { CreateCarrierDto } from './dto/Create-carrier.dto';
import { UpdateCarrierDto } from './dto/Update-carrier.dto';

@Injectable()
export class CarrierService {
    constructor(@InjectModel(Carrier.name)
    private CarrierModel:mongoose.Model<Carrier>,){}
   
    async get():Promise<Carrier[]>{
        const res=await this.CarrierModel.find();
        return res;
    }

    async create(carrier:CreateCarrierDto):Promise<Carrier>{
        const res=await this.CarrierModel.create(carrier);
        return res;
    }

    async findbyid(id:String):Promise<Carrier>{
        const findid=await this.CarrierModel.findById(id);
        return findid;
    }

    async update(id:String,person:UpdateCarrierDto):Promise<Carrier>{
        return await this.CarrierModel.findByIdAndUpdate(id,person);
        
    }

    async delete(id:String):Promise<Carrier>{
        return await this.CarrierModel.findByIdAndDelete(id);
        
    }
   


}




