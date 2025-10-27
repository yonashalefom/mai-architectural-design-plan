// Order business logic
import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../../common/database/database.service'

@Injectable()
export class OrderService {
  constructor(private readonly database: DatabaseService) {}

  async findAll(pagination: any) {
    // Returns paginated orders
    return this.database.prisma.order.findMany(pagination)
  }

  async create(order: any) {
    // Creates new dry-cleaning order
    return this.database.prisma.order.create({ data: order })
  }

  async updateStatus(id: string, status: any) {
    // Updates order status in production workflow
    return this.database.prisma.order.update({ where: { id }, data: { status } })
  }
}

