import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, ORDER_SERVICE } from '../config';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      { 
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.orderMicroserviceHost,
          port: envs.ordertMicroservicePort,
        }
      },
    ]),
  ],
})
export class OrdersModule {}
