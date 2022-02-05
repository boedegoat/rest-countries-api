import { useCallback, useEffect, useRef } from 'react'

export default function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // start timeout on first render and on delay change
  useEffect(() => {
    start()
    return clear
  }, [delay])

  // update callbackRef when callback change without rerendering
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const start = useCallback(() => {
    return new Promise((resolve) => {
      timeoutRef.current = setTimeout(() => {
        callbackRef.current()
        resolve(null)
      }, delay)
    })
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  const restart = async () => {
    clear()
    await start()
  }

  return { restart, clear }
}
