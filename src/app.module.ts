import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';
import { CarrierController } from './carrier/carrier.controller';
import { CarrierService } from './carrier/carrier.service';
import { CarrierModule } from './carrier/carrier.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/one-to-one'), PersonModule, CarrierModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
