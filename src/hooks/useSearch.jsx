
import { useContext } from 'react'
import API from '../services/API'
import {  useNavigate } from 'react-router-dom'
import { searchResultContext } from '../context/searchContext'

const useSearch = () => {
    const {setSearchResult} = useContext(searchResultContext);
    const navigate = useNavigate()

    const navigateToResults = async (searchTerm) =>{
         console.log("fetchSearchResults called .. hitting api...", searchTerm)
         if(searchTerm === null){
            console.log("no querry present ... ")
            return ;
         }
         // /stntcnthome/searchresultpage/search?keyword=${query}
         navigate(`searchresultpage/search?keyword=${searchTerm}`)
    }


  return {navigateToResults,}
}

export default useSearch
