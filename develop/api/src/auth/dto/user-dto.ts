import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiModelProperty()
  @IsString()
  public readonly id: number;

  @ApiModelProperty()
  @IsString()
  public readonly username: string;

  @ApiModelProperty()
  @IsString()
  public readonly firstName?: string;

  @ApiModelProperty()
  @IsString()
  public readonly lastName?: string;

  @ApiModelProperty()
  @IsString()
  public readonly roles?: string[];
}
