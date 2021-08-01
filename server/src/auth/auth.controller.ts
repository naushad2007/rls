import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";

import User from "@/users/user.decorator";
import UserEntity from "@/users/user.entity";

import { AuthService } from "./auth.service";
import RegisterDTO from "./dto/register.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("jwt"))
  @Get("me")
  me(@User() user: UserEntity) {
    return user;
  }

  @Post("register")
  async register(
    @Body() registerDto: RegisterDTO,
    @Res({ passthrough: true }) response: Response
  ) {
    const user = await this.authService.register(registerDto);

    const loginCookie = this.authService.getLoginCookie(user.id);

    response.setHeader("Set-Cookie", loginCookie);

    delete user.password;

    response.send(user);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(
    @User() user: UserEntity,
    @Res({ passthrough: true }) response: Response
  ) {
    const loginCookie = this.authService.getLoginCookie(user.id);

    response.setHeader("Set-Cookie", loginCookie);

    delete user.password;

    response.send(user);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard("jwt"))
  @Post("logout")
  async logout(@Res({ passthrough: true }) response: Response) {
    const logoutCookie = this.authService.getLogoutCookie();

    response.setHeader("Set-Cookie", logoutCookie);

    response.send();
  }
}
