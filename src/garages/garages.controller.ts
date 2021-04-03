import {
  Controller,
  Get,
  Request,
  UseGuards,
  Param,
  Patch,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { GaragesService } from './garages.service';
import { UsersService } from 'src/users/users.service';
import { UpdateGarageDto } from './dto/update-garage.dto';

@Controller('garages')
export class GaragesController {
  constructor(
    private readonly garagesService: GaragesService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findUsersGarages(@Request() req): any {
    return this.garagesService.findUsersGarages(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getGarageInfo(@Param() params, @Request() req): Promise<any> {
    const user = await this.usersService.findOneByUserId(req.user.userId);

    if (!user.garagesId.includes(params.id)) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const garage = await this.garagesService.findOneByGarageId(params.id);

    return garage;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateGarageInfo(
    @Param() params,
    @Request() req,
    @Body('garage') garageData: UpdateGarageDto,
  ): Promise<any> {
    const user = await this.usersService.findOneByUserId(req.user.userId);

    if (!user.garagesId.includes(params.id)) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const updateResult = await this.garagesService.update(
      params.id,
      garageData,
    );

    if (updateResult.ok === 1) {
      return 'Garage options updated succesfully';
    } else {
      throw new HttpException('Something went wrong', HttpStatus.NOT_MODIFIED);
    }
  }
}
