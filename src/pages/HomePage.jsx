import React, { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import UserInfoCard from "../components/UserInfoCard";
import ReleventUsers from "../components/ReleventUsers";
import loggedInuser from "../MockDatas/loggedInuser";
import { SignupContext } from "../context/SignupContext";
import { Outlet } from "react-router-dom";
import NavbarVertical from "../components/NavbarVertical";
import PostUploadModal from "../components/Modal/PostUploadModal";
import ImageCard from "../components/HomePageComponents/ImageCard";
import NavbarFinal from "../components/NavbarFinal";
import ShortEventsInfoCard from "../components/ShortEventsInfoCard";
import events from "../MockDatas/events";
import ShortEventInfoCard2 from "../components/ShortEventInfoCard2";
import posts from "../MockDatas/posts";
import Footer from "../components/Footer";
import EventModal from "../components/Modal/EventModal";
import { ModalContext } from "../context/ModalContext";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
import {Todo, UseReducer} from "../components/UseReducer/UseReducer"

const HomePage = () => {
  const{isEventModalOpen}=useContext( ModalContext)
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
    </section>
  );
};

export default HomePage;
