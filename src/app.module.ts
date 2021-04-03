import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GaragesController } from './garages/garages.controller';
import { GaragesService } from './garages/garages.service';
import { Garage, GarageSchema } from 'src/schemas/garage.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/garage-climate-nest'),
    MongooseModule.forFeature([{ name: Garage.name, schema: GarageSchema }]),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, GaragesController],
  providers: [AppService, GaragesService],
})
export class AppModule {}
