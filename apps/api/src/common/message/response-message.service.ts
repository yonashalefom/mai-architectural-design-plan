// Response message formatting service
import { Injectable } from '@nestjs/common'

@Injectable()
export class ResponseMessageService {
  success(key: string, data?: any) {
    // Formats success response
    return { message: key, data }
  }

  error(key: string, error?: any) {
    // Formats error response
    return { message: key, error }
  }
}

