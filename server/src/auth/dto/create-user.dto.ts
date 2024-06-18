import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john', description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'test@gmail.com', description: 'email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'qwerty', description: 'pass' })
  @IsString()
  password: string;

  @ApiProperty({ example: '+79991112233', description: 'phone' })
  @IsPhoneNumber()
  phoneNumber: string;
}
