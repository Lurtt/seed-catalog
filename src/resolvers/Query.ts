import { QueryResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me: (parent, args, context: Context) => {
    const { id } = context.user
    return context.prisma.user({ id })
  },
  users: (parent, args, context: Context) => {
    return context.prisma.users()
  },
  plants: (parent, args, context: Context) => {
    return context.prisma.plants()
  },
  donors: (parent, args, context: Context) => {
    return context.prisma.donors()
  },
  offers: (parent, { where, orderBy }, context: Context) => {
    return context.prisma.offers({ where, orderBy })
  },
  offer: (parent, { id }, context: Context) => {
    return context.prisma.offer({ id })
  },
}

export { Query }
