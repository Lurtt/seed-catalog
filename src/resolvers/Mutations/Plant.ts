import { MutationResolvers } from '../../generated/graphqlgen'
import { Context } from '../../types'

const createPlant: MutationResolvers.CreatePlantResolver = (
  parent,
  { name },
  context: Context,
) => {
  return context.prisma.createPlant({ name })
}

const updatePlant: MutationResolvers.UpdatePlantResolver = (
  parent,
  { id, name },
  context: Context,
) => {
  return context.prisma.updatePlant({
    where: { id },
    data: { name },
  })
}

const deletePlant: MutationResolvers.DeletePlantResolver = (
  parent,
  { id },
  context: Context,
) => {
  return context.prisma.deletePlant({ id })
}

export { createPlant, updatePlant, deletePlant }
