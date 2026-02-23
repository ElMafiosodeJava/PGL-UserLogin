import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { ImagesRepository } from './images.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ImagesController],
  providers: [ImagesService, PrismaService, ImagesRepository]
})
export class ImagesModule {}
