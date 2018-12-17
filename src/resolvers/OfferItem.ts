import { OfferItemResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const OfferItem: OfferItemResolvers.Type = {
  ...OfferItemResolvers.defaultResolvers,

  offer: (parent, args, context: Context) => {
    return context.prisma.offerItem({ id: parent.id }).offer()
  },
  donors: (parent, args, context: Context) => {
    return context.prisma.offerItem({ id: parent.id }).donors()
  },
  plant: (parent, args, context: Context) => {
    return context.prisma.offerItem({ id: parent.id }).plant()
  },
}
