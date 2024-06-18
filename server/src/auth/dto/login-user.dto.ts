import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'john@doe.com', description: 'email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'Password' })
  @IsString()
  password: string;
}
