// Order validation for admin actions
import { z } from 'zod'

export const adminOrderSchema = z.object({
  status: z.enum(['pending', 'in_progress', 'completed']),
})

