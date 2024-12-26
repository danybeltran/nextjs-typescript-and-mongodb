import { useFetch } from 'atomic-utils'

export function useUser() {
  return useFetch<{
    user: {
      name: string
      email: string
      image: string
    }
    expires: string
  }>('/auth/session', {
    maxCacheAge: '15 sec',
    transform(data) {
      if (!data?.user) {
        return null!
      }
      return data
    }
  })
}
