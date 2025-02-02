import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaSearch,

  FaBell,

 
  FaComment,
 
  FaHamburger,

  FaPlus,
} from "react-icons/fa";
import loggedInuser from "../MockDatas/loggedInuser";
import { ModalContext } from "../context/ModalContext";

const NavbarVertical = () => {


  const{setIsUploadModal,setIsModalActive} = useContext(ModalContext)
  let [isNavbarActive, setisNavbarActive] = useState(false);
  return (
    <section className=" bg-transparent sticky top-0   z-[3] ">
      <nav className="w-full h-fit flex  items-center justify-between px-5 py-2 inset-0 bg-white  shadow-md gap-x-2">
        <FaHamburger
          onClick={() => setisNavbarActive(!isNavbarActive)}
          className="block lg:hidden"
        />
        
        <div className="profile sm:flex  items-center relative w-fit h-fit group lg:hidden">
                    <Link to="/stntcnthome/profile" className="">
                        <img
                        src={loggedInuser.profilePhotoUrl}
                        alt=""
                        className="h-8 w-8 object-cover rounded-full aspect-square"
                        />
                    </Link>
   
                    <div className="absolute top-6 z-50 right-6 w-[100px] border-2 border-black  hidden group-hover:block transition-all delay-100  bg-white text-sm font-semibold cursor-pointer  py-2 px-2 shadow-xl rounded-xl">
                        <ul className="list-none ">
                                <li onClick={()=>{setIsUploadModal(true);setIsModalActive(true)}}><Link>Upload post</Link></li>
                                <li><Link>Upload post</Link></li>
                        </ul>
                    </div>
                <FaPlus   title="upload post" className="absolute bg-white rounded-full top-4 right-5  cursor-pointer"/>
            </div>
        {isNavbarActive && (
          <div>
            <div
              onClick={() => setisNavbarActive(!isNavbarActive)}
              className="overlay bg-black opacity-50 inset-0 h-dvh absolute z-[6]"
            ></div>
            <div className="overlay bg-white flex flex-col text-black w-2/3 inset-0 h-dvh absolute z-[8] p-5 rounded-xl">
              <div>
                <button
                  className="float-right text-xl w-fit bg-black px-3 py-1 text-white"
                  onClick={() => setisNavbarActive(!isNavbarActive)}
                >
                  X
                </button>
              </div>

              <NavLink
                onClick={() => setisNavbarActive(!isNavbarActive)}
                to="/stntcnthome"
                className=" h-fit   py-2 hover:bg-slate-200 transition-all delay-75  rounded-lg"
              >
                Home
                {/* <FaHome /> */}
              </NavLink>
              <NavLink
                onClick={() => setisNavbarActive(!isNavbarActive)}
                to="notifications"
                className=" h-fit   py-2  hover:bg-slate-200 transition-all delay-75  rounded-lg text-wrap"
              >
                Notification
                {/* <FaBell/> */}
              </NavLink>
              <NavLink
                onClick={() => setisNavbarActive(!isNavbarActive)}
                to="events"
                className=" h-fit    py-2  hover:bg-slate-200 transition-all delay-75  rounded-lg"
              >
                Events
                {/* <FaMedium/> */}
              </NavLink>
              <NavLink
                onClick={() => setisNavbarActive(!isNavbarActive)}
                to="chats"
                className="h-fit   py-2  hover:bg-slate-200 transition-all delay-75  rounded-lg"
              >
                Chats
                {/* <FaComment/> */}
              </NavLink>
              <NavLink
                onClick={() => setisNavbarActive(!isNavbarActive)}
                to="learnlab"
                className=" h-fit    hover:bg-slate-200 transition-all delay-75  rounded-lg"
              >
                LearnLab
                {/* <FaBook/>  */}
              </NavLink>
            </div>
          </div>
        )}
        <h1 className="font-semibold text-sm text-blue-600 hidden lg:block">studentConnect</h1>

        <div className='search-bar flex-grow lg:flex-grow-0 lg:w-1/2 '>
                    <div className=' h-fit  block relative '>
                        <input type='text' placeholder='serach ... ' className="  py-1 px-3 lg:py-3  border-2  rounded-none  lg:rounded-full w-full " />
                        <button className="bg-blue-500"><FaSearch className='  absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 '/></button>
                    </div>
              </div>



        {/* call to action icons  */}
        <div className="call-to-action-icons hidden  w-[fit]  lg:w-[70px] lg:flex   items-center justify-between ">
              <div className="relative">
                  <FaBell className=""/>
                  <span className="absolute -top-4 left-2 h-5 w-5 flex items-center justify-center text-white text-xs bg-red-500 rounded-full">2</span>
              </div>

              <div className="relative">
                  <FaComment className=""/>
                  <span className="absolute -top-4 left-2 h-5 w-5 flex items-center justify-center text-white text-xs bg-red-500 rounded-full">2</span>
              </div>

              {/* <div className="relative">
                  <FaComment title='chats'/>
              </div> */}
        </div>

           <div className="relative block lg:hidden ">
                <FaBell className=""/>
            </div>

            <div className="relative block lg:hidden ">
                <FaComment title='chats'/>
            </div>
      </nav>
    </section>
  );
};

export default NavbarVertical;
