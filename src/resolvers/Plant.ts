import { PlantResolvers } from '../generated/graphqlgen'
import { Context } from '../types'

export const Plant: PlantResolvers.Type = {
  ...PlantResolvers.defaultResolvers,

  offerItems: (parent, args, context: Context) => {
    return context.prisma.plant({ id: parent.id }).offerItems()
  },
}
