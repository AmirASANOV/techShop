import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async generateToken(userId: number) {
    const token = await this.jwtService.signAsync(
      { userId },
      { secret: '1', expiresIn: '24h' },
    );

    return { token: token };
  }
}
