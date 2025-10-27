// Payment endpoints
import { Controller, Post } from '@nestjs/common'

@Controller('payments')
export class PaymentsController {
  @Post('intent')
  async createPaymentIntent(@Body() data: any) {
    // Creates Stripe payment intent
  }

  @Post('webhook')
  async handleWebhook(@Body() event: any) {
    // Handles Stripe webhooks
  }
}

