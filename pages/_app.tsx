import Layout from '@/components/Layout'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lexend_Deca } from 'next/font/google'
const ld = Lexend_Deca({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={ld.className}>
        <RegisterModal/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  )
}
