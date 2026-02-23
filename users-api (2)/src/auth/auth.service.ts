import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { RegisterResponseDto } from 'models/auth/register-response-dto';
import { hashTools } from 'src/utils/hash-tools';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from 'types/token-payload';
import { LoginResponsetDto } from 'models/auth/login-response-dto';

@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService
  ) {}

  public async registerNewUser(fullname: string, email: string, password: string): Promise<RegisterResponseDto> {
    const user = await this.usersRepository.findUser(email);

    if (user != null) {
      throw new ConflictException('Email already registered.');
    }

    const hashedPwd = await hashTools.hashPassword(password);
    const userEntity = await this.usersRepository.createUser(email, fullname, hashedPwd);

    return {
      id: userEntity.id,
      email: userEntity.email,
      fullname: userEntity.fullname
    };
  }

  public async signIn(email: string, password: string): Promise<LoginResponsetDto> {
    const userEntity = await this.usersRepository.findUser(email);

    if (userEntity == null || !(await hashTools.isSamePassword(password, userEntity.hashedPwd))) {
      throw new UnauthorizedException('Invalid user or password.');
    }

    const payload: TokenPayload = { sub: userEntity.id, username: userEntity.fullname };
    const bearerToken = await this.jwtService.signAsync(payload);

    return {
      email: userEntity.email,
      userId: userEntity.id,
      token: bearerToken
    };
  }
}
