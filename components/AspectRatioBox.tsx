import clsx from 'clsx'

type AspectRatioBoxProps = {
  aspectRatio?: Number
  center?: Boolean
  className?: string
  style?: object
}

const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({
  children,
  aspectRatio = 16 / 9,
  center,
  className,
  style,
}) => {
  const customStyle = {
    paddingBottom: `calc(100%/${aspectRatio})`,
    ...style,
  }
  if (center)
    Object.assign(customStyle, {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    })
  return (
    <div className={clsx('relative h-0', className)} style={customStyle}>
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  )
}

export default AspectRatioBox
