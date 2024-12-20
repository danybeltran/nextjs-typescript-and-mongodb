import useFetch from 'http-react'

export function useUser() {
  return useFetch<{
    user: {
      name: string
      email: string
      image: string
    }
    expires: string
  }>('/auth/session', {
    default: {
      user: null!,
      expires: null!
    }
  })
}
