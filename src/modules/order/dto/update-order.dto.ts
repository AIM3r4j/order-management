import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsUUID,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { ProductDto, PaymentDto } from './create-order.dto';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => PaymentDto)
  payment: PaymentDto;
}
