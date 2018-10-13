import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  @IsString()
  public readonly username: string;

  @ApiModelProperty()
  @IsString()
  public readonly password: number;

  @ApiModelProperty()
  @IsInt()
  public readonly role: number;
}
