import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import Layout from '@/components/Layout'
import '@/styles/globals.css'
import ProductModal from '@/components/modals/ProductModal'
import SymptomeModal from '@/components/modals/SymptomeModal'
import { Lexend_Deca } from 'next/font/google'
const ld = Lexend_Deca({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={ld.className}>
        <Toaster/>
          <ProductModal/>
          <SymptomeModal/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </main>
    </>
  )
}
