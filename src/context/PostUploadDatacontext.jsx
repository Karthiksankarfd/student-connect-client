import React, { createContext, useState } from 'react'

export const PostDataContext = createContext()

const PostUploadDatacontext = ({children}) => {

    const [postContent, setPostContent] = useState({
        images: [],
        caption:null,
        tags: null,
        maxCount: null
      });

    const [previewUrls, setPreviewUrls] = useState([]);

  return (
    <PostDataContext.Provider value={{postContent, setPostContent,previewUrls, setPreviewUrls}}>{children}</PostDataContext.Provider>
  )
}

export default PostUploadDatacontext
