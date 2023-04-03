import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'

import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
import '@/styles/globals.css'
import { Lexend_Deca } from 'next/font/google'
const ld = Lexend_Deca({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={ld.className}>
        <Toaster/>
        <SessionProvider session={pageProps.session}>
          <RegisterModal/>
          <LoginModal/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </main>
    </>
  )
}
