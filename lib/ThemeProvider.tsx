import { createContext, useContext } from 'react'
import useDarkMode from './hooks/useDarkMode'
import { SetThemeType, ThemeType } from './typings'

const ThemeContext = createContext<{
  theme: ThemeType
  setTheme: SetThemeType
}>(null)

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={useDarkMode()}>
      {children}
    </ThemeContext.Provider>
  )
}
