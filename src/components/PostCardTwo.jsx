import React from "react";
import { FaEllipsisH, FaHeart, FaRegComment, FaShare, FaBookmark } from "react-icons/fa";

const PostCardTwo = ({ image, content,username, location }) => {
  return (
    <div className="dark:bg-black dark:text-white bg-white text-gray-600 shadow-lg   p-4 rounded-lg  w-auto mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-3">
          <div className=" h-10 w-10 rounded-full"></div>
          <div>
            <h3 className="font-bold">Bryan Price</h3>
            <p className="text-sm text-gray-400">India, 12 minutes ago</p>
          </div>
        </div>
        <FaEllipsisH className="text-gray-400 cursor-pointer" />
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-700 h-56 rounded-lg mb-4"></div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex space-x-4">
          <FaHeart className="text-white cursor-pointer hover:text-red-500" />
          <FaRegComment className="text-white cursor-pointer hover:text-blue-500" />
          <FaShare className="text-white cursor-pointer hover:text-green-500" />
        </div>
        <FaBookmark className="text-white cursor-pointer hover:text-yellow-500" />
      </div>

      {/* Liked By Section */}
      <div className="mb-2">
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
      <div className="text-sm text-gray-400 cursor-pointer hover:text-white">
        View all 120 comments
      </div>
    </div>
  );
};

export default PostCardTwo;
