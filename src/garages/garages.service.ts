import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Garage, GarageDocument } from 'src/schemas/garage.schema';
import { UsersService } from 'src/users/users.service';
import { UpdateGarageDto } from './dto/update-garage.dto';
// import { Garage } from './interfaces/garage.interface';

@Injectable()
export class GaragesService {
  constructor(
    @InjectModel(Garage.name) private garageModel: Model<GarageDocument>,
    private usersService: UsersService,
  ) {}

  async findUsersGarages(userId): Promise<Garage[]> {
    const user = await this.usersService.findOneByUserId(userId);
    const userGarages = await this.garageModel
      .find({ garageId: { $in: user.garagesId } })
      .exec();

    return userGarages;
  }

  async findOneByGarageId(garageId): Promise<Garage> {
    const garage = await this.garageModel.findOne({ garageId }).exec();

    return garage;
  }

  async update(id: number, dto: UpdateGarageDto): Promise<Garage | any> {
    delete dto.garageId;

    return await this.garageModel.updateOne({ garageId: id }, dto);
  }
}
