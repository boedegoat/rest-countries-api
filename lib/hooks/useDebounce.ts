import { useEffect } from 'react'
import useTimeout from './useTimeout'

/**
 * run timeout after fast action
 *
 * e.g run timeout for 0.5s after user done typing
 */
export default function useDebounce(
  callback: () => void,
  delay: number,
  deps: any[]
) {
  const { restart, clear } = useTimeout(callback, delay)

  // on the first render, dont run the timeout, so clear it
  useEffect(() => {
    clear()
  }, [])

  // each deps change, restart the timeout
  useEffect(() => {
    if (deps.every((value) => !value)) return clear()
    restart()
  }, deps)
}
