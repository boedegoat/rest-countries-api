import Head from 'next/head'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, scale: 0.98 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
}

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: 'spring' }} // Set the transition to linear
        className="wrapper"
      >
        {children}
      </motion.main>
    </>
  )
}
