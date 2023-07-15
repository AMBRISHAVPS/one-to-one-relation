import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { Carrierschema } from './schema/address-schema';


    
@Module({
    imports:[MongooseModule.forFeature([{name:'Address',schema:Carrierschema}])],
    controllers: [AddressController],
    providers: [AddressService]
})


export class AddressModule {}
