import { createContext, useState } from "react";

export const CategoryContext = createContext();
export default function CategoryProvider({ children }) {
  const [category, setCategory] = useState('');
  const [searchResults, setSearchResults] = useState([])
  
  return (
    <CategoryContext.Provider value={{ albums, setAlbums }}>
      {children}
    </CategoryContext.Provider>
  );
}