import { MutationResolvers } from '../generated/graphqlgen'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createUser: (parent, { name, email }, context) => {
    return context.prisma.createUser({ name, email })
  },
}

export { Mutation }
