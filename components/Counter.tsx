'use client'
import { useAtom } from 'atomic-state'

import { Button } from '@/components/ui/button'
import { countState } from '@/states'

export default function Counter() {
  const [count, setCount] = useAtom(countState)

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>
        Times clicked: {count}
      </Button>
    </div>
  )
}
