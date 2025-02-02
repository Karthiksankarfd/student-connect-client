import  { useContext, useState } from "react";
import API from "../services/API";
import { ModalContext } from "../context/ModalContext.jsx";

import { PostDataContext } from "../context/PostUploadDatacontext.jsx";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext.jsx";

const useUpload = () => {
  const{loggedInuser} = useContext(UserLoggedInStateContext)

  // this has to be fixed dynamically as the user logged in the app
  const userId = loggedInuser?._id; // fixed 

  const [postData, setPostData] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const { setIsUploaded, setIsUploadModal, setIsUploading, setIsUploadFailed } = useContext(ModalContext);
  const { postContent, setPostContent, previewUrls, setPreviewUrls } = useContext(PostDataContext);

  //* fn to setpost
  const handlePostfilechange = (e) => {

    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    // Array.from(e.target.files) will form the array 
    const files = Array.from(e.target.files);
    // Extract name and value from the event target this is to show preview of the images uploaded
    setPostContent((prevPost) => ({
      ...prevPost,
      images: files,
      maxCount: files.length,
    }));
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);

  };

  const handleCaptinChange = (e) => {
    setPostContent((prevData) => ({ ...prevData, caption: e.target.value }));
  };

  // * fn to upload post
  const uploadPostfn = async () => {
    const formdata = new FormData();
    postContent.images.forEach((image) => {  
      formdata.append("postImages", image); // Ensure 'postImages' matches the backend field// Append images to FormData
    });
    formdata.append("caption", postContent.caption);
    formdata.append("maxCount", postContent.images.length);
    formdata.append("userId", userId);

      try {
          setIsUploading(true);
        for (let pair of formdata.entries()) {
          console.log(`${pair[0]}:`, pair[1]); // Debugging
        }
        const uploadPost = await API.post("/uploadPost", formdata, {
            // withCredentials: true,
            headers: { "Content-Type": "multipart/form-data",  },
        });
        console.log(uploadPost.data)
        setIsUploaded(true);

        return uploadPost.data; // Returning the uploaded post data
      } catch (e) {

        setIsUploadFailed(true);
        setUploadError(e.message);
        return null;

      } finally {
        setIsUploading(false); // Reset uploading state no matter what
      }
  };

  const uploadStoryfn = async (param) => {
    
    try {
      setIsUploadModal(false);
      setIsUploading(true);
      const uploadPost = await API.post(`/api/uploadPost/:${userId}`, param, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return uploadPost.data;
    } catch (e) {
      setIsUploadFailed(true);
      setUploadError(e.message);
      console.log(e);
    }
    // finally{
    //     // setIsUploadModal(false)
    //     // setIsUploading(false)
    //     setIsUploadFailed(false)
    // }
  };
  return {
    postData,
    setPostData,
    uploadPostfn,
    uploadStoryfn,
    handlePostfilechange,
    handleCaptinChange,
  };
};

export default useUpload;
