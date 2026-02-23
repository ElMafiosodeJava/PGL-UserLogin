import { Controller, Get, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { ApiResponse } from '../models/api-response';
import { AuthGuard } from './auth/auth.guard';

@Controller('/')
export class AppController {
  @UseGuards(AuthGuard)
  @Get('welcome')
  public async registerUser(@Req() request: Request): Promise<ApiResponse<string>> {
    const username = request['user'].username;
    return {
      message: 'Received sucessfully!',
      object: `¡Estás logeado correctamente, ${username}. Enhorabuena!`,
      statusCode: HttpStatus.OK
    };
  }
}
