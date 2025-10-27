// Email queue for sending notifications
import { Queue } from 'bullmq'

export const emailQueue = new Queue('email', {
  connection: { host: process.env.REDIS_HOST! },
})

