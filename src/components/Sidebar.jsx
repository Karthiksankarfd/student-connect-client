import React from "react";
// import { HomeIcon, CompassIcon, BellIcon, EnvelopeIcon, BookmarkIcon, ChartBarIcon, CogIcon, PaletteIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className=" text-black bg-white hidden lg:flex dark:bg-black dark:text-white shadow-lg w-auto h-fit rounded-xl p-4  flex-col space-y-1 ">
      {/* Home */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
        {/* <HomeIcon className="h-6 w-6" /> */}
        <span>Home</span>
      </div>
      {/* Explore */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
        {/* <CompassIcon className="h-6 w-6" /> */}
        <span>Explore</span>
      </div>
      {/* Notifications */}
      <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
        <div className="flex items-center space-x-3">
          {/* <BellIcon className="h-6 w-6" /> */}
          <span>Notifications</span>
        </div>
        <span className="bg-red-600 text-white text-sm font-bold rounded-full px-2">4</span>
      </div>
      {/* Messages */}
      <div className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
        <div className="flex items-center space-x-3">
          {/* <EnvelopeIcon className="h-6 w-6" /> */}
          <span>Messages</span>
        </div>
        <span className="bg-red-600 text-white text-sm font-bold rounded-full px-2">3</span>
      </div>
      {/* Bookmarks */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
        {/* <BookmarkIcon className="h-6 w-6" /> */}
        <span>Bookmarks</span>
      </div>
      {/* Analytics */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
        {/* <ChartBarIcon className="h-6 w-6" /> */}
        <span>Analytics</span>
      </div>
      {/* Customize */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800  p-2 rounded-lg">
        {/* <PaletteIcon className="h-6 w-6" /> */}
        <span>Customize</span>
      </div>
      {/* Settings */}
      <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800 p-2 rounded-lg">
        {/* <CogIcon className="h-6 w-6" /> */}
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
