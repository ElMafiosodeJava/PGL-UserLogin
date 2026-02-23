import { Injectable } from '@nestjs/common';
import { ImageEntity } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ImagesRepository {
  constructor(private prisma: PrismaService) {}

  public async findAll(authorId: number): Promise<ImageEntity[]> {
    return this.prisma.imageEntity.findMany({
      where: { authorId }
    });
  }

  public async save(width: number, height: number, data: string, authorId: number): Promise<ImageEntity> {
    return this.prisma.imageEntity.create({
      data: { width, height, data, authorId }
    });
  }

  public async delete(imageId: number, authorId: number): Promise<ImageEntity> {
    return this.prisma.imageEntity.delete({
      where: { id: imageId, authorId }
    });
  }
}
