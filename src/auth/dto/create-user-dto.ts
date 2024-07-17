import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  readonly username: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
