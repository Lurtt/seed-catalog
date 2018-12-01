import { hash, compare } from 'bcrypt'

import { MutationResolvers } from '../generated/graphqlgen'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup: async (parent, { email, password, firstname, lastname }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    })

    context.request.session.userId = user.id

    return user
  },

  signin: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }

    context.request.session.userId = user.id

    return user
  },

  signout: (parent, args, context) => {
    context.request.session.destroy()

    return 'You have successfully logged out!'
  },
}

export { Mutation }
