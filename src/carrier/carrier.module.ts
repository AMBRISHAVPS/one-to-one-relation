import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrierschema } from './schema/carrier.schema';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
 imports:[MongooseModule.forFeature([{name:'Carrier',schema:Carrierschema}])],
controllers: [CarrierController],
providers: [CarrierService]})
export class CarrierModule {}


