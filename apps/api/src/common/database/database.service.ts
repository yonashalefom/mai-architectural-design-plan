// Database connection and query utilities
import { Injectable } from '@nestjs/common'
import { prisma } from '@magnoli/database'

@Injectable()
export class DatabaseService {
  get prisma() {
    return prisma
  }

  async transaction<T>(fn: (tx: any) => Promise<T>) {
    return prisma.$transaction(fn)
  }
}

