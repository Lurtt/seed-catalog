import { isEmpty } from 'lodash'

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

const unassignOfferItemDonor: MutationResolvers.UnassignOfferItemDonorResolver = async (
  parent,
  { donorId, offerItemId },
  context: Context,
) => {
  const donors = await context.prisma
    .updateOfferItem({
      where: { id: offerItemId },
      data: { donors: { disconnect: { id: donorId } } },
    })
    .donors()

  if (isEmpty(donors)) {
    await context.prisma.deleteOfferItem({ id: offerItemId })
    return 'The record was removed from offer because it had no donors'
  }

  return 'The record was modified'
}

export { createOfferItem, deleteOfferItem, unassignOfferItemDonor }
