import { shield, and } from 'graphql-shield'

import { isAuthenticatedUser, isAdmin } from './rules'

const permissions = shield({
  Query: {
    me: isAuthenticatedUser,
    users: and(isAuthenticatedUser, isAdmin),
  },
  Mutation: {
    signout: isAuthenticatedUser,

    createDonor: and(isAuthenticatedUser, isAdmin),
    updateDonor: and(isAuthenticatedUser, isAdmin),
    deleteDonor: and(isAuthenticatedUser, isAdmin),

    createPlant: and(isAuthenticatedUser, isAdmin),
    updatePlant: and(isAuthenticatedUser, isAdmin),
    deletePlant: and(isAuthenticatedUser, isAdmin),
  },
})

export { permissions }
