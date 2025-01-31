import React, { useContext, useState } from "react";
import {
  FaBell,
  FaComment,
  FaHamburger,
  FaMale,
  FaPlug,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ModalContext } from "../context/ModalContext";
import loggedInuser from "../MockDatas/loggedInuser";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";

const NavbarFinal = () => {
  const{loggedInuser, isLoggedIn} = useContext(UserLoggedInStateContext)
  const[isDarkMode, setIsDarkMode]= useState(false)

  const handleToggle = () => {

    setIsDarkMode(!isDarkMode);

    document.documentElement.classList.toggle('dark', !isDarkMode);

  };



  const { setIsUploadModal, setIsModalActive } = useContext(ModalContext);
  const [isNavbarActive, setisNavbarActive] = useState(false);
  return (
    <nav className="nav-bar-final   flex justify-between text-sm w-full  place-items-center p-2  dark:bg-black dark:text-white bg-white text-black transition-all shadow-gradient-to-b from-purple-500 shadow-gray-300 shadow-sm sticky  top-0 z-[10]"   >
      {/* <img src="" alt="logo" /> */}
      <FaHamburger
          onClick={() => setisNavbarActive(!isNavbarActive)}
          className="block lg:hidden"
        />
      <h1 className="font-semibold text-sm text-[#6c63ff] hidden lg:block col-span-1 w-fit">
        studentConnect
      </h1>

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
      <div className="search-bar lg:w-1/5">
        <div className=" h-fit  block relative ">
          <input
            type="text"
            placeholder="serach ... "
            className="  py-1 px-3 border-2 lg:rounded-xl w-full text-gray-400  dark:bg-black/90 border-gray-400 "
          />
          <button>
            <FaSearch className=" text-gray-400 absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 " />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex gap-x-5  navbar-links w-fit ">
        <NavLink to="">Home</NavLink>
        <NavLink to="events" className="group relative w-fit">
          Events
          <ul className={` ${isDarkMode ? "bg-slate-950 text-white" :"bg-white text-black"} list-none absolute z-50 left-0 mt-2   shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:visible`}>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Explore Events
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Post Event
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Another Event
            </li>
          </ul>
        </NavLink>

        {/*  mentorship*/}
        <NavLink to="mentorship" className={`group relative w-fit  `} >
          Mentorship
          <ul className={`list-none ${isDarkMode ? "bg-slate-950 text-white" :"bg-white text-black"}  absolute z-50 left-0 mt-2  shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:visible`}>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Explore Events
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Post Event
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Another Event
            </li>
          </ul>
        </NavLink>

        <NavLink to="opportunities" className="group relative w-fit">
          Opportunities
          <ul className="list-none absolute z-50 left-0 mt-2  shadow-lg opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:visible">
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Internships
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Jobs
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Freelancing
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
              Open Source
            </li>
          </ul>
        </NavLink>

        <NavLink to="community">Community</NavLink>
        
      </div>

      <div className="relative">
      <label htmlFor="theme-toggle" className="hidden lg:flex items-center cursor-pointer">
        <input
          type="checkbox"
          id="theme-toggle"
          className="hidden "
          onChange={handleToggle}
        />
        <div
          className={` w-10 h-5  rounded-full relative transition-all ${
            isDarkMode ? 'bg-slate-600' : 'bg-black'
          }`}
        >
          <div
            className={`absolute top-0.5 left-0.5 h-4 w-4 bg-black rounded-full transform transition-transform ${
              isDarkMode ? 'translate-x-5' : 'translate-x-0 bg-slate-300'
            }`}
          ></div>
        </div>
      </label>
    </div>

      {/* call to action icons  */}
      <div className="call-to-action-icons  w-fit flex   items-center justify-between ">
        <div className="profile flex  items-center relative w-fit h-fit group gap-x-4">
        <div className="relative">
            <NavLink to ="notifications"><FaBell /></NavLink>
        </div>
        <div className="relative">
          <FaComment title="chats" />
        </div>
        {/* visible only when user loggedin is true */}
        {isLoggedIn ? (<>
          <Link to="/stntcnthome/profile" className="">
                  <img
                    src={loggedInuser?.profilePhotoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"}
                    alt=""
                    className="h-8 w-8 object-cover rounded-full aspect-square"
                  />
                </Link>
      
                <div className="absolute top-6 z-50 right-6 w-[100px] border-2 border-black  hidden group-hover:block transition-all delay-100  bg-white dark:bg-black text-sm font-semibold cursor-pointer  py-2 px-2 shadow-xl rounded-xl">
                  <ul className="list-none ">
                    <li
                      onClick={() => {
                        setIsUploadModal(true);
                        setIsModalActive(true);
                      }}
                    >
                      <Link>Upload post</Link>
                    </li>
                    <li>
                      <Link>Upload post</Link>
                    </li>
                  </ul>
                </div>
                <FaPlus
                  title="upload post"
                  className="absolute  rounded-full text-black top-4 right-5  cursor-pointer bg-white"
                />
        </>) : (
              <Link to="/emaillogin" className="p-2 bg-blue-600 text-white ">Login</Link>
            ) }
  
        </div>
      </div>
    </nav>
  );
};

export default NavbarFinal;
