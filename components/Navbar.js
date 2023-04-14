import Link from 'next/link'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Image from 'next/image'
import Center from '../components/Center'
import logo from '/public/logo.png'
import { ChevronDownIcon } from "@heroicons/react/outline"

function Navbar() {
  // const {session, loading} = useSession()
const { data: session, loading } = useSession()
// const result = useSession()
console.log({ session })
  return (
    <nav className='header'>
      <h1 className='logo'>
        <Image src={logo} alt="spotify logo" className="nav_logo" />
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
        <li className=" top-5 right-8">
            <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
              <img 
                className="rounded-full w-10 h-10" 
                src={session?.user.image} 
                alt="user profile image" 
              />
              <h2>{session?.user.name}</h2>
              <ChevronDownIcon className="h-5 w-5" />
            </div>
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
        <li>
          <div>image here
          <img 
                className="rounded-full w-10 h-10" 
                src={session?.user.image} 
                alt="user profile image" 
              />
          </div>
        </li>
      </ul>
      
    </nav>
    
    
  );
}

export default Navbar