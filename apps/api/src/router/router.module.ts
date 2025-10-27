// Application router module - main routing setup
import { Module } from '@nestjs/common'
import { AuthModule } from '../modules/auth/auth.module'
import { OrderModule } from '../modules/order/order.module'
import { CustomerModule } from '../modules/customer/customer.module'
import { ProductionModule } from '../modules/production/production.module'

@Module({
  imports: [AuthModule, OrderModule, CustomerModule, ProductionModule],
})
export class RouterModule {}

