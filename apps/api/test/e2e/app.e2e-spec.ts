// E2E tests for API
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../../src/app/app.module'

describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return 'Health check test'
  })
})

