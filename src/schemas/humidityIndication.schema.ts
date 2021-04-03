import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HumidityIndicationDocument = HumidityIndication & Document;

@Schema()
export class HumidityIndication {
  @Prop()
  date: string;

  @Prop()
  value: number;
}

// eslint-disable-next-line prettier/prettier
export const HumidityIndicationSchema = SchemaFactory.createForClass(HumidityIndication);
