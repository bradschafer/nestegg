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
import * as crypto from 'crypto';

// for typescript
declare const Buffer
declare const process

//NOTE: This needs to be modified to pull a secret from docker
const ENCRYPTION_KEY = '12345678901234567890123456789012'  // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16

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

  encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', new  Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
  
    encrypted = Buffer.concat([encrypted, cipher.final()]);
  
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }
  
  decrypt(text) {
    let textParts = text.split(':');
    let iv = new  Buffer.from(textParts.shift(), 'hex');
    let encryptedText = new  Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
  
    decrypted = Buffer.concat([decrypted, decipher.final()]);
  
    return decrypted.toString();
  }


  @Post()
  @Roles('staff')
  public async create(
    @Body() createuserDto: CreateUserDto
  ) {
    this.loggerService.debug('user.controller - register', createuserDto);

    const pwd = this.encrypt(createuserDto.password)
    console.log('password crypt', pwd);
    // outputs password
    console.log(this.decrypt(pwd));
    createuserDto.password = pwd;
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
    return this.UsersService.updateOne(id, createuserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  public async delete(
    @Param('id') id: string,
  ): Promise<User> {
    return this.UsersService.deleteOne(id);
  }

  

}
