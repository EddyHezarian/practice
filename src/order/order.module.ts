import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderFactory } from 'src/schema/order.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:Order.name,
    schema:OrderFactory
  }])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
