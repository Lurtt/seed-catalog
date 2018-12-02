import { shield, and } from 'graphql-shield'

import { isAuthenticatedUser, isAdmin } from './rules'

const permissions = shield({
  Query: {
    users: and(isAuthenticatedUser, isAdmin),
  },
  Mutation: {
    signout: isAuthenticatedUser,
  },
})

export { permissions }
