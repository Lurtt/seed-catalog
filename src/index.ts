import { config } from 'dotenv'
config({ path: 'variables.env' })

import { GraphQLServer } from 'graphql-yoga'
import * as session from 'express-session'

import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { permissions } from './permissions'
import { getUser } from './utils'

const options = {
  port: process.env.SERVER_PORT,
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers as any,
  middlewares: [permissions],
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
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
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseInt(process.env.SESSION_AGE),
    },
  }),
)

server.start(options, ({ port }) =>
  console.log(
    `GraphQL Server started, listening on port ${port} for incoming requests.`,
  ),
)
