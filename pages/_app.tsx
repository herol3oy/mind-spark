import Layout from '@/components/Layout'
import { FavoriteQuotesProvider } from '@/context/FavoriteQuotesContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <FavoriteQuotesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoriteQuotesProvider>
  )
}

export default App
