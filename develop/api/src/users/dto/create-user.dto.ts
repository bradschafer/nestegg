import { IsString, IsInt } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // @ApiModelProperty()
  @IsString()
  public readonly _id: string;

  @ApiModelProperty()
  @IsString()
  public readonly username: string;

  @ApiModelProperty()
  @IsString()
  public readonly fullName?: string;

  @ApiModelProperty()
  @IsString()
  public readonly displayName?: string;

  @ApiModelProperty()
  @IsString()
  public readonly password?: string;

  @ApiModelProperty()
  @IsString()
  public readonly acceptedTerms?: boolean;

  @ApiModelProperty()
  @IsString()
  public readonly acceptedTermsAt?: string;

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
