// Queue module - BullMQ job processors
import { Module } from '@nestjs/common'
import { QueueService } from './queue.service'

@Module({
  providers: [QueueService],
  exports: [QueueService],
})
export class QueueModule {}

