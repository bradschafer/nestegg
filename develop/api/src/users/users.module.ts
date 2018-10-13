import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';

@Module({
  imports: [
    CommonModule,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule { }
