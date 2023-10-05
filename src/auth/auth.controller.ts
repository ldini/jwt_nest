import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { Role } from 'src/common/enum/role.enum';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto:RegisterDto){
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto)
  }

  @Get('home')
  @UseGuards(AuthGuard)
  getHome(@Req() request){
    return this.authService.usuario(request.user.role)
  }
}
