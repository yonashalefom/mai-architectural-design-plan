// Customer endpoints
import { Controller, Get, Post, Put, Param } from '@nestjs/common'

@Controller('customers')
export class CustomersController {
  @Get()
  async list() {
    // Returns paginated customer list
  }

  @Post()
  async create(@Body() data: any) {
    // Creates new customer record
  }
}

