import React from "react";
import { Outlet } from "react-router-dom";

import PostUploadModal from "../components/Modal/PostUploadModal";

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
