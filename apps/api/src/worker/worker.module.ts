// Background worker module - BullMQ jobs
import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'

@Module({
  imports: [
    BullModule.registerQueue({ name: 'email' }),
    BullModule.registerQueue({ name: 'report' }),
    BullModule.registerQueue({ name: 'order' }),
  ],
})
export class WorkerModule {}

