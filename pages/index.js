import useSWR from 'swr';
import { SiSpotify } from 'react-icons/si';

export default function Home() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);
  return (
    <>
      <section className='bg-gray-600'>
        <main className='flex items-center justify-center'>
          {console.log(data)}
        </main>
      </section>
      <a
        target='_blank'
        rel='noopener noreferer'
        href={
          data?.isPlaying
            ? data.songUrl
            : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
        }
        className='relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
      >
        <div className='w-16'>
          {data?.isPlaying ? (
            <img
              className='w-16 shadow-sm'
              src={data?.albumImageUrl}
              alt={data?.album}
            />
          ) : (
            <SiSpotify size={64} color={'#1ED760'} />
          )}
        </div>
        <div className='flex-1'>
          <p className='component font-bold'>
            {data?.isPlaying ? data.title : 'Not Listening'}
          </p>
          <p className='font-dark text-xs'>
            {data?.isPlaying ? data.artist : 'Spotify'}
          </p>
        </div>
        <div className='absolute bottom-1.5 right-1.5'>
          <SiSpotify size={20} color={'#1ED760'} />
        </div>
      </a>
    </>
  );
}