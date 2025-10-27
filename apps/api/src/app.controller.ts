// Health check and basic API info
import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  getHealth() {
    return { status: 'ok', service: 'magnoli-api' }
  }
}

