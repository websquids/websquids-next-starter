'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import { Button } from './ui/button'

export function CounterSample() {
  const { count, incrementCount, decrementCount } = useCounterStore((state) => state)

  return (
    <div>
      Count: {count}
      <div className='flex gap-4 mt-4'>
        <Button type='button' onClick={() => void incrementCount()}>
          Increment Count
        </Button>
        <Button type='button' className='bg-slate-300 text-black hover:text-white' onClick={() => void decrementCount()}>
          Decrement Count
        </Button>
      </div>
    </div>
  )
}
