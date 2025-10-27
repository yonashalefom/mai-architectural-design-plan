// Order endpoints
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common'
import { OrderService } from './order.service'
import { Pagination } from '../../common/pagination/pagination.decorator'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async list(@Pagination() pagination: any) {
    return this.orderService.findAll(pagination)
  }

  @Post()
  async create(@Body() order: any) {
    return this.orderService.create(order)
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Body() status: any) {
    return this.orderService.updateStatus(id, status)
  }
}

