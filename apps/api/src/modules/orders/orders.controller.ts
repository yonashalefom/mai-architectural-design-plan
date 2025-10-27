// Order endpoints: create, update, track status
import { Controller, Get, Post, Put, Param } from '@nestjs/common'

@Controller('orders')
export class OrdersController {
  @Post()
  async createOrder(@Body() data: any) {
    // Creates new dry-cleaning order
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    // Returns order details
  }

  @Put(':id/status')
  async updateStatus(@Param('id') id: string, @Body() status: any) {
    // Updates order status in production workflow
  }
}

