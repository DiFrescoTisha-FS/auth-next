import React from "react";

export default function SearchForm({
  searchTerm,
  searchType,
  onSearchTermChange,
  onSearchTypeChange,
  onSearchSubmit,
}) {
  return (
    <form onSubmit={onSearchSubmit}>
      <label htmlFor="search-term">Search:</label>
      <input
        type="text"
        id="search-term"
        value={searchTerm}
        onChange={onSearchTermChange}
        placeholder="Enter search term"
      />
      <label htmlFor="search-type">Search for:</label>
      <select id="search-type" value={searchType} onChange={onSearchTypeChange}>
        <option value="artist">Artists</option>
        <option value="album">Albums</option>
        <option value="track">Tracks</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
