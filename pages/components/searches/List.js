import React, { useContext } from "react";
import { SearchContext } from "../../context/searchContext";

export default function SearchResults() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 p-5 justify-center items-center mx-auto">
      {searchResults && searchResults.albums && searchResults.albums.items &&
        searchResults.albums.items.map((album, key) => (
          <div
            key={key}
            className="flex flex-col gap-10 p-5 justify-center items-center mx-auto shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out"
          >
            <img src={album.images[0].url} alt="album" />
            <h3>{album.name}</h3>
            <p>{album.artists[0].name}</p>
          </div>
        ))}
      {searchResults && searchResults.artists && searchResults.artists.items &&
        searchResults.artists.items.map((artist, key) => (
          <div
            key={key}
            className="flex flex-col gap-10 p-5 justify-center items-center mx-auto shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out"
          >
            <img src={artist.images[0].url} alt="artist" />
            <h3>{artist.name}</h3>
          </div>
        ))}
      {searchResults && searchResults.tracks && searchResults.tracks.items &&
        searchResults.tracks.items.map((track, key) => (
          <div
            key={key}
            className="flex flex-col gap-10 p-5 justify-center items-center mx-auto shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out"
          >
            <p>{track.name}</p>
            <p>{track.artists[0].name}</p>
          </div>
        ))}
    </div>
  );
}
