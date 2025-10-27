// Unit tests for AppService
import { Test, TestingModule } from '@nestjs/testing'
import { AppService } from '../../src/app/app.service'

describe('AppService', () => {
  let service: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    service = module.get<AppService>(AppService)
  })

  it('should return health status', () => {
    expect(service.getHealth()).toEqual({ status: 'ok' })
  })
})

