import { Prisma } from './generated/prisma-client'
import { Request as ExpressRequest } from 'express-serve-static-core'

interface Context {
  request: Request
  user: User
  prisma: Prisma
}

interface Request extends ExpressRequest {
  session: Session
}

interface Session {
  user: User
  destroy: Function
}

interface User {
  id: String
  role: String
}

export { Context, Request }
