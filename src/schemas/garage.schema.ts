import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GarageDocument = Garage & Document;

export class tempNotif {
  isOn: boolean;
  value: number;
}

export class humidityNotif {
  isOn: boolean;
  value: number;
}

@Schema()
export class Garage {
  @Prop()
  garageName: string;

  @Prop()
  garageId: number;

  @Prop()
  temp: tempNotif;

  @Prop()
  basementTemp: tempNotif;

  @Prop()
  humidity: humidityNotif;

  @Prop()
  basementHumidity: humidityNotif;
}

export const GarageSchema = SchemaFactory.createForClass(Garage);
