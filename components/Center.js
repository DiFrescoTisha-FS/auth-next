import { ChevronDownIcon } from "@heroicons/react/outline"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { shuffle } from "lodash"
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { albumIdState, albumState } from "../atoms/albumAtom"
// import useSpotify from "../hooks/useSpotify";
// import Songs from '../components/Songs';

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center() {
  const { data: session } = useSession()
//   const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
//   const albumId = useRecoilValue(albumIdState);
//   const [album, setAlbum] = useRecoilState(albumState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

//   useEffect(() => {
//     spotifyApi
//       .getAlbum(albumId)
//       .then((data) => {
//         setAlbum(data.body)
//       })
//       .catch((err) => console.log("Something went wrong!", err));
//   }, [spotifyApi, albumId]);

//   console.log(album)

  return (
    <div className="flex-grow text-white">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
          <img 
            className="rounded-full w-10 h-10" 
            src={session?.user.image} 
            alt="" 
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

    <section className={`flex items-end space bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}>
        {/* <img
          className="h-44 w-44 shadow-2xl"
          src={album?.images?.[0]?.url}
          alt=""
         /> */}
        <div>

        </div>
      </section>

      <div>
        {/* <Songs /> */}
      </div>
    </div>
  )
}

export default Center