import { QueryResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me: (parent, args, context: Context) => {
    if (!context.user) return null

    const { id } = context.user
    return context.prisma.user({ id })
  },
  users: (parent, args, context: Context) => {
    return context.prisma.users()
  },
  plants: (parent, { where, orderBy }, context: Context) => {
    return context.prisma.plants({ where, orderBy })
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
