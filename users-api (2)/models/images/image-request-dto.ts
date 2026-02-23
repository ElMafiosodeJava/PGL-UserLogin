import { IsNotEmpty } from 'class-validator';

export class ImageRequestDto {
  @IsNotEmpty()
  height: number;

  @IsNotEmpty()
  width: number;

  @IsNotEmpty()
  encodedData: string;
}
