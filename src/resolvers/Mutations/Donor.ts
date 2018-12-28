import { isEmpty } from 'lodash'

import { MutationResolvers } from '../../generated/graphqlgen'
import { Context } from '../../types'

const createDonor: MutationResolvers.CreateDonorResolver = (
  parent,
  { number, name },
  context: Context,
) => {
  return context.prisma.createDonor({ number, name })
}

const updateDonor: MutationResolvers.UpdateDonorResolver = (
  parent,
  { id, name, number },
  context: Context,
) => {
  return context.prisma.updateDonor({
    where: { id },
    data: { number, name },
  })
}

const deleteDonor: MutationResolvers.DeleteDonorResolver = (
  parent,
  { id },
  context: Context,
) => {
  return context.prisma.deleteDonor({ id })
}

const removeDonorFromOffer: MutationResolvers.RemoveDonorFromOfferResolver = async (
  parent,
  { donorId, offerId },
  context: Context,
) => {
  const removeDonor = async item => {
    const donors = await context.prisma
      .updateOfferItem({
        where: { id: item.id },
        data: { donors: { disconnect: { id: donorId } } },
      })
      .donors()

    if (isEmpty(donors)) {
      await context.prisma.deleteOfferItem({ id: item.id })
    }
  }

  await context.prisma.updateDonor({
    where: { id: donorId },
    data: { offers: { disconnect: { id: offerId } } },
  })

  const donorOfferedItems = await context.prisma
    .offer({ id: offerId })
    .items({ where: { donors_some: { id: donorId } } })

  donorOfferedItems.map(removeDonor)

  return 'Donor was removed from offer and its offer items'
}

const removeDonorFromOfferItem: MutationResolvers.RemoveDonorFromOfferItemResolver = async (
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

export {
  createDonor,
  updateDonor,
  deleteDonor,
  removeDonorFromOffer,
  removeDonorFromOfferItem,
}
