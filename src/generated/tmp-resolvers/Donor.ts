// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { DonorResolvers } from "../graphqlgen";

export const Donor: DonorResolvers.Type = {
  ...DonorResolvers.defaultResolvers,

  offers: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  OfferItems: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
