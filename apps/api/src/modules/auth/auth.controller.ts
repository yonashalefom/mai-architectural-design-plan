// Auth endpoints
import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: any) {
    return this.authService.login(credentials)
  }

  @Post('register')
  async register(@Body() data: any) {
    return this.authService.register(data)
  }
}
