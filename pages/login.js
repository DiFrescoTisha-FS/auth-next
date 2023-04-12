import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import logocircle from '/public/Spotify_Icon_RGB_Black.png'
import Navbar from "@component/components/Navbar";

function Login({ providers }) {
  return (
    <div >
      <Navbar/>
      <div className="loginpage">
      <Image src={logocircle} alt="Spotify logo" className="login_logo" />
      
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="login_button"
          onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
          <>
        </>
        </div>
      ))}
      </div>
  </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    }
  }
}

// import React from 'react';
// import { useRouter } from 'next/router';
// import {SpotifyAuth, Scopes} from 'react-spotify-auth';
// import { spotifyApi, setAccessToken } from '../lib/spotify';

// const Login = () => {
//   const router = useRouter();

//   function onSuccess(token) {
//     setAccessToken(token);
//     router.push('/');
//   }

//   function onFailure(error) {
//     console.error(error);
//   }

//   return (
//     <div>
//       <SpotifyAuth
//         redirectUri="http://localhost:3000/callback"
//         clientID={process.env.SPOTIFY_CLIENT_ID}
//         scopes={['user-read-email', 'user-library-read']}
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//       />
//     </div>
//   );
// };

// export default Login;