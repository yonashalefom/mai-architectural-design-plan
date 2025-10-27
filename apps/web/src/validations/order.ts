// Order validation schema with Zod
import { z } from 'zod'

export const orderSchema = z.object({
  customerId: z.string().min(1),
  items: z.array(z.object({})).min(1),
})

