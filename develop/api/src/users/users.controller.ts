import { Controller, Get, Post, Body, Headers, UseGuards, UseInterceptors, Param } from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { LoggerService } from '../common/services/logger.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';

import { LoggingInterceptor } from '../common/interceptors/logging.interceptor';
import { TransformInterceptor } from '../common/interceptors/transform.interceptor';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@ApiBearerAuth()
@ApiUseTags('/api/users')
@Controller('/api/users')
@UseInterceptors(TransformInterceptor)
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
    private loggerService: LoggerService,
  ) { }

  @Post()
  @Roles('staff')
  public async create(@Body() createuserDto: CreateUserDto) {
    this.UsersService.create(createuserDto);
  }

  @Get()
  public async findAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get('protected')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('staff')
  public async findProtected(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(':id')
  public findOne(
    @Param('id') id: string,
  ): Promise<User> {
    return this.UsersService.findOne(id);
  }
}
