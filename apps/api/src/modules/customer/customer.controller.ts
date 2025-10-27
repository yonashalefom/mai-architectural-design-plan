// Customer endpoints
import { Controller, Get, Post } from '@nestjs/common'
import { CustomerService } from './customer.service'

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async list() {
    return this.customerService.findAll()
  }

  @Post()
  async create(@Body() customer: any) {
    return this.customerService.create(customer)
  }
}

