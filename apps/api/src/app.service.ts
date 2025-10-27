// Root service for basic app logic
import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getVersion() {
    return { version: '1.0.0' }
  }
}

