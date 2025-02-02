
import  { useContext} from 'react'
import API from '../services/API'
import { PostContext } from '../context/PostContext'

const useFetchPost = () => {
    
    const{setPosts}=useContext(PostContext)
    const fetchFeeds = async (postId)=>{
        // if(postId){
            
        // }

        try{
            const fetchFeedsAPI = await API.get("/feeds ")
            setPosts(fetchFeedsAPI.data.posts)
            console.log(fetchFeedsAPI.data)

        }catch(e){
            console.log("error fetching post",e)
        }
    }
  return {fetchFeeds}
}

export default useFetchPost
