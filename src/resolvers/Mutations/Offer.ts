import { MutationResolvers } from '../../generated/graphqlgen'
import { Context } from '../../types'

const createOffer: MutationResolvers.CreateOfferResolver = (
  parent,
  { name },
  context: Context,
) => {
  return context.prisma.createOffer({ name })
}

const updateOffer: MutationResolvers.UpdateOfferResolver = (
  parent,
  { id, name },
  context: Context,
) => {
  return context.prisma.updateOffer({
    where: { id },
    data: { name },
  })
}

const deleteOffer: MutationResolvers.DeleteOfferResolver = (
  parent,
  { id },
  context: Context,
) => {
  return context.prisma.deleteOffer({ id })
}

export { createOffer, updateOffer, deleteOffer }
