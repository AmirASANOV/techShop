import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { TokenService } from './token-service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
    private tokenService: TokenService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    const user = await this.users.findOne({
      where: { email: loginUserDto.email },
    });

    if (!user) throw new NotFoundException({ message: 'error' });

    const compared = await bcrypt.compare(loginUserDto.password, user.password);
    if (!compared) throw new UnauthorizedException({ message: 'Error' });

    return this.tokenService.generateToken(user.id);
  }

  async registration(createUserDto: CreateUserDto) {
    const { password, ...result } = createUserDto;
    const passHash = await bcrypt.hash(password, bcrypt.genSaltSync(1));

    const newUser = {
      ...result,
      password: passHash,
    };
    const user = await this.users.save(newUser);
    return user;
  }

  async getMe(user) {
    return this.users.findOne({ where: { id: user.userId } });
  }
}
