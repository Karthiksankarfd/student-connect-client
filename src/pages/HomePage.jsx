import React, { useContext, useEffect } from "react";

import { Outlet } from "react-router-dom";

import PostUploadModal from "../components/Modal/PostUploadModal";

import NavbarFinal from "../components/NavbarFinal";

import EventModal from "../components/Modal/EventModal";
import { ModalContext } from "../context/ModalContext";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
import EditProfileModal from "../components/Modal/EditProfileModal";


const HomePage = () => {
  const{isEventModalOpen, isEditProfileModalOpen,loggedInuser}=useContext( ModalContext)
  const{verifyToken} = useContext(UserLoggedInStateContext)
  // window.onbeforeunload = function () {
  //   console.log("Window is being refreshed or navigated away!");
  //   // Your function call here
  // };
  useEffect(()=>{
    verifyToken()
  },[])
  return (
    <section className="w-full h-dvh overflow-scroll dark:bg-black/90 ">
        <NavbarFinal />
        <div className="h-fit">
            <Outlet></Outlet>
        </div>
        {/* <Footer/> */}
        <PostUploadModal/>
        {/* <UseReducer/> */}
        {/* <Todo/> */}
        {isEventModalOpen && <EventModal/>}
        {/* {isEditProfileModalOpen &&  */}
        {/* // <EditProfileModal  user = {loggedInuser} />} */}
    </section>
  );
};

export default HomePage;
