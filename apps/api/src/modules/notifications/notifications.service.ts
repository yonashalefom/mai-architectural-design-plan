// Notifications service
import { Injectable } from '@nestjs/common'

@Injectable()
export class NotificationsService {
  async sendToUser(userId: string, message: string) {
    // Sends notification to specific user
  }
}

