import { useCallback, useState } from 'react'

export const useClientRect = (): [DOMRect | null, (node: any) => void] => {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) {
      const updateRectWithNode = () => setRect(node.getBoundingClientRect())
      const resizeObserver = new ResizeObserver(updateRectWithNode)
      resizeObserver.observe(node)
      window.addEventListener('resize', updateRectWithNode)
      window.addEventListener('scroll', updateRectWithNode)
    }
  }, [])
  return [rect, ref]
}

export default useClientRect
