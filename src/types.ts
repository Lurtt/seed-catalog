import { Prisma } from './generated/prisma-client'

export interface Context {
  request: any
  prisma: Prisma
}

export interface User {
  id: string
  email: string
  firstname: string
  lastname: string
  fullname: string
}
