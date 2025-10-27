// Report generation queue
import { Queue } from 'bullmq'

export const reportQueue = new Queue('report', {
  connection: { host: process.env.REDIS_HOST! },
})

