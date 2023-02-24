import { ViewportProvider } from '@/src/providers/ViewportProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
    </ViewportProvider>
  )
}
