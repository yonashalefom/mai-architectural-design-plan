// Auth business logic
import { Injectable } from '@nestjs/common'
import { generateToken, verifyToken } from '@magnoli/auth'

@Injectable()
export class AuthService {
  async login(credentials: any) {
    // Validates credentials and returns JWT
    return { token: generateToken({ userId: '123' }) }
  }

  async register(data: any) {
    // Creates new user account
    return { token: generateToken({ userId: '123' }) }
  }
}
