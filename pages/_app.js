import { SessionProvider } from "next-auth/react"
import { ChakraProvider } from '@chakra-ui/react'
// import Navbar from '../components/Navbar'
import '../styles/globals.css'
// import '../components/Navbar.css'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/* <Navbar /> */}
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>     
    </SessionProvider>
  )
}

export default MyApp
