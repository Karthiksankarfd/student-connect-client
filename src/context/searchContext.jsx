import React, { createContext, useState } from 'react';

export const searchResultContext = createContext();

const SearchContextProvider = ({ children }) => {
  
  const [searchResult, setSearchResult] = useState(null);
  return (
    <searchResultContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </searchResultContext.Provider>
  );
};

export default SearchContextProvider;
