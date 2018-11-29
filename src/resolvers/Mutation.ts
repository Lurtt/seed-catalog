import { MutationResolvers } from '../generated/graphqlgen'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createUser: (parent, { email, firstname, lastname }, context) => {
    return context.prisma.createUser({ email, firstname, lastname })
  },
}

export { Mutation }
