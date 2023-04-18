import {SessionProvider} from 'next-auth/react';

import '../styles/globals.css';

export default function App({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>

        <Component {...pageProps} />

    </SessionProvider>
  );
}

// import { SessionProvider } from "next-auth/react"
// import Navbar from '../components/Navbar'
// import '../styles/globals.css'
// import '../components/Navbar.css'

// function MyApp({ 
//   Component, 
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       {/* <Navbar /> */}
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

// export default MyApp