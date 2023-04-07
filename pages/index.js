import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSession, getSession } from 'next-auth/react'

export default function Home() {
  const { data: session }= useSession()
  console.log({ session })
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {session ? `${session.user.name}, ` : ''}Welcome to{' '}
          <a href=''>Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return ({props: {session}})
}