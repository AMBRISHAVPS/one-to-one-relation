import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './schema/Person.schema';
import { CreatePersondto } from './dto/create-person.dto';
import { UpdatePersondto } from './dto/update-person.dto';

@Controller('person')
export class PersonController {
    constructor(private personservice:PersonService){}

    @Get()
    async get():Promise<Person[]>{
        return this.personservice.get();
    }

    @Post()
    async post(@Body()person:CreatePersondto):Promise<Person>{
        return this.personservice.create(person);
    }

    @Get(':id')
    async getbyid(
      @Param('id')
      id: String
    ): Promise<Person> {
      return this.personservice.findbyid(id);
    }

    @Put(':id')
    async update(@Param('id')id:String,@Body()person:UpdatePersondto):Promise<Person>{
        return this.personservice.update(id,person);
    }

    @Delete(':id')
      async delete(@Param('id')id:String):Promise<Person>{
         return this.personservice.delete(id);
      }


    }

