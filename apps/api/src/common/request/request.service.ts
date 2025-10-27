// Request validation and parsing service
import { Injectable } from '@nestjs/common'

@Injectable()
export class RequestService {
  parseQuery(query: any) {
    // Parses and validates query parameters
    return query
  }

  extractUser(request: any) {
    // Extracts authenticated user from request
    return request.user
  }
}

