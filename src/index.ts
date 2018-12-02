import { GraphQLServer } from 'graphql-yoga'
import * as session from 'express-session'

import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { permissions } from './permissions'
import { getUser } from './utils'

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
  context: (request: any) => {
    const httpRequest = { ...request }
    return {
      ...request,
      user: getUser(httpRequest.request),
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
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
)

server.start(options, ({ port }) =>
  console.log(
    `GraphQL Server started, listening on port ${port} for incoming requests.`,
  ),
)
