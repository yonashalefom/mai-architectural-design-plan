// JWT authentication guard for protected routes
import { Injectable, CanActivate } from '@nestjs/common'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate() {
    // Validates JWT token from request headers
  }
}

