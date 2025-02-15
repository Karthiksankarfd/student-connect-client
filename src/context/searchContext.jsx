import React, { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const searchResultContext = createContext();

const SearchContextProvider = ({ children }) => {
  
  const [searchResult, setSearchResult] = useState(null);
  const [querySearchParams, setQuerySearchParams] = useSearchParams({ q: "" });
  return (
    <searchResultContext.Provider value={{ searchResult, setSearchResult, querySearchParams, setQuerySearchParams }}>
      {children}
    </searchResultContext.Provider>
  );
};

export default SearchContextProvider;
