import React from "react";

export default function SearchResult({ searchResults }) {
  return (
    <div>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              {result.images && result.images.length > 0 && (
                <img src={result.images[0].url} alt={result.name} />
              )}
              <div>
                <h2>{result.name}</h2>
                {result.type === "artist" ? (
                  <p>Artist</p>
                ) : result.type === "album" ? (
                  <p>Album</p>
                ) : (
                  <p>Track</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};
