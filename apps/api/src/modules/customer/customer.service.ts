// Customer business logic
import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../../common/database/database.service'

@Injectable()
export class CustomerService {
  constructor(private readonly database: DatabaseService) {}

  async findAll() {
    return this.database.prisma.customer.findMany()
  }

  async create(customer: any) {
    return this.database.prisma.customer.create({ data: customer })
  }
}

