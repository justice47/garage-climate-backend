import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: number;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  garagesId!: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);
