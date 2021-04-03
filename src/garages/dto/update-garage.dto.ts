export class UpdateGarageDto {
  readonly garageName: string;
  garageId: number;
  readonly tempNotif: boolean;
  readonly tempNotifValue: number;
  readonly humidityNotif: boolean;
  readonly humidityNotifValue: number;
  readonly humidityBasementNotif: boolean;
  readonly humidityBasementNotifValue: number;
}
