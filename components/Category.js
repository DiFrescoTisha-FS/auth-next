import React, { useState } from "react";
// import axios from "axios";

export default function Search() {
  const [category, setCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.spotify.com/v1/search?q=${category}&type=artist,album,track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setSearchResults(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="category">Search by category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.artists && (
        <div>
          <h2>Artists</h2>
          <ul>
            {searchResults.artists.items.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </div>
      )}
      {searchResults.albums && (
        <div>
          <h2>Albums</h2>
          <ul>
            {searchResults.albums.items.map((album) => (
              <li key={album.id}>{album.name}</li>
            ))}
          </ul>
        </div>
      )}
      {searchResults.tracks && (
        <div>
          <h2>Tracks</h2>
          <ul>
            {searchResults.tracks.items.map((track) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
