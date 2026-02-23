import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterRequestDto {
  @IsNotEmpty()
  fullname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  pswd: string;
}
