import { MutationResolvers } from '../../generated/graphqlgen'
import { Context } from '../../types'

const createOfferItem: MutationResolvers.CreateOfferItemResolver = (
  parent,
  { offerId, donorId, plantId },
  context: Context,
) => {
  return context.prisma.createOfferItem({
    offer: { connect: { id: offerId } },
    donors: { connect: { id: donorId } },
    plant: { connect: { id: plantId } },
  })
}

const deleteOfferItem: MutationResolvers.DeleteOfferItemResolver = (
  parent,
  { id },
  context: Context,
) => {
  return context.prisma.deleteOfferItem({ id })
}

export { createOfferItem, deleteOfferItem }
