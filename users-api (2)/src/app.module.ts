import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, ImagesModule],
  controllers: [AppController],
  providers: [PrismaService]
})
export class AppModule {}
