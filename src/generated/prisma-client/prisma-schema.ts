export const typeDefs = /* GraphQL */ `type AggregateDonor {
  count: Int!
}

type AggregateOffer {
  count: Int!
}

type AggregateOfferItem {
  count: Int!
}

type AggregatePlant {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Donor {
  id: ID!
  number: String!
  name: String!
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
  OfferItems(where: OfferItemWhereInput, orderBy: OfferItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OfferItem!]
}

type DonorConnection {
  pageInfo: PageInfo!
  edges: [DonorEdge]!
  aggregate: AggregateDonor!
}

input DonorCreateInput {
  number: String!
  name: String!
  offers: OfferCreateManyWithoutDonorsInput
  OfferItems: OfferItemCreateManyWithoutDonorsInput
}

input DonorCreateManyWithoutOfferItemsInput {
  create: [DonorCreateWithoutOfferItemsInput!]
  connect: [DonorWhereUniqueInput!]
}

input DonorCreateManyWithoutOffersInput {
  create: [DonorCreateWithoutOffersInput!]
  connect: [DonorWhereUniqueInput!]
}

input DonorCreateWithoutOfferItemsInput {
  number: String!
  name: String!
  offers: OfferCreateManyWithoutDonorsInput
}

input DonorCreateWithoutOffersInput {
  number: String!
  name: String!
  OfferItems: OfferItemCreateManyWithoutDonorsInput
}

type DonorEdge {
  node: Donor!
  cursor: String!
}

enum DonorOrderByInput {
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DonorPreviousValues {
  id: ID!
  number: String!
  name: String!
}

input DonorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [DonorScalarWhereInput!]
  OR: [DonorScalarWhereInput!]
  NOT: [DonorScalarWhereInput!]
}

type DonorSubscriptionPayload {
  mutation: MutationType!
  node: Donor
  updatedFields: [String!]
  previousValues: DonorPreviousValues
}

input DonorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DonorWhereInput
  AND: [DonorSubscriptionWhereInput!]
  OR: [DonorSubscriptionWhereInput!]
  NOT: [DonorSubscriptionWhereInput!]
}

input DonorUpdateInput {
  number: String
  name: String
  offers: OfferUpdateManyWithoutDonorsInput
  OfferItems: OfferItemUpdateManyWithoutDonorsInput
}

input DonorUpdateManyDataInput {
  number: String
  name: String
}

input DonorUpdateManyMutationInput {
  number: String
  name: String
}

input DonorUpdateManyWithoutOfferItemsInput {
  create: [DonorCreateWithoutOfferItemsInput!]
  delete: [DonorWhereUniqueInput!]
  connect: [DonorWhereUniqueInput!]
  disconnect: [DonorWhereUniqueInput!]
  update: [DonorUpdateWithWhereUniqueWithoutOfferItemsInput!]
  upsert: [DonorUpsertWithWhereUniqueWithoutOfferItemsInput!]
  deleteMany: [DonorScalarWhereInput!]
  updateMany: [DonorUpdateManyWithWhereNestedInput!]
}

input DonorUpdateManyWithoutOffersInput {
  create: [DonorCreateWithoutOffersInput!]
  delete: [DonorWhereUniqueInput!]
  connect: [DonorWhereUniqueInput!]
  disconnect: [DonorWhereUniqueInput!]
  update: [DonorUpdateWithWhereUniqueWithoutOffersInput!]
  upsert: [DonorUpsertWithWhereUniqueWithoutOffersInput!]
  deleteMany: [DonorScalarWhereInput!]
  updateMany: [DonorUpdateManyWithWhereNestedInput!]
}

input DonorUpdateManyWithWhereNestedInput {
  where: DonorScalarWhereInput!
  data: DonorUpdateManyDataInput!
}

input DonorUpdateWithoutOfferItemsDataInput {
  number: String
  name: String
  offers: OfferUpdateManyWithoutDonorsInput
}

input DonorUpdateWithoutOffersDataInput {
  number: String
  name: String
  OfferItems: OfferItemUpdateManyWithoutDonorsInput
}

input DonorUpdateWithWhereUniqueWithoutOfferItemsInput {
  where: DonorWhereUniqueInput!
  data: DonorUpdateWithoutOfferItemsDataInput!
}

input DonorUpdateWithWhereUniqueWithoutOffersInput {
  where: DonorWhereUniqueInput!
  data: DonorUpdateWithoutOffersDataInput!
}

input DonorUpsertWithWhereUniqueWithoutOfferItemsInput {
  where: DonorWhereUniqueInput!
  update: DonorUpdateWithoutOfferItemsDataInput!
  create: DonorCreateWithoutOfferItemsInput!
}

input DonorUpsertWithWhereUniqueWithoutOffersInput {
  where: DonorWhereUniqueInput!
  update: DonorUpdateWithoutOffersDataInput!
  create: DonorCreateWithoutOffersInput!
}

input DonorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  number: String
  number_not: String
  number_in: [String!]
  number_not_in: [String!]
  number_lt: String
  number_lte: String
  number_gt: String
  number_gte: String
  number_contains: String
  number_not_contains: String
  number_starts_with: String
  number_not_starts_with: String
  number_ends_with: String
  number_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
  OfferItems_every: OfferItemWhereInput
  OfferItems_some: OfferItemWhereInput
  OfferItems_none: OfferItemWhereInput
  AND: [DonorWhereInput!]
  OR: [DonorWhereInput!]
  NOT: [DonorWhereInput!]
}

input DonorWhereUniqueInput {
  id: ID
  number: String
}

scalar Long

type Mutation {
  createDonor(data: DonorCreateInput!): Donor!
  updateDonor(data: DonorUpdateInput!, where: DonorWhereUniqueInput!): Donor
  updateManyDonors(data: DonorUpdateManyMutationInput!, where: DonorWhereInput): BatchPayload!
  upsertDonor(where: DonorWhereUniqueInput!, create: DonorCreateInput!, update: DonorUpdateInput!): Donor!
  deleteDonor(where: DonorWhereUniqueInput!): Donor
  deleteManyDonors(where: DonorWhereInput): BatchPayload!
  createOffer(data: OfferCreateInput!): Offer!
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  updateManyOffers(data: OfferUpdateManyMutationInput!, where: OfferWhereInput): BatchPayload!
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
  createOfferItem(data: OfferItemCreateInput!): OfferItem!
  updateOfferItem(data: OfferItemUpdateInput!, where: OfferItemWhereUniqueInput!): OfferItem
  upsertOfferItem(where: OfferItemWhereUniqueInput!, create: OfferItemCreateInput!, update: OfferItemUpdateInput!): OfferItem!
  deleteOfferItem(where: OfferItemWhereUniqueInput!): OfferItem
  deleteManyOfferItems(where: OfferItemWhereInput): BatchPayload!
  createPlant(data: PlantCreateInput!): Plant!
  updatePlant(data: PlantUpdateInput!, where: PlantWhereUniqueInput!): Plant
  updateManyPlants(data: PlantUpdateManyMutationInput!, where: PlantWhereInput): BatchPayload!
  upsertPlant(where: PlantWhereUniqueInput!, create: PlantCreateInput!, update: PlantUpdateInput!): Plant!
  deletePlant(where: PlantWhereUniqueInput!): Plant
  deleteManyPlants(where: PlantWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Offer {
  id: ID!
  name: String!
  donors(where: DonorWhereInput, orderBy: DonorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Donor!]
  items(where: OfferItemWhereInput, orderBy: OfferItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OfferItem!]
}

type OfferConnection {
  pageInfo: PageInfo!
  edges: [OfferEdge]!
  aggregate: AggregateOffer!
}

input OfferCreateInput {
  name: String!
  donors: DonorCreateManyWithoutOffersInput
  items: OfferItemCreateManyWithoutOfferInput
}

input OfferCreateManyWithoutDonorsInput {
  create: [OfferCreateWithoutDonorsInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateOneWithoutItemsInput {
  create: OfferCreateWithoutItemsInput
  connect: OfferWhereUniqueInput
}

input OfferCreateWithoutDonorsInput {
  name: String!
  items: OfferItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutItemsInput {
  name: String!
  donors: DonorCreateManyWithoutOffersInput
}

type OfferEdge {
  node: Offer!
  cursor: String!
}

type OfferItem {
  id: ID!
  offer: Offer!
  donors(where: DonorWhereInput, orderBy: DonorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Donor!]
  plant: Plant!
}

type OfferItemConnection {
  pageInfo: PageInfo!
  edges: [OfferItemEdge]!
  aggregate: AggregateOfferItem!
}

input OfferItemCreateInput {
  offer: OfferCreateOneWithoutItemsInput!
  donors: DonorCreateManyWithoutOfferItemsInput
  plant: PlantCreateOneWithoutOfferItemsInput!
}

input OfferItemCreateManyWithoutDonorsInput {
  create: [OfferItemCreateWithoutDonorsInput!]
  connect: [OfferItemWhereUniqueInput!]
}

input OfferItemCreateManyWithoutOfferInput {
  create: [OfferItemCreateWithoutOfferInput!]
  connect: [OfferItemWhereUniqueInput!]
}

input OfferItemCreateManyWithoutPlantInput {
  create: [OfferItemCreateWithoutPlantInput!]
  connect: [OfferItemWhereUniqueInput!]
}

input OfferItemCreateWithoutDonorsInput {
  offer: OfferCreateOneWithoutItemsInput!
  plant: PlantCreateOneWithoutOfferItemsInput!
}

input OfferItemCreateWithoutOfferInput {
  donors: DonorCreateManyWithoutOfferItemsInput
  plant: PlantCreateOneWithoutOfferItemsInput!
}

input OfferItemCreateWithoutPlantInput {
  offer: OfferCreateOneWithoutItemsInput!
  donors: DonorCreateManyWithoutOfferItemsInput
}

type OfferItemEdge {
  node: OfferItem!
  cursor: String!
}

enum OfferItemOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OfferItemPreviousValues {
  id: ID!
}

input OfferItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [OfferItemScalarWhereInput!]
  OR: [OfferItemScalarWhereInput!]
  NOT: [OfferItemScalarWhereInput!]
}

type OfferItemSubscriptionPayload {
  mutation: MutationType!
  node: OfferItem
  updatedFields: [String!]
  previousValues: OfferItemPreviousValues
}

input OfferItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OfferItemWhereInput
  AND: [OfferItemSubscriptionWhereInput!]
  OR: [OfferItemSubscriptionWhereInput!]
  NOT: [OfferItemSubscriptionWhereInput!]
}

input OfferItemUpdateInput {
  offer: OfferUpdateOneRequiredWithoutItemsInput
  donors: DonorUpdateManyWithoutOfferItemsInput
  plant: PlantUpdateOneRequiredWithoutOfferItemsInput
}

input OfferItemUpdateManyWithoutDonorsInput {
  create: [OfferItemCreateWithoutDonorsInput!]
  delete: [OfferItemWhereUniqueInput!]
  connect: [OfferItemWhereUniqueInput!]
  disconnect: [OfferItemWhereUniqueInput!]
  update: [OfferItemUpdateWithWhereUniqueWithoutDonorsInput!]
  upsert: [OfferItemUpsertWithWhereUniqueWithoutDonorsInput!]
  deleteMany: [OfferItemScalarWhereInput!]
}

input OfferItemUpdateManyWithoutOfferInput {
  create: [OfferItemCreateWithoutOfferInput!]
  delete: [OfferItemWhereUniqueInput!]
  connect: [OfferItemWhereUniqueInput!]
  disconnect: [OfferItemWhereUniqueInput!]
  update: [OfferItemUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [OfferItemUpsertWithWhereUniqueWithoutOfferInput!]
  deleteMany: [OfferItemScalarWhereInput!]
}

input OfferItemUpdateManyWithoutPlantInput {
  create: [OfferItemCreateWithoutPlantInput!]
  delete: [OfferItemWhereUniqueInput!]
  connect: [OfferItemWhereUniqueInput!]
  disconnect: [OfferItemWhereUniqueInput!]
  update: [OfferItemUpdateWithWhereUniqueWithoutPlantInput!]
  upsert: [OfferItemUpsertWithWhereUniqueWithoutPlantInput!]
  deleteMany: [OfferItemScalarWhereInput!]
}

input OfferItemUpdateWithoutDonorsDataInput {
  offer: OfferUpdateOneRequiredWithoutItemsInput
  plant: PlantUpdateOneRequiredWithoutOfferItemsInput
}

input OfferItemUpdateWithoutOfferDataInput {
  donors: DonorUpdateManyWithoutOfferItemsInput
  plant: PlantUpdateOneRequiredWithoutOfferItemsInput
}

input OfferItemUpdateWithoutPlantDataInput {
  offer: OfferUpdateOneRequiredWithoutItemsInput
  donors: DonorUpdateManyWithoutOfferItemsInput
}

input OfferItemUpdateWithWhereUniqueWithoutDonorsInput {
  where: OfferItemWhereUniqueInput!
  data: OfferItemUpdateWithoutDonorsDataInput!
}

input OfferItemUpdateWithWhereUniqueWithoutOfferInput {
  where: OfferItemWhereUniqueInput!
  data: OfferItemUpdateWithoutOfferDataInput!
}

input OfferItemUpdateWithWhereUniqueWithoutPlantInput {
  where: OfferItemWhereUniqueInput!
  data: OfferItemUpdateWithoutPlantDataInput!
}

input OfferItemUpsertWithWhereUniqueWithoutDonorsInput {
  where: OfferItemWhereUniqueInput!
  update: OfferItemUpdateWithoutDonorsDataInput!
  create: OfferItemCreateWithoutDonorsInput!
}

input OfferItemUpsertWithWhereUniqueWithoutOfferInput {
  where: OfferItemWhereUniqueInput!
  update: OfferItemUpdateWithoutOfferDataInput!
  create: OfferItemCreateWithoutOfferInput!
}

input OfferItemUpsertWithWhereUniqueWithoutPlantInput {
  where: OfferItemWhereUniqueInput!
  update: OfferItemUpdateWithoutPlantDataInput!
  create: OfferItemCreateWithoutPlantInput!
}

input OfferItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  offer: OfferWhereInput
  donors_every: DonorWhereInput
  donors_some: DonorWhereInput
  donors_none: DonorWhereInput
  plant: PlantWhereInput
  AND: [OfferItemWhereInput!]
  OR: [OfferItemWhereInput!]
  NOT: [OfferItemWhereInput!]
}

input OfferItemWhereUniqueInput {
  id: ID
}

enum OfferOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OfferPreviousValues {
  id: ID!
  name: String!
}

input OfferScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [OfferScalarWhereInput!]
  OR: [OfferScalarWhereInput!]
  NOT: [OfferScalarWhereInput!]
}

type OfferSubscriptionPayload {
  mutation: MutationType!
  node: Offer
  updatedFields: [String!]
  previousValues: OfferPreviousValues
}

input OfferSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OfferWhereInput
  AND: [OfferSubscriptionWhereInput!]
  OR: [OfferSubscriptionWhereInput!]
  NOT: [OfferSubscriptionWhereInput!]
}

input OfferUpdateInput {
  name: String
  donors: DonorUpdateManyWithoutOffersInput
  items: OfferItemUpdateManyWithoutOfferInput
}

input OfferUpdateManyDataInput {
  name: String
}

input OfferUpdateManyMutationInput {
  name: String
}

input OfferUpdateManyWithoutDonorsInput {
  create: [OfferCreateWithoutDonorsInput!]
  delete: [OfferWhereUniqueInput!]
  connect: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutDonorsInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutDonorsInput!]
  deleteMany: [OfferScalarWhereInput!]
  updateMany: [OfferUpdateManyWithWhereNestedInput!]
}

input OfferUpdateManyWithWhereNestedInput {
  where: OfferScalarWhereInput!
  data: OfferUpdateManyDataInput!
}

input OfferUpdateOneRequiredWithoutItemsInput {
  create: OfferCreateWithoutItemsInput
  update: OfferUpdateWithoutItemsDataInput
  upsert: OfferUpsertWithoutItemsInput
  connect: OfferWhereUniqueInput
}

input OfferUpdateWithoutDonorsDataInput {
  name: String
  items: OfferItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutItemsDataInput {
  name: String
  donors: DonorUpdateManyWithoutOffersInput
}

input OfferUpdateWithWhereUniqueWithoutDonorsInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutDonorsDataInput!
}

input OfferUpsertWithoutItemsInput {
  update: OfferUpdateWithoutItemsDataInput!
  create: OfferCreateWithoutItemsInput!
}

input OfferUpsertWithWhereUniqueWithoutDonorsInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutDonorsDataInput!
  create: OfferCreateWithoutDonorsInput!
}

input OfferWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  donors_every: DonorWhereInput
  donors_some: DonorWhereInput
  donors_none: DonorWhereInput
  items_every: OfferItemWhereInput
  items_some: OfferItemWhereInput
  items_none: OfferItemWhereInput
  AND: [OfferWhereInput!]
  OR: [OfferWhereInput!]
  NOT: [OfferWhereInput!]
}

input OfferWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Plant {
  id: ID!
  name: String!
  offerItems(where: OfferItemWhereInput, orderBy: OfferItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OfferItem!]
}

type PlantConnection {
  pageInfo: PageInfo!
  edges: [PlantEdge]!
  aggregate: AggregatePlant!
}

input PlantCreateInput {
  name: String!
  offerItems: OfferItemCreateManyWithoutPlantInput
}

input PlantCreateOneWithoutOfferItemsInput {
  create: PlantCreateWithoutOfferItemsInput
  connect: PlantWhereUniqueInput
}

input PlantCreateWithoutOfferItemsInput {
  name: String!
}

type PlantEdge {
  node: Plant!
  cursor: String!
}

enum PlantOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlantPreviousValues {
  id: ID!
  name: String!
}

type PlantSubscriptionPayload {
  mutation: MutationType!
  node: Plant
  updatedFields: [String!]
  previousValues: PlantPreviousValues
}

input PlantSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlantWhereInput
  AND: [PlantSubscriptionWhereInput!]
  OR: [PlantSubscriptionWhereInput!]
  NOT: [PlantSubscriptionWhereInput!]
}

input PlantUpdateInput {
  name: String
  offerItems: OfferItemUpdateManyWithoutPlantInput
}

input PlantUpdateManyMutationInput {
  name: String
}

input PlantUpdateOneRequiredWithoutOfferItemsInput {
  create: PlantCreateWithoutOfferItemsInput
  update: PlantUpdateWithoutOfferItemsDataInput
  upsert: PlantUpsertWithoutOfferItemsInput
  connect: PlantWhereUniqueInput
}

input PlantUpdateWithoutOfferItemsDataInput {
  name: String
}

input PlantUpsertWithoutOfferItemsInput {
  update: PlantUpdateWithoutOfferItemsDataInput!
  create: PlantCreateWithoutOfferItemsInput!
}

input PlantWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  offerItems_every: OfferItemWhereInput
  offerItems_some: OfferItemWhereInput
  offerItems_none: OfferItemWhereInput
  AND: [PlantWhereInput!]
  OR: [PlantWhereInput!]
  NOT: [PlantWhereInput!]
}

input PlantWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  donor(where: DonorWhereUniqueInput!): Donor
  donors(where: DonorWhereInput, orderBy: DonorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Donor]!
  donorsConnection(where: DonorWhereInput, orderBy: DonorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DonorConnection!
  offer(where: OfferWhereUniqueInput!): Offer
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
  offerItem(where: OfferItemWhereUniqueInput!): OfferItem
  offerItems(where: OfferItemWhereInput, orderBy: OfferItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OfferItem]!
  offerItemsConnection(where: OfferItemWhereInput, orderBy: OfferItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferItemConnection!
  plant(where: PlantWhereUniqueInput!): Plant
  plants(where: PlantWhereInput, orderBy: PlantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Plant]!
  plantsConnection(where: PlantWhereInput, orderBy: PlantOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlantConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  donor(where: DonorSubscriptionWhereInput): DonorSubscriptionPayload
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  offerItem(where: OfferItemSubscriptionWhereInput): OfferItemSubscriptionPayload
  plant(where: PlantSubscriptionWhereInput): PlantSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  role: Role
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  role: Role!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  role: Role
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  role: Role
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`