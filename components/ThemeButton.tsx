import { useTheme } from 'next-themes'
import { FC } from 'react'

const ThemeButton: FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleThemeMode = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  return (
    <button
      className="bg-fuchsia-700 rounded p-2 text-gray-50"
      onClick={toggleThemeMode}
    >
      Toggle {resolvedTheme ?? '...'} Mode
    </button>
  )
}

export default ThemeButton
