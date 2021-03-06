import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppProvider from 'lib/AppProvider'
import ThemeProvider from 'lib/ThemeProvider'
import Header from 'components/Header'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  // Make framer motion do exit animation on this url change
  const url = `${process.env.URL}${router.route}`

  return (
    <ThemeProvider>
      <AppProvider>
        <Header />
        {/* Make exit animation works */}
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
      </AppProvider>
    </ThemeProvider>
  )
}

export default MyApp
