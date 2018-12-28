import { DonorResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const Donor: DonorResolvers.Type = {
  ...DonorResolvers.defaultResolvers,

  offers: ({ id }, args, context: Context) => {
    return context.prisma.donor({ id }).offers()
  },
  OfferItems: ({ id }, args, context: Context) => {
    return context.prisma.donor({ id }).OfferItems()
  },
}
