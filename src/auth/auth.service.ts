import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(pass, saltOrRounds);
    console.log(hash);

    const isPasswordMatch = await bcrypt.compare(pass, user.password);
    console.log(user.password);
    console.log(isPasswordMatch);

    if (user && isPasswordMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      userId: user.userId,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
