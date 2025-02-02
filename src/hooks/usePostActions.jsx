import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import API from "../services/API";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
// import { PostContext } from "../context/PostContext.jsx";

const usePostActions = () => {
  const { setPosts,  setComments, setShowComment } =
    useContext(PostContext);
  const { isLoggedIn } = useContext(UserLoggedInStateContext);

  const like = async (postId, userId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post._id === postId) {
          if (post.likedBy.includes(userId)) {
            return {
              ...post,
              flag: false,
              likes: post.likes - 1,
              likedBy: post.likedBy.filter((id) => id !== userId), // Remove userId
            };
          } else {
            return {
              ...post,
              flag: true,
              likes: post.likes + 1,
              likedBy: [...post.likedBy, userId], // Add userId
            };
          }
        }
        return post;
      })
    );

    // API Call
    await updateLikeApi(postId, userId);
  };

  const updateLikeApi = async (postId, userId) => {
    if (!userId) {
      console.log("user id undefined");
      return;
    }
    try {
      const updateLikereq = await API.put(`/updatelike/${postId}/${userId}`);
      console.log(updateLikereq.data);
    } catch (e) {
      console.log("error liking the post", e);
    }
  };

  const postComment = async (postId, userId, comment) => {
    console.log(postId, userId, comment);
    let formdata = new FormData();
    if (!isLoggedIn) {
      window.alert("Please logIN to post comment");
      return;
    }

    if (comment !== " ") {
      formdata.append("userId", userId);
      formdata.append("postId", postId);
      formdata.append("comment", comment);

      try {
        const postCommentreq = await API.post("/postcomment", formdata);
        console.log(postCommentreq.data);
      } catch (e) {
        console.log(e, "Error posting the comment");
      }
    }

    // return window.alert("connot submit empty comment")
  };

  const getcommentsFn = async (postId) => {
    // ! this function setShowComment is working based on obj and bracket notation and negotiating it
    // ! this ShowComment is basically an object
    if (!setShowComment[postId]) {
      try {
        console.log(postId);
        const getComments = await API.get(`/getcomments/${postId}`);
        //! {
        //!     "post1":comments{ },   // Comments are visible for post1
        //!     "post2": false,  // Comments are hidden for post2
        //! }
        // console.log(getComments.data)
        setComments((prev) => ({ ...prev, [postId]: getComments.data }));
      } catch (e) {
        console.log(e);
      }
    }

    setShowComment((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return { like, postComment, getcommentsFn };
};

export default usePostActions;
