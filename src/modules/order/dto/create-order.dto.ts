import {
  IsNotEmpty,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
  IsString,
  IsUUID,
  IsInt,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;
}

export class PaymentDto {
  @IsNotEmpty()
  @IsString()
  method: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class CreateOrderDto {
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
