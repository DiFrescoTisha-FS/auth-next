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
  const [dropdownOpen, setdropdownOpen] = useState(false);

  <div
  onClick={() => setdropdownOpen(!dropdownOpen)}
  class="overflow-hidden rounded-full w-8 h-8 flex justify-center items-center
  hover:cursor-pointer
  ">

Toggle
</div>


<div
  class={`${dropdownOpen ? `top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} absolute left-0 z-40 mt-2 w-full rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
  <a
      href="javascript:void(0)"
      class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
  >
      Dashboard
  </a>
  <a
      href="javascript:void(0)"
      class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
  >
      Settings
  </a>
  <a
      href="javascript:void(0)"
      class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
  >
      Earnings
  </a>
  <a
      href="javascript:void(0)"
      class="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:text-primary"
  >
      Logout
  </a>
</div>

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  // const result = useSession()
  console.log({ session });
  return (
    <nav
      className={`top-2 flex justify-between items-start space bg-gradient-to-b to-black ${color} h-40 text-[#E4E4E7] p-8 w-full`}
    >
      <Image
        src={logo}
        alt="spotify logo"
        className="w-28 flex flex-row justify-between mb-6"
      />
      <div className="dropdown dropdown-bottom w-36">
        <label className="btn m-1 flex items-center mt-0 bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          {" "}
          <img
            className="rounded-full w-8 h-8"
            src={session?.user.image}
            alt=""
          />
          <h2 className="text-gray-400">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                // signOut('spotify')
                signOut("spotify");
              }}
            >
              Sign Out
            </Link>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        <li className="flex flex-row justify-between items-center">
          {/* {session ? '<Searchbar />' : '<Login />' } */}

          {/* <Link href='/'>
          {session ? `Home` : ''}
          </Link> */}
        </li>
        {/* <li>
          <Link href='/dashboard'>
          {session ? `Dashboard` : ''}
          </Link>
        </li>
        <li>
          <Link href='/blog'>
          {session ? `Blog` : ''}
          </Link>
        </li> */}
        {/* <li className="top-5">
        
        <div className="flex items-center mt-0 bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img 
            className="rounded-full w-8 h-8" 
            src={session?.user.image} 
            alt="" 
          />
          <h2 className="text-gray-400">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
        </li> */}

        {!loading && !session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                // signIn('spotify')
                signIn("spotify");
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {/* {session && (
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
        )} */}
      </ul>
    </nav>
  );
}

export default Navbar;
