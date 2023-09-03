import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Home() {
    const { data: session } = useSession()
    console.log({ session })
    const [query, setQuery] = useState('')
    const [tracks, setTracks] = useState([])

    const handleSearch = async () => {
        const response = await fetch(`http://api.spotify.com/v1/search?query=${query}&type=artist&locale=en-US&limit=10`)
        const data = await response.json()
        setTracks(data)
        console.log(query)
        console.log(tracks)
    }

    const search = () => {
        console.log(query)
        console.log(tracks)
    }

    return (
        <div className="body">
            <Head>
                <title>Create Next App</title>
            </Head>
        </div>
    )

}