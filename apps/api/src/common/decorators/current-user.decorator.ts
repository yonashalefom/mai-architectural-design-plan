// Custom decorator to extract current user from request
import { createParamDecorator } from '@nestjs/common'

export const CurrentUser = createParamDecorator((data, req) => {
  // Extracts authenticated user from request
  return req.user
})

