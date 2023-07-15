import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true,
  })

export class Carrier{
    @Prop()
    profession:String;
}

export const Carrierschema=SchemaFactory.createForClass(Carrier);

