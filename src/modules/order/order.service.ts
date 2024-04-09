import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './interface/order.interface';
import { PartialUpdateOrderDto } from './dto/partial-update-order.dto';

@Injectable()
export class OrderService {
  private readonly orders: Order[] = [];

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order {
    return this.orders.find((order) => order.id === id);
  }

  create(createOrderDto: CreateOrderDto): Order {
    const newOrder: Order = {
      id: (this.orders.length + 1).toString(),
      userId: createOrderDto.userId,
      products: createOrderDto.products,
      payment: createOrderDto.payment,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Order {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) {
      return null;
    }
    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...updateOrderDto,
    };
    return this.orders[orderIndex];
  }

  partiallyUpdate(
    id: string,
    partialUpdateOrderDto: PartialUpdateOrderDto,
  ): Order {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) {
      return null;
    }
    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...partialUpdateOrderDto,
    };
    return this.orders[orderIndex];
  }

  remove(id: string): boolean {
    const orderIndex = this.orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) {
      return false;
    }
    this.orders.splice(orderIndex, 1);
    return true;
  }
}
