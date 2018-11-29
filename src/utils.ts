import { Context } from './types'

export function getUserId(context: Context) {
  return context.request.session.userId
}
