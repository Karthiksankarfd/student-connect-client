import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegComment, FaShareAlt,FaBookmark ,FaShare,FaHeart} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import usePostActions from "../hooks/usePostActions";
import CommentComponent from "./Post/CommentComponent.jsx";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
import { PostContext } from "../context/PostContext.jsx";

const PostCard = ({ imageUrl,caption,createdAt, _id, likes,likedBy,userId ,flag,commentedBy}) => {
 
  // global contex value
  const{loggedInuser} = useContext(UserLoggedInStateContext)
  const {comments,setComments,showComment} = useContext(PostContext)

  // custom hook value 
  const {like,getcommentsFn} = usePostActions()
  

  return (
    <section className="post-card shadow-white    text-black bg-white  dark:bg-black dark:text-white flex flex-col  mb-5   relative w-full max-w-auto mx-auto  rounded-xl">
      {/* Header Section */}
      <div className="p-4">
            <div className="flex justify-between items-start  ">
              <div className="posted-by flex items-center gap-3">
                <Link>
                  <img
                    className="posted-by-profile h-8 w-8 rounded-full object-cover"
                    src={userId.profilePhotoUrl}
                    alt=""
                  />
                </Link>
                <div className="name-and-location flex flex-col">
                  <h4 className="font-bold text-base">{userId.name}</h4>
                  <p className="font-normaltext-sm  text-xs">
                    @bangalore
                  </p>
                  <p className="font-normal text-xs ">
                    Posted On {createdAt}.
                  </p>
                </div>
              </div>
              {/* Dropdown Menu */}
              <div className="group relative h-fit w-fit ">
                <BsThreeDotsVertical className="cursor-pointer " />
                <ul className="shadow-md shadow-slate-600 rounded-lg p-2 leading-8 absolute z-10 text-xs right-0 top-full bg-white dark text-black dark:text-gray-300 hidden group-hover:block w-[200px]">
                  <li className="text-black px-2 rounded-lg">
                  Save
                  </li>
                  <li className="text-black px-2 rounded-lg">
                    Share
                  </li>
                  <li className="text-black px-2 rounded-lg">
                    Block
                  </li>
                  <li className="text-black px-2 rounded-lg">
                    View Profile
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[12px] py-2 whitespace-pre-line ">{caption === "null" ? "" : caption}</p>
      </div>


        <img
          className="w-full h-full object-cover "
          loading="lazy"
          src={imageUrl[0]}
          alt=""
        />
      
        <div className=" p-5">
              {/* Action Buttons */}
              <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-4">
                  <span className="flex items-center gap-x-2">
                    <FaHeart onClick={() => like(_id, loggedInuser?._id)} className={`cursor-pointer ${(flag || likedBy.includes( loggedInuser?._id)) ? 'text-red-500' : 'text-gray-300'}`}/>{likes}</span>
                    <span> <FaRegComment className="text-white cursor-pointer hover:text-blue-500" /></span>
                    <FaShare className="text-white cursor-pointer hover:text-green-500" />
                  </div>
                  <FaBookmark className="text-white cursor-pointer hover:text-yellow-500" />
              </div>

                    {/* Liked By Section */}
              <div className="">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="bg-gray-600 h-6 w-6 rounded-full"></div>
                    <div className="bg-gray-600 h-6 w-6 rounded-full"></div>
                    <div className="bg-gray-600 h-6 w-6 rounded-full"></div>
                  </div>
                  <p className="ml-2 text-sm text-gray-400">
                    Liked by <span className="text-gray-600 font-bold">Rihanna Marsh</span> and <span className="text-white font-bold">523 others</span>
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-2">
                <p className="text-sm">
                  <span className="font-bold">Bryan Price</span> Lorem ipsum dolor sit amet.{" "}
                  <span className="text-blue-400 cursor-pointer">#UniVerse</span>
                </p>
              </div>

              {/* View Comments */}
              <div onClick={()=>{ getcommentsFn(_id)}} className="text-sm text-gray-400 cursor-pointer">
                { showComment[_id] ? "Hide comments" : "View comments"}
              </div>
        </div>

        {showComment[_id] &&  <CommentComponent comments = {comments}  postId =  {_id} />}
       

    </section>
  );
};

export default PostCard;
