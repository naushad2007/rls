import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { PostgresErrorCode } from '@/database/postgresErrorCodes.enum';
import { UsersService } from '@/users/users.service';

import RegisterDTO from './dto/register.dto';
import TokenPayload from './interface/token-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  public async register(registerDto: RegisterDTO) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    try {
      const createdUser = await this.usersService.create({
        ...registerDto,
        password: hashedPassword,
      });

      return createdUser;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new BadRequestException(
          'A user with that email address already exists. Could it be you?'
        );
      }

      throw new InternalServerErrorException(
        'Something went wrong, report this issue if the problem persists.'
      );
    }
  }

  public async login(email: string, plainTextPassword: string) {
    try {
      const user = await this.usersService.findByEmail(email);

      await this.verifyPassword(plainTextPassword, user.password);

      return user;
    } catch (error) {
      throw new BadRequestException(
        'Incorrect username/password, please try again.'
      );
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );

    if (!isPasswordMatching) {
      throw new BadRequestException(
        'Incorrect username/password, please try again.'
      );
    }
  }

  public getToken(id: number) {
    const payload: TokenPayload = { id };
    const secret = this.configService.get<string>('JWT_SECRET');
    const expiresIn = this.configService.get<number>('JWT_EXPIRATION_TIME');

    return this.jwtService.sign(payload, {
      secret,
      expiresIn: `${expiresIn}s`,
    });
  }

  public getLoginCookie(id: number) {
    const token = this.getToken(id);
    const expiresIn = this.configService.get<number>('JWT_EXPIRATION_TIME');

    return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}`;
  }

  public getLogoutCookie() {
    return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
  }
}
