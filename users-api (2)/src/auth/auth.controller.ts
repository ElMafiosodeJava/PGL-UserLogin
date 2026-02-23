import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from 'models/auth/login-request-dto';
import { ApiResponse } from 'models/api-response';
import { RegisterRequestDto } from 'models/auth/register-request-dto';
import { RegisterResponseDto } from 'models/auth/register-response-dto';
import { LoginResponsetDto } from 'models/auth/login-response-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  public async registerUser(@Body() userDto: RegisterRequestDto): Promise<ApiResponse<RegisterResponseDto>> {
    const registerResponse = await this.authService.registerNewUser(userDto.fullname, userDto.email, userDto.pswd);
    console.log(registerResponse)
    return { message: 'User successfully registered.', object: registerResponse, statusCode: HttpStatus.OK };
  }
  
  @Post('login')
  public async logIn(@Body() loginDto: LoginRequestDto): Promise<ApiResponse<LoginResponsetDto>> {
    const loginResponse = await this.authService.signIn(loginDto.email, loginDto.pswd);
    console.log(loginResponse)
    return { message: 'User successfully logged.', object: loginResponse, statusCode: HttpStatus.OK };
  }
}
