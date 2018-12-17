import { Resolvers } from '../generated/graphqlgen'

import { Query } from './Query'
import { User } from './User'
import { Plant } from './Plant'
import { OfferItem } from './OfferItem'
import { Offer } from './Offer'
import { Donor } from './Donor'
import { Mutation } from './Mutation'

const resolvers: Resolvers = {
  Query,
  User,
  Plant,
  OfferItem,
  Offer,
  Donor,
  Mutation,
}

export { resolvers }
