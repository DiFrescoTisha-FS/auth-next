import Link from 'next/link'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Image from "next/image"

import logo from '/public/logo.png'

function Navbar() {
  // const {session, loading} = useSession()
const { data: session, loading } = useSession()
// const result = useSession()
console.log({ session })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <Image
          src={logo}
          alt="spotify logo"
          className="nav_logo"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </h1>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>
        <li>
          <Link href='/'>
          {session ? `Home` : ''}
          </Link>
        </li>
        <li>
          <Link href='/dashboard'>
          {session ? `Dashboard` : ''}
          </Link>
        </li>
        <li>
          <Link href='/blog'>
          {session ? `Blog` : ''}
          </Link>
        </li>

        {!loading && !session && (
          <li>
            <Link
              href='/api/auth/signin'
              onClick={e => {
                e.preventDefault()
                // signIn('spotify')
                signIn('spotify')
              }}>             
                Sign In             
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href='/api/auth/signout'
              onClick={e => {
                e.preventDefault()
                // signOut('spotify')
                signOut('spotify')
              }}>              
                Sign Out              
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar