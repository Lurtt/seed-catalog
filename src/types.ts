import { Prisma, Role, ID_Input } from './generated/prisma-client'
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
  id: ID_Input
  role: Role
}

export { Context, Request }
