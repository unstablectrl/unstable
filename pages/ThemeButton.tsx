import { useTheme } from 'next-themes'
import { FC } from 'react'

const ThemeButton: FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleThemeMode = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <button
      className="bg-fuchsia-700 rounded p-2 text-gray-50"
      onClick={toggleThemeMode}
    >
      Toggle {theme ?? '...'} Mode
    </button>
  )
}

export default ThemeButton
