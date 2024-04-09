import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PartialUpdateOrderDto } from './dto/partial-update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async findAll() {
    const orders = await this.orderService.findAll();
    return orders;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.orderService.findOne(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    if (
      !createOrderDto ||
      !createOrderDto.userId ||
      !createOrderDto.products ||
      createOrderDto.products.length === 0
    ) {
      throw new BadRequestException('Invalid order data');
    }
    const createdOrder = await this.orderService.create(createOrderDto);
    return createdOrder;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    const updatedOrder = await this.orderService.update(id, updateOrderDto);
    if (!updatedOrder) {
      throw new NotFoundException('Order not found');
    }
    return updatedOrder;
  }

  @Patch(':id')
  async partiallyUpdate(
    @Param('id') id: string,
    @Body() partialUpdateOrderDto: PartialUpdateOrderDto,
  ) {
    const updatedOrder = await this.orderService.partiallyUpdate(
      id,
      partialUpdateOrderDto,
    );
    if (!updatedOrder) {
      throw new NotFoundException('Order not found');
    }
    return updatedOrder;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedOrder = await this.orderService.remove(id);
    if (!deletedOrder) {
      throw new NotFoundException('Order not found');
    }
    return { message: 'Order deleted successfully' };
  }
}
