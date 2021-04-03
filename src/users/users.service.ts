import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /* private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      garagesId: [],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      garagesId: [],
    },
  ]; */

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.userModel.find().exec();

    // return this.users.find((user) => user.username === username);
    return users.find((user) => user.username === username).toObject();
  }

  async findOneByUserId(userId: number): Promise<User> {
    /* const user = await this.userModel.findOne({ userId }).exec();

    return user._doc; */
    return this.userModel.findOne({ userId }).exec();
  }
}
