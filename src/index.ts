import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

import { resolvers } from './resolvers'

const options = {
  port: 9000,
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers as any,
  context: {
    prisma,
  },
})
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
