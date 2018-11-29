import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    users(parent, args, context) {
      return context.prisma.users()
    },
  },
  Mutation: {
    createUser(parent, args, context) {
      return context.prisma.createUser({ name: args.name })
    },
  },
}

const options = {
  port: 9000,
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
