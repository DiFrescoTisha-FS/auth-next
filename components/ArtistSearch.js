import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Search = () => {
  const { data: session } = useSession();
  const [query, setQuery] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?query=${query}&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=4`,
        {
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      )
        .then((response) => {
          console.log('this did work ');
          return response.text();
        })
        .then((text) => {
          const data = JSON.parse(text);
          return data;
        });

      setData(response?.artists.items);
    } catch (error) {
      console.log('this did not work error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 p-5 mx-auto my-10">
      <div className="card bg-white">
        <input
          className="search p-2 rounded-lg "
          onChange={(e) => setQuery(e.target.value)}
          placeholder="artist name ..."
          type="text"
          id="search-artist"
        />
        <button className="button-search grid-cols-1 items-center rounded-lg text-gray-600 bg-gray-200" onClick={handleSearch}>
          Search Artist
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col-4 space-x-10 md:flex h-1/4">
          {data?.map((artist) => (
            <div
              key={artist.id}

            >
            <div className="card mt-4 h-80 bg-[#101606]">
              <img className="w-full h-48 object-cover sm:h-64" src={artist.images[0]?.url} alt="artist" />
              <h3 className="text-center mt-4">{artist.name}</h3>
              <div className="m-4">

              </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;


// import { useSession } from 'next-auth/react'
// import { useEffect, useState } from 'react'





// const Search =  () => {


//   const { data: session }= useSession()
//   console.log({ session })
//   const [query, setQuery] = useState('')
//   const [data, setdata] = useState()

//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`https://api.spotify.com/v1/search?query=${query}&type=artist&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=20`,{
//         headers: {
//           "Content-type":"application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${session.accessToken}`
//         }
//       })
//       .then(response => {
//         // Handle response
//         console.log('this did work ')
//         return response.text(); // Return response text
//       })
//       .then(text => {
//         // Parse response text into JSON and return
//         const data = JSON.parse(text);
//         return data;
//       });
      
//       setdata(response?.artists.items);
//     } catch (error) {
//       // Handle error
//       console.log('this did not work error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   return (
//     <div>
//       <div className='search-body bg-white' >  
//             <input className='search' onChange={(e)=>setQuery(e.target.value)} placeholder='search' type="text" id="search-artist"></input>
//             <button className='button-search' onClick={handleSearch} >Search</button>
//           </div> 
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {data?.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
      
//     </div>
//   );
//   }

//     export default Search 