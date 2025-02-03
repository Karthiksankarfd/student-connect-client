
import { useContext } from 'react'
import API from '../services/API'
import {  useNavigate } from 'react-router-dom'
import { searchResultContext } from '../context/searchContext'

const useSearch = () => {
    const {setSearchResult} = useContext(searchResultContext);
    const navigate = useNavigate()
    const fetchSearchResults = async (searchTerm) =>{
         console.log("fetchSearchResults called .. hitting api...", searchTerm)
         if(searchTerm === " "){
            console.log("no querry present ... ")
            return ;
         }
         try{
            // const res =  await API.get(`/search?query=${searchTerm}`)
            const res = await API.get('/search', { params: { query: searchTerm } });
            if(res.status === 200){
               //  navigate("searchresultpage")
                console.log(res.data)
                setSearchResult(res.data)
            }
         }catch(e){
            console.log(e, "Error fetching the query")
         }
    }
  return {fetchSearchResults}
}

export default useSearch
