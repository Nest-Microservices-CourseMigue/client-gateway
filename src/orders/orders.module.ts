import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    NatsModule,
    // ClientsModule.register([
    //   {
    //     name: ORDER_SERVICE,
    //     transport: Transport.TCP,
    //     options: {
    //       host: envs.orderMicroserviceHost,
    //       port: envs.ordertMicroservicePort,
    //     }
    //   },
    // ]),
  ],
})
export class OrdersModule {}
