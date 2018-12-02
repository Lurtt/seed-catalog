import { Request } from './types'

export function getUser(request: Request) {
  const { session } = request
  if (!session.user) {
    return null
  }

  return session.user
}
