import { MutationResolvers } from '../generated/graphqlgen'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createUser: async (parent, { email, firstname, lastname }, context) => {
    const user = await context.prisma.createUser({ email, firstname, lastname })

    context.request.session.userId = user.id

    return user
  },
}

export { Mutation }
