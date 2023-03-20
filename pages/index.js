import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import {Heading} from '@chakra-ui/react'

const Home = () => {
  const { data: session } = useSession()

  const { push } = useRouter()

  const handleSignOut = async () => {
    const data = await signOut({redirect: false, callbackUrl: '/some'})

    push(data.url)
  }
  console.log(session)
  return (
    <div>
      {session ? (
          <>
            <Heading>
              Signed in
            </Heading>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <Heading>
              You are not signed in
            </Heading>
            <button onClick={signIn}>Sign In</button>
          </>
        )
        }
    </div>
  )
}

export default Home