import { rule } from 'graphql-shield'

import { Context } from '../types'

const isAuthenticatedUser = rule()((parent, args, context: Context) => {
  return context.user !== null
})
const isAdmin = rule()((parent, args, context: Context) => {
  return context.user.role === 'ADMIN'
})

export { isAuthenticatedUser, isAdmin }
