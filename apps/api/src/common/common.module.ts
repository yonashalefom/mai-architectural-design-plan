// Common module - exports shared providers
import { Module, Global } from '@nestjs/common'
import { DatabaseService } from './database/database.service'
import { HelperService } from './helper/helper.service'
import { ResponseMessageService } from './message/response-message.service'
import { RequestService } from './request/request.service'
import { FileService } from './file/file.service'

@Global()
@Module({
  providers: [
    DatabaseService,
    HelperService,
    ResponseMessageService,
    RequestService,
    FileService,
  ],
  exports: [
    DatabaseService,
    HelperService,
    ResponseMessageService,
    RequestService,
    FileService,
  ],
})
export class CommonModule {}

