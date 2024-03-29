import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async registerUser(@Body() user: any) {
    const userLogged = await this.loginService.login(user);
    if (userLogged.length == 0) {
      throw new HttpException(
        'User or Password incorrects',
        HttpStatus.NOT_FOUND,
      );
    }
    return userLogged;
  }
}
