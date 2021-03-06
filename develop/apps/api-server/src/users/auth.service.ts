import { Model, Document } from 'mongoose';
import { Injectable, Inject  } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { ConfigService } from '../common/services/config.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoggerService } from '../common/services/logger.service';
import { AccessTokenWithMetadata } from './interfaces/jwt-accessTokenData.interface';
import { AuthenticateDto } from './dto/authenticate-dto';
import { User } from './interfaces/user.interface';
import { users } from './users.const';

export interface User extends Document {
  readonly username: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly roles?: string[];
  readonly teams?: string[];
  readonly password: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserModelToken') 
    private readonly userModel,
    private readonly configService: ConfigService, 
    private readonly loggerService: LoggerService
  ) {}

  public async createToken(payload: JwtPayload): Promise<AccessTokenWithMetadata> {
    const expiresIn = 3600;
    const accessToken = jwt.sign(payload, this.configService.jwtSecretKey, { expiresIn });

    this.loggerService.debug('auth.service - createToken', payload, accessToken);

    return {
      expiresIn,
      accessToken,
    };
  }

  /**
   * The object that gets returned from this method gets attached to the request object in the user property
   * @param payload
   *
   * Notes:
   * RoleGuard looks for roles:string[] on the returned property
   */
  public async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // no additional validation needed.  We trust the jwt token provided, and just pass it along (TODO: verify this notion is watertight)
    this.loggerService.debug('auth.service - validateUser - payload', payload);
    return payload.user;
  }

  public async authenticateUser(authenticateDto: AuthenticateDto): Promise<User> {
    if (!authenticateDto) return null;
    
    // remove this once the demo users should be removed
    const demo = users.find(user => user.username === authenticateDto.username && user.password === authenticateDto.password);
    if(demo){
      return demo;
    }
    const user = await this.userModel.findOne({username: authenticateDto.username, password: authenticateDto.password}).lean();
    return user;
  }

    // remove this once the demo users should be removed
    public async findAll(): Promise<User[]> {
    return users;
  }

}
