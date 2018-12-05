import { QueryResolvers } from '../generated/graphqlgen'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  me: (parent, args, context) => {
    const { id } = context.user
    return context.prisma.user({ id })
  },
  users: (parent, args, context) => {
    return context.prisma.users()
  },
}

export { Query }
