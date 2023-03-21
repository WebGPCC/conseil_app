import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lexend_Deca } from 'next/font/google'
const ld = Lexend_Deca({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ld.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
