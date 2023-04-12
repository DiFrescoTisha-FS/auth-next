import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import logocircle from '/public/Spotify_Icon_RGB_Black.png'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <Image src={logocircle} alt="Spotify logo" className="login_logo flex flex-col items-center justify-center" />
      
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="login_button bg-[#18d860] text-white p-5 rounded-lg flex items-center justify-center"
          onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
          <>
        </>
        </div>
      ))}
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