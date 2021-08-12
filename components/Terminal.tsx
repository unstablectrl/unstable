import clsx from 'clsx'

enum ActionButtonType {
  Close,
  Minimize,
  Maximize,
}

type ActionButtonProps = {
  type: ActionButtonType
}

const ActionButton: React.FC<ActionButtonProps> = ({ type }) => {
  let backgroundColor
  switch (type) {
    case ActionButtonType.Close:
      backgroundColor = '#ED6559'
      break
    case ActionButtonType.Minimize:
      backgroundColor = '#E0C04C'
      break
    case ActionButtonType.Maximize:
      backgroundColor = '#72BF47'
      break
  }
  return (
    <div
      style={{
        height: '12.5px',
        width: '12.5px',
        borderRadius: '50%',
        display: 'block',
        backgroundColor,
      }}
    />
  )
}

type TerminalProps = {
  className?: string
  style?: object
}

const Terminal: React.FC<TerminalProps> = ({ className, style }) => {
  return (
    <div
      className={clsx(
        'p-1 font-mono bg-blue-500 border border-gray-600 rounded-lg antialiased',
        className
      )}
      style={{
        background:
          'linear-gradient(rgb(45, 43, 85) 3%, rgb(135, 46, 171) 65%, rgb(145, 0, 255) 97%)',
        ...style,
      }}
    >
      <header className="grid" style={{ gridTemplateColumns: '60px 1fr 60px' }}>
        <section className="flex justify-center items-center gap-2">
          <ActionButton type={ActionButtonType.Close} />
          <ActionButton type={ActionButtonType.Minimize} />
          <ActionButton type={ActionButtonType.Maximize} />
        </section>
        <section className="flex justify-center items-center leading-4">
          <span>zsh</span>
        </section>
      </header>
      <section className="py-3">
        <span>
          {'⚡️ '} <strong>~</strong> {" echo I\\'m Unstable!"}
        </span>
      </section>
    </div>
  )
}

export default Terminal
