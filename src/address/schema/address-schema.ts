import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
  })
 export class Address{
    @Prop()
    place:String;
 }
 
export const Carrierschema=SchemaFactory.createForClass(Address);