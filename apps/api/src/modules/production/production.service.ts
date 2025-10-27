// Production business logic
import { Injectable } from '@nestjs/common'
import { DatabaseService } from '../../common/database/database.service'

@Injectable()
export class ProductionService {
  constructor(private readonly database: DatabaseService) {}

  async getWorkflowStages() {
    // Returns all workflow stages and order counts
    return []
  }
}
