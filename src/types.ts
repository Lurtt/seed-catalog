import { Prisma } from './generated/prisma-client'

export interface Context {
  response: any
  prisma: Prisma
}

export interface User {
  id: string
  email: string
  firstname: string
  lastname: string
  fullname: string
}
