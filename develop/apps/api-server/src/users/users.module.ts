import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { DatabaseModule } from '../database/database.module';


import { AuthController } from '../users/auth.controller';
import { JwtStrategy } from '../users/jwt.strategy';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';

import { AuthService } from './auth.service';

@Module({
  imports: [
    CommonModule
  ],
  controllers: [
    UsersController,
    AuthController
  ],
  providers: [
    UsersService,
    JwtStrategy, 
    AuthService, 
    ...usersProviders],
  exports: [JwtStrategy],
})
export class UsersModule { }
