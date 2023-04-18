import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext";

export default function Search() {
  const [query, setQuery] = useState("");
  const { setSearchResults } = useContext(SearchContext);

  const search = async () => {
    let tokenres = await fetch("/api/spotify?token=true", {
      method: "POST",
    });

    let tokenResponse = await tokenres.json();

    let response = await fetch(
      `https://api.spotify.com/v1/search?type=album,artist,track&q=${query}`,
      {
        headers: {
          Authorization: "Bearer " + tokenResponse.res.access_token,
          "Content-type": "application/json",
        },
      }
    );

    let data = await response.json();
    setSearchResults(data);

    search_spotify(
        q,
        type = c("album", "artist", "playlist", "track", "show", "episode"),
        market = NULL,
        limit = 20,
        offset = 0,
        include_external = NULL,
        authorization = get_spotify_access_token(),
        include_meta_info = FALSE
      )
  };

  return (
    <div className="flex flex-col gap-10 p-5 justify-center items-center mx-auto">
      <input
        placeholder="Search for albums, artists, and tracks"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      <button
        className="mx-3 my-2 p-2 rounded-xl bg-gray-700 hover:bg-gray-500 text-white text-xl"
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}
