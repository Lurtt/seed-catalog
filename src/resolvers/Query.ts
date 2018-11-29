import { QueryResolvers } from '../generated/graphqlgen'
import { clearConfigCache } from 'prettier'

const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  users: (parent, args, ctx) => {
    return ctx.prisma.users()
  },
}

export { Query }
