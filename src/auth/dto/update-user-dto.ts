import { IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  readonly profile: string;
}
