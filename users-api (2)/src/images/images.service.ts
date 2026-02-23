import { Injectable } from '@nestjs/common';
import { ImagesRepository } from './images.repository';
import { ImageResponseDto } from 'models/images/image-response-dto';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository) {}

  public async saveNewImage(
    width: number,
    height: number,
    encodedData: string,
    userId: number
  ): Promise<ImageResponseDto> {
    const newImage = await this.imagesRepository.save(width, height, encodedData, userId);

    return {
      id: newImage.id,
      width: newImage.width,
      height: newImage.height,
      encodedData: newImage.data
    };
  }

  public async getAllUserImages(authorId: number): Promise<ImageResponseDto[]> {
    const imageEntities = await this.imagesRepository.findAll(authorId);
    return imageEntities.map((entity) => {
      return {
        id: entity.id,
        height: entity.height,
        width: entity.width,
        encodedData: entity.data
      };
    });
  }

  public async deleteImage(imageId: number, userId: number): Promise<string> {
    try {
      await this.imagesRepository.delete(imageId, userId);
      return 'OK';
    } catch (error) {
      return 'ERROR';
    }
  }
}
