import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaHamburger, FaSearch } from "react-icons/fa";
import NavbarVertical from "../components/NavbarVertical";
import PostUploadModal from "../components/Modal/PostUploadModal";
import HomePage from "./HomePage";
import Profile from "./Profile"
const MainLayout = () => {
  return (
    <div className="grid grid-flow-row grid-cols-12 h-dvh col-span-12 ">
      <div className="hidden lg:block lg:col-span-2   h-fit">
        {/* <Navbar/> */}
      </div>
      <div className="lg:col-span-12 col-span-12 h-full overflow-scroll">
          <Outlet />
      </div>
      <PostUploadModal/>
    </div>
  );
};

export default MainLayout;
