import React, { useEffect, useRef } from 'react'

/**
 * skip side effect on first render
 */
export default function useUpdateEffect(callback: () => void, deps: any[]) {
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    callback()
  }, deps)
}
