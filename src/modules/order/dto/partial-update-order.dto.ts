import { Type } from 'class-transformer';
import {
  IsOptional,
  IsUUID,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { ProductDto, PaymentDto } from './create-order.dto';

export class PartialUpdateOrderDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products?: ProductDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => PaymentDto)
  payment?: PaymentDto;
}
