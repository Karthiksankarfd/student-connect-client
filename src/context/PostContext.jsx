import React, { createContext, useState } from 'react'

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const[posts,  setPosts] = useState()
    const[comments,setComments] = useState({})
    const[showComment , setShowComment] = useState({})
  return (
    <PostContext.Provider value={{posts, setPosts,comments,setComments,showComment , setShowComment}}>
      {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider
