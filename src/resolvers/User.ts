import { UserResolvers } from '../generated/graphqlgen'

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  fullname: (parent, args, ctx) => {
    return `${parent.firstname} ${parent.lastname}`
  },
}
