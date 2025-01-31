import React, { useContext, useEffect } from 'react'
import PostCard from '../PostCard'
import useFetchPost from '../../hooks/useFetchPost'
import { PostContext } from '../../context/PostContext'
import CommentComponent from './CommentComponent'

const PostContainer = () => {
    
    const {posts} = useContext(PostContext)
    const{fetchFeeds}=useFetchPost()

    useEffect(()=>{
        fetchFeeds()
    },[])

  return (
    <div className='PostContainer'>
       {posts.map((post) => (
        <ul>
            <li key={post.id}><PostCard {...post} /></li>
            {/* <CommentComponent/> */}
        </ul>
      ))}
    </div>
  )
}

export default PostContainer
