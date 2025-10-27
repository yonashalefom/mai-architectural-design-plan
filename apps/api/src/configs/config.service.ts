// Configuration service for environment variables
import { Injectable } from '@nestjs/common'

@Injectable()
export class ConfigService {
  get databaseUrl() {
    return process.env.DATABASE_URL
  }

  get redisHost() {
    return process.env.REDIS_HOST || 'localhost'
  }

  get jwtSecret() {
    return process.env.JWT_SECRET
  }
}

