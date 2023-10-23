import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, CSSReset, extendTheme} from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
    <CSSReset />
      <App />
    </ChakraProvider>
  )
}