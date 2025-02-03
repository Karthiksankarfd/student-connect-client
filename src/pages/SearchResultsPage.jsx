import React from 'react'
import ResultCategoryNavbar from '../components/SearchResultsPageComponents/ResultCategoryNavbar'
import { Outlet } from 'react-router-dom'

const SearchResultsPage = () => {
  return (
    <main>
        <ResultCategoryNavbar/>
        <Outlet/>
    </main>
  )
}

export default SearchResultsPage;
