import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { ApiResponse } from 'models/api-response';
import { ImageRequestDto } from 'models/images/image-request-dto';
import { ImageResponseDto } from 'models/images/image-response-dto';
import { ImagesService } from './images.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { TokenPayload } from 'types/token-payload';

@UseGuards(AuthGuard)
@Controller('images')
export class ImagesController {
  constructor(private imageService: ImagesService) {}

  @Post('save')
  public async saveNewImage(@Req() req: Request, @Body() dto: ImageRequestDto): Promise<ApiResponse<ImageResponseDto>> {
    const userId = this.extractUserId(req);
    const imageResponse = await this.imageService.saveNewImage(dto.width, dto.height, dto.encodedData, userId);
    return { message: 'Image successfully saved.', object: imageResponse, statusCode: HttpStatus.OK };
  }

  @Get('get-all')
  public async getAll(@Req() req: Request): Promise<ApiResponse<ImageResponseDto[]>> {
    const userId = this.extractUserId(req);
    const imagesResponse = await this.imageService.getAllUserImages(userId);
    return { message: 'Here are your images.', object: imagesResponse, statusCode: HttpStatus.OK };
  }

  @Delete(':id')
  public async deleteImage(
    @Req() req: Request,
    @Param('id', new ParseIntPipe()) imageId: number
  ): Promise<ApiResponse<null>> {
    const userId = this.extractUserId(req);
    const result = await this.imageService.deleteImage(imageId, userId);

    let message: string;
    let statusCode: HttpStatus;
    if (result === 'OK') {
      message = 'Image successfully deleted.';
      statusCode = HttpStatus.OK;
    } else {
      message = 'Image not found.';
      statusCode = HttpStatus.NOT_FOUND;
    }

    return {
      message,
      object: null,
      statusCode
    };
  }

  private extractUserId(request: Request): number {
    const payloadFromAuthGuard = request['user'] as TokenPayload;
    return payloadFromAuthGuard.sub as number;
  }
}
