// Root NestJS module - imports all feature modules
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    // AuthModule, OrdersModule, CustomersModule, etc.
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

