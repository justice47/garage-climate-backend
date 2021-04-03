import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TempIndicationDocument = TempIndication & Document;

@Schema()
export class TempIndication {
  @Prop()
  date: string;

  @Prop()
  value: number;
}

// eslint-disable-next-line prettier/prettier
export const TempIndicationSchema = SchemaFactory.createForClass(TempIndication);
