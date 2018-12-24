import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class AuthenticateDto {
  @ApiModelProperty()
  @IsString()
  public readonly username: string;

  @ApiModelProperty()
  @IsString()
  public readonly password: string;
}
