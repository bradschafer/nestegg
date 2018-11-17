import { Controller, Get, Post, Put, Delete, Body, Headers, UseGuards, UseInterceptors, Param, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';


import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { LoggerService } from '../common/services/logger.service';
import { AuthService } from './auth.service';
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
    private readonly authService: AuthService,
    private loggerService: LoggerService,
  ) { }

  @Post()
  @Roles('staff')
  public async create(
    @Body() createuserDto: CreateUserDto
  ) {
    this.loggerService.debug('user.controller - register', createuserDto);
    const user = await this.UsersService.create(createuserDto);
    // validate user
    if (user) {
      // remove password, and destructure remaining properties into userDto
      const { password, ...userDto } = user;
      // issue and return JWT token
      const jwtPayload = { user: userDto };
    return await this.authService.createToken(jwtPayload);
    //return jwtPayload;
    } else {
      throw new Error('incorrect username or password');
    }
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
  public async findOne(
    @Param('id') id: string,
  ): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() createuserDto: CreateUserDto
  ): Promise<User> {
    return this.UsersService.updateOne(id, createuserDto );
  }

  @Delete(':id')
  @HttpCode(204)
  public async delete(
    @Param('id') id: string,
  ): Promise<User> {
    return this.UsersService.deleteOne(id);
  }
}
