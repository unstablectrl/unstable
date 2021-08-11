import { useCallback, useState } from 'react'

export const useClientRect = (): [DOMRect | null, (node: any) => void] => {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}

export default useClientRect
