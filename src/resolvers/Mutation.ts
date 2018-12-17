import { hash, compare } from 'bcrypt'

import { MutationResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup: async (parent, { email, password, name }, context: Context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      email,
      password: hashedPassword,
      name,
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

  createDonor: (parent, { number, name }, context: Context) => {
    return context.prisma.createDonor({ number, name })
  },
  updateDonor: (parent, { id, name, number }, context: Context) => {
    return context.prisma.updateDonor({
      where: { id },
      data: { number, name },
    })
  },
  deleteDonor: (parent, { id }, context: Context) => {
    return context.prisma.deleteDonor({ id })
  },

  createPlant: (parent, { name }, context: Context) => {
    return context.prisma.createPlant({ name })
  },
  updatePlant: (parent, { id, name }, context: Context) => {
    return context.prisma.updatePlant({
      where: { id },
      data: { name },
    })
  },
  deletePlant: (parent, { id }, context: Context) => {
    return context.prisma.deletePlant({ id })
  },
}

export { Mutation }
