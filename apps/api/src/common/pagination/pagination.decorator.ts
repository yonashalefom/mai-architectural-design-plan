// Pagination decorator and DTO
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const Pagination = createParamDecorator((data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const page = parseInt(request.query.page) || 1
  const limit = parseInt(request.query.limit) || 10

  return { page, limit, skip: (page - 1) * limit }
})

