import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'
import * as session from 'express-session'

import { resolvers } from './resolvers'
import { permissions } from './permissions'

const options = {
  port: 9000,
  cors: {
    credentials: true,
    origin: 'http://localhost:8080',
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers as any,
  middlewares: [permissions],
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.express.use(
  session({
    name: 'qid',
    secret: `abrakadabra`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60,
    },
  }),
)

server.start(options, ({ port }) =>
  console.log(
    `GraphQL Server started, listening on port ${port} for incoming requests.`,
  ),
)
