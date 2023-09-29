import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
  constructor(private userServise:UsersService
              ){}

  async register(registerDto:RegisterDto){
    const user = await this.userServise.findOneByEmail(registerDto.email)

  if(user){
    throw new BadRequestException('El usuario ya existe')
  }
  const pass_encryptada = await bcrypt.hash(registerDto.password,10)
  return await this.userServise.create(new User(registerDto.email,pass_encryptada,registerDto.username))
}

  

  

  





}
