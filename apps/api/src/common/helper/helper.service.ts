// Shared helper functions
import { Injectable } from '@nestjs/common'

@Injectable()
export class HelperService {
  generateId() {
    return crypto.randomUUID()
  }

  formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US').format(date)
  }
}

