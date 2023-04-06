import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Lexend_Deca } from 'next/font/google'
import RegisterProductModal from '@/components/modals/RegisterProductModal'
import RegisterSymptomeModal from '@/components/modals/RegisterSymptomeModal'
const ld = Lexend_Deca({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={ld.className}>
        <Toaster/>
          <RegisterProductModal/>
          <RegisterSymptomeModal/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </main>
    </>
  )
}
