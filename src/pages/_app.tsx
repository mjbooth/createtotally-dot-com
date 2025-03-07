import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from '../components/ui/provider'
import { AppProps } from 'next/app'
import React from "react"
import { system } from '../components/ui/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ChakraProvider value={system}>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  )
}

export default MyApp