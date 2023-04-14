import Link from 'next/link'
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Image from 'next/image'
import Center from '../components/Center'
import logo from '/public/Spotify_Black.png'
import { ChevronDownIcon } from "@heroicons/react/outline"
import { useState, useEffect } from 'react'
import { shuffle } from "lodash"

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Navbar() {
  // const {session, loading} = useSession()
const { data: session, loading } = useSession()
const [color, setColor] = useState(null);

useEffect(() => {
  setColor(shuffle(colors).pop());
}, [])
// const result = useSession()
console.log({ session })
  return (
    <nav className={`top-2 flex items-start space bg-gradient-to-b to-black ${color} h-40 text-white p-8 w-full`}>

        <Image src={logo} alt="spotify logo" className="w-44 flex flex-row justify-start" />
 
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
        <li className="top-5">
        <div className="flex items-center mt-0 bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img 
            className="rounded-full w-10 h-10" 
            src={session?.user.image} 
            alt="" 
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
      </ul>
    </nav>
    
  );
}

export default Navbar