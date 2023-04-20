import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import Searchbar from "../components/Searchbar";
import Login from "../components/Login";
import logo from "../public/Spotify_Logo_RGB_Black.png";
// import Center from '../components/Center'
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";

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
  const { data: session, loading } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  // const result = useSession()
  console.log({ session });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <nav className={`top-2 flex justify-between items-start space bg-gradient-to-b to-black ${color} h-40 text-[#E4E4E7] p-8 w-full`}>

      <Image src={logo} alt="spotify logo" className="w-28 flex flex-row justify-between mb-6" />

      <div className="relative inline-block text-left">
        <button type="button" onClick={toggleMenu} className="flex items-center mt-0 bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img className="rounded-full w-8 h-8" src={session?.user.image} alt="" />
          <h2 className="text-gray-400">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </button>

        <div className={`${showMenu ? "block" : "hidden"} dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 absolute z-50`}>
          <ul tabIndex={0}>
            <li>
              <Link href='/api/auth/signout'>
                <a onClick={() => setShowMenu(false)}>Sign Out</a>
              </Link>
            </li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <ul className={`main-nav ${!session && loading ? 'loading' : 'loaded'}`}>

        <li className="flex flex-row justify-between items-center">
          {session ? <Searchbar /> : <Login />}
        </li>

        {!loading && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <a>Sign In</a>
            </Link>
          </li>
        )}

        {/* {session && (
          <li>
            <Link href='/api/auth/signout'>
              <a onClick={() => signOut('spotify')}>Sign Out</a>
            </Link>
          </li>
        )} */}
      </ul>
    </nav>
  );
}

export default Navbar;
