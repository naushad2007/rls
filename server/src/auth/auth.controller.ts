import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import User from '@/users/user.decorator';
import UserEntity from '@/users/user.entity';

import { AuthService } from './auth.service';
import RegisterDTO from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@User() user: UserEntity) {
    return user;
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDTO) {
    const user = await this.authService.register(registerDto);

    return user;
  }

  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@User() user: UserEntity) {
    return user;
  }

  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logout() {
    return;
  }
}
