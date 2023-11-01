import Container from '@/components/Container'
import '@/styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import type { AppProps } from 'next/app'

const id = Math.floor(Math.random() * 100)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence key={id}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Container>
          <Component {...pageProps} />
        </Container>
      </motion.div>
    </AnimatePresence>
  )
}
