import { hash, compare } from 'bcrypt'

import { MutationResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup: async (
    parent,
    { email, password, firstname, lastname },
    context: Context,
  ) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    })

    context.request.session.user = { id: user.id, role: user.role }

    return user
  },

  signin: async (parent, { email, password }, context: Context) => {
    const user = await context.prisma.user({ email })
    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error('Invalid password')
    }

    context.request.session.user = { id: user.id, role: user.role }

    return user
  },

  signout: (parent, args, context: Context) => {
    context.request.session.destroy()

    return 'You have successfully logged out!'
  },
}

export { Mutation }
