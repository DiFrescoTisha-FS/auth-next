import { useState } from "react";
import { useSession } from "next-auth/react";

const Search = ({ initialData }) => {
  const { data: session } = useSession();
  const [query, setQuery] = useState("");
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        // Modify URL to search for all types
        `https://api.spotify.com/v1/search?query=${query}&type=artist,album,track&limit=10`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      )
        .then((response) => {
          console.log("this did work ");
          return response.text();
        })
        .then((text) => {
          const data = JSON.parse(text);
          return data;
        });

      // Reformat the data to map over and display the correct information for each type
      setData(
        response?.artists?.items ||
          response?.albums?.items ||
          response?.tracks?.items
      );
    } catch (error) {
      console.log("this did not work error:", error);
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
        <button
          className="button-search grid-cols-1 items-center rounded-lg text-gray-600 bg-gray-200"
          onClick={handleSearch}
        >
          Search Artist, Album or Track
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col-4 space-x-10 md:flex h-1/4">
          {/* Map over the correct data based on the type */}
          {data?.map((item) => (
            <div key={item.id}>
              {item.type === "artist" && (
                <div className="card mt-4 h-80 bg-[#101606]">
                  <img
                    className="w-full h-48 object-cover sm:h-64"
                    src={item.images[0]?.url}
                    alt="artist"
                  />
                  <h3 className="text-center mt-4">{item.name}</h3>
                </div>
              )}
              {item.type === "album" && (
                <div className="card mt-4 h-80 bg-[#101606]">
                  <img
                    className="w-full h-48 object-cover sm:h-64"
                    src={item.images[0]?.url}
                    alt="album"
                  />
                  <h3 className="text-center mt-4">{item.name}</h3>
                  <p>{item.artists[0].name}</p>
                </div>
              )}
              {item.type === "track" && (
                <div className="card mt-4 h-80 bg-[#101606]">
                  <img
                    className="w-full h-48 object-cover sm:h-64"
                    src={item.album.images[0]?.url}
                    alt="track"
                  />
                  <h3 className="text-center mt-4">{item.name}</h3>
                  <p>{item.artists[0].name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const headers = {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${session.accessToken}`,
  };
  const initialData = await fetch(
    `https://api.spotify.com/v1/search?query=abba&type=artist&limit=10`,
    { headers }
  )
    .then((response) => response.json())
    .then((data) => data.artists.items);

  return {
    props: {
      initialData,
      session,
    },
  };
}

export default Search;
