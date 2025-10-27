// Production endpoints
import { Controller, Get, Post } from '@nestjs/common'
import { ProductionService } from './production.service'

@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get('workflow')
  async getWorkflow() {
    return this.productionService.getWorkflowStages()
  }
}
