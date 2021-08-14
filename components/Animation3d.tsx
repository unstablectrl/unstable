import { useMemo, useRef, useState } from 'react'

import useClientRect from '../hooks/useClientRect'

interface Position {
  x: number
  y: number
}

interface Rotation {
  x: number
  y: number
}

interface Animation3dProps {
  className?: string
  style?: Object
}

const Animation3d: React.FC<Animation3dProps> = ({
  children,
  className,
  style,
}) => {
  const [boundaries, animation3dRef] = useClientRect()
  const [delayDefault] = useState(500)
  const [transitionDelay, setTransitionDelay] = useState(500)
  const [transitionType, setTransitionType] = useState('ease-out')
  const [off, setOff] = useState(true)
  const offRef = useRef(off)
  offRef.current = off
  const [rotationDefault] = useState<Position>({ x: 0, y: -0 })
  const [newRotation, setNewRotation] = useState<Rotation>({ x: -0, y: 0 })
  const [rotationMultiplier] = useState(-10)

  const rotation = useMemo(() => {
    return {
      x: newRotation.x * rotationMultiplier,
      y: newRotation.y * rotationMultiplier,
    }
  }, [newRotation, rotationMultiplier])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (off) {
      setTimeout(() => {
        if (!offRef.current) {
          setTransitionDelay(50)
          setTransitionType('ease')
        }
      }, delayDefault)
    }

    const pos: Position = { x: e.clientX, y: e.clientY }
    const newRotation = calculateRotation(pos, boundaries)
    if (newRotation) setNewRotation(newRotation)

    setOff(false)
  }

  const calculateRotation = (
    pos: Position,
    boundaries: DOMRect | null
  ): Rotation | undefined => {
    if (!boundaries) return
    const { width, height, left, top } = boundaries
    const relX = pos.x - left
    const relY = pos.y - top
    const rotX = (relY / height) * -2 + 1
    const rotY = (relX / width) * 2 - 1
    return { x: rotX, y: rotY }
  }

  const onMouseLeave = () => {
    setOff(true)
    setTransitionDelay(delayDefault)
    setTransitionType('ease-out')
    setTimeout(() => {
      setNewRotation(rotationDefault)
    }, delayDefault / 4)
  }

  return (
    <div
      ref={animation3dRef}
      className={className}
      style={{ perspective: '1000px', ...style }}
    >
      <div
        style={{
          height: 'inherit',
          transition: `transform calc(1ms * ${transitionDelay}) ${transitionType}`,
          transform: `translate3d(0,0,-00px) rotateX(calc(1deg * ${rotation.x})) rotateY(calc(1deg * ${rotation.y}))`,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    </div>
  )
}

export default Animation3d
