import { OfferResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const Offer: OfferResolvers.Type = {
  ...OfferResolvers.defaultResolvers,

  items: (parent, args, context: Context) => {
    return context.prisma.offer({ id: parent.id }).items()
  },
}
