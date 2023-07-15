import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema({
    timestamps: true,
  })

export class Person{
    @Prop()
    name:String;

    @Prop()
    age:number;
    
    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Carrier' })
    carrierId:  Types.ObjectId 

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Address' })
    addressId:  Types.ObjectId 

}
export const PersonSchema=SchemaFactory.createForClass(Person);