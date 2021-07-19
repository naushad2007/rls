import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import User from '@/users/user.decorator';
import UserEntity from '@/users/user.entity';

import { AuthService } from './auth.service';
import RegisterDTO from './dto/register.dto';
import { RequestWithResponse } from './interface/request.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@User() user: UserEntity) {
    return user;
  }

  @Post('register')
  async register(
    @Req() request: RequestWithResponse,
    @Body() registerDto: RegisterDTO
  ) {
    const user = await this.authService.register(registerDto);
    const authCookie = this.authService.getLoginCookie(user.id);

    request.res.setHeader('Set-Cookie', authCookie);

    return user;
  }

  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async logIn(@User() user: UserEntity, @Req() request: RequestWithResponse) {
    const authCookie = this.authService.getLoginCookie(user.id);

    request.res.setHeader('Set-Cookie', authCookie);

    return user;
  }

  @HttpCode(200)
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  async logOut(@Req() request: RequestWithResponse) {
    const logoutCookie = this.authService.getLogoutCookie();

    request.res.setHeader('Set-Cookie', logoutCookie);

    return;
  }
}
