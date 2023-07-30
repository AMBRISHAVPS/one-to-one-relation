import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Person } from './schema/Person.schema';
import { CreatePersondto } from './dto/create-person.dto';
import { UpdatePersondto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name)
    private PersonModel: mongoose.Model<Person>,
  ) {}

  async get(): Promise<Person[]> {
    const res = await this.PersonModel.find();
    res['developerName'] = 'ambrisha';
    return res;
  }

  async create(Person: CreatePersondto): Promise<Person> {
    const res = await this.PersonModel.create(Person);
    return res;
  }

  async findbyid(id: String): Promise<Person> {
    try {
      const res = await this.PersonModel.findById(id)
        .populate('carrierId')
        .populate('addressId')
        .exec();
      return res;
    } catch (err) {
      throw new NotFoundException('person  --------not found');
    }
  }

  async update(id: String, person: UpdatePersondto): Promise<Person> {
    return await this.PersonModel.findByIdAndUpdate(id, person);
  }

  async delete(id: String): Promise<Person> {
    return await this.PersonModel.findByIdAndDelete(id);
  }
}
