// Order processing queue
import { Queue } from 'bullmq'

export const orderQueue = new Queue('order', {
  connection: { host: process.env.REDIS_HOST! },
})

