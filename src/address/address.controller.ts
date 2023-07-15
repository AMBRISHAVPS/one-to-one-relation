import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Carrier } from 'src/carrier/schema/carrier.schema';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/Create-address.dto';
import { UpdateAddressDto } from './dto/Update-address.dto';
import { Address } from './schema/address-schema';

@Controller('address')
export class AddressController {
    constructor(private addressservice:AddressService){}


    @Get()
    async get():Promise<Address[]>{
        return this.addressservice.get();
    }

    @Post()
    async post(@Body()person:CreateAddressDto):Promise<Address>{
        return this.addressservice.create(person);
    }

    @Get(':id')
    async getbyid(@Param('id')id:String):Promise<Address>{
         return this.addressservice.findbyid(id);
    }

    @Put(':id')
    async update(@Param('id')id:String,@Body()person:UpdateAddressDto):Promise<Address>{
        return this.addressservice.update(id,person);
    }

    @Delete(':id')
      async delete(@Param('id')id:String):Promise<Address>{
         return this.addressservice.delete(id);
      }


    }





