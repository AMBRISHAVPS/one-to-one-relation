import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Carrier } from './schema/carrier.schema';
import { CarrierService } from './carrier.service';
import { CreateCarrierDto } from './dto/Create-carrier.dto';
import { UpdateCarrierDto } from './dto/Update-carrier.dto';

@Controller('carrier')
export class CarrierController {
    constructor(private carrierservice:CarrierService){}

    @Get()
    async get():Promise<Carrier[]>{
        return this.carrierservice.get();
    }

    @Post()
    async post(@Body()person:CreateCarrierDto):Promise<Carrier>{
        return this.carrierservice.create(person);
    }

    @Get(':id')
    async getbyid(@Param('id')id:String):Promise<Carrier>{
         return this.carrierservice.findbyid(id);
    }

    @Put(':id')
    async update(@Param('id')id:String,@Body()person:UpdateCarrierDto):Promise<Carrier>{
        return this.carrierservice.update(id,person);
    }

    @Delete(':id')
      async delete(@Param('id')id:String):Promise<Carrier>{
         return this.carrierservice.delete(id);
      }


    }

