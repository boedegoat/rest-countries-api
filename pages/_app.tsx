import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvider from 'lib/AppProvider'
import ThemeProvider from 'lib/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
