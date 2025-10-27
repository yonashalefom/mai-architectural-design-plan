// Prisma client export for all apps
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
export type { Order, Customer, Employee, Item } from '@prisma/client'

