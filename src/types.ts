import { Prisma } from './generated/prisma-client'

export interface Context {
  request: any
  prisma: Prisma
}
