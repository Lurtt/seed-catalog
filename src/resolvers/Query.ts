import { QueryResolvers } from '../generated/graphqlgen'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  users: (parent, args, ctx) => {
    return ctx.prisma.users()
  },
}

export { Query }
