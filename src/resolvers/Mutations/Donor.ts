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

export { createDonor, updateDonor, deleteDonor }
