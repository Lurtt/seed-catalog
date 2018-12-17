import { DonorResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const Donor: DonorResolvers.Type = {
  ...DonorResolvers.defaultResolvers,

  OfferItems: (parent, args, context: Context) => {
    return context.prisma.donor({ id: parent.id }).OfferItems()
  },
}
