'use client'

import { atom } from 'atomic-state'

export const countState = atom({
  key: 'count',
  default: 0
})
