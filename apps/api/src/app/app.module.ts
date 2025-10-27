// Root application module
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CommonModule } from '../common/common.module'
import { ConfigModule } from '../configs/config.module'

@Module({
  imports: [CommonModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

