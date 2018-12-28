import { MutationResolvers } from '../../generated/graphqlgen'
import { signup, signin, signout } from './Auth'
import {
  createDonor,
  updateDonor,
  deleteDonor,
  removeDonorFromOffer,
  removeDonorFromOfferItem,
} from './Donor'
import { createPlant, updatePlant, deletePlant } from './Plant'
import { createOffer, updateOffer, deleteOffer } from './Offer'
import { createOfferItem, deleteOfferItem } from './OfferItem'

const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  signup,
  signin,
  signout,

  createDonor,
  updateDonor,
  deleteDonor,
  removeDonorFromOffer,
  removeDonorFromOfferItem,

  createPlant,
  updatePlant,
  deletePlant,

  createOffer,
  updateOffer,
  deleteOffer,

  createOfferItem,
  deleteOfferItem,
}

export { Mutation }
