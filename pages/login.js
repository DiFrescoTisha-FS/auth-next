

import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import logocircle from '/public/Spotify_green.png'
// import Navbar from "@component/components/Navbar";

function Login({ providers }) {
  
  return (
    <div >
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