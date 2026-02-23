import { Injectable } from '@nestjs/common';
import { UserEntity } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  public async findUser(userEmail: string): Promise<UserEntity | null> {
    return this.prisma.userEntity.findUnique({
      where: { email: userEmail }
    });
  }

  public async createUser(email: string, fullname: string, hashedPwd: string): Promise<UserEntity> {
    return this.prisma.userEntity.create({
      data: { email, fullname, hashedPwd }
    });
  }
}
