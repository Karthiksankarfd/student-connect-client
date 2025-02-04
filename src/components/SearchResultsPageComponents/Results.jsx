import React, { useContext } from 'react'
import { searchResultContext } from '../../context/searchContext'
import PeopleCategoryListCard from './PeopleCategoryListCard'

const Results = () => {
    const {searchResult} = useContext(searchResultContext)
    console.log( searchResult);
    console.log( typeof [])

  return (
    <div>
      {
  (searchResult.searchResult.people.length > 0)
    ? searchResult.searchResult.people.map((person) => <PeopleCategoryListCard key={person.id} {...person} />)
    : (<div className='w-full text-center '><p className='text-sm font-normal pt-10 text-blue-500 '>Oops ! No data found related to your search</p></div>)
}

    </div>
  )
}

export default Results
