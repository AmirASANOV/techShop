import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TokenService } from './token-service';
import { JwtModule } from '@nestjs/jwt';
import { TokenStrategy } from './token.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokenService, TokenStrategy],
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
})
export class AuthModule {}
