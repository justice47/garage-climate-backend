import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PitIndicationDocument = PitIndication & Document;

@Schema()
export class PitIndication {
  @Prop()
  date: string;

  @Prop()
  value: number;
}

// eslint-disable-next-line prettier/prettier
export const PitIndicationSchema = SchemaFactory.createForClass(PitIndication);
