import { OfferResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const Offer: OfferResolvers.Type = {
  ...OfferResolvers.defaultResolvers,

  donors: ({ id }, args, context: Context) => {
    return context.prisma.offer({ id }).donors()
  },
  items: ({ id }, args, context: Context) => {
    return context.prisma.offer({ id }).items()
  },
}
