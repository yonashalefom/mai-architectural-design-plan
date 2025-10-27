// Database seeding script
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  // Seed database with initial data
  await prisma.$disconnect()
}

seed()

