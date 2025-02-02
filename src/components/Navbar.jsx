
import { Link } from "react-router-dom";
import loggedInuser from "../MockDatas/loggedInuser"
import { FaHome,  FaBell, FaMedium, FaComment, FaBook, FaPlus } from 'react-icons/fa';

const Navbar = () => {

  // const{loggedInuser}= useContext(SignupContext)
  // console.log(loggedInuser)

  
  return (
    <nav className="navbar hidden  min-w-sm px-5 h-dvh lg:flex flex-col bg-white shadow-xl rounded-lg  gap-y-3 ">
      <div className="logo">
        {/* <h1 className="font-semibold text-xl text-blue-600">studentConnect</h1> */}
            {/* <img className="h-24 w-24 object-cover" src="https://t3.ftcdn.net/jpg/03/92/04/66/360_F_392046638_RCoFWbhnCMrtfc3FizT89CjAJrxrr8I8.jpg" alt="logo" /> */}
      </div>
      <div className="profile h-fit w-full flex items-center gap-x-2 p-2 rounded-lg bg-slate-400 relative">
          <Link to="/stntcnthome/profile"><img src={loggedInuser.profilePhotoUrl} alt="" className="h-12 w-12 object-cover rounded-full" /></Link>
          <FaPlus title="upload post" className="absolute bg-white rounded-full left-11 top-9 cursor-pointer"/>
          <p>{loggedInuser.name}</p>
      </div>
      <div className="searchbar flex items-center">
        {/* <input type="search" placeholder="search" className="border-2 border-gray-500 px-5 py-1 w-full outline-none rounded-lg mr-2" /> */}
        
        {/* <button className="hover:bg-blue-500 py-2"><FaSearch /></button> */}
        {/* <button className="border-2 w-full border-blue-500 rounded-lg py-1 px-3 hover:bg-blue-500 hover:text-white transition-all delay-75">search</button> */}
      </div>
      <div className="navlinks flex flex-col gap-y-2 flex-wrap">
        <Link to="/stntcnthome" className="shadow-xl flex flex-wrap items-center justify-between   hover:ml-2 hover:shadow transition-all delay-75 p-2 rounded-lg" >Home <FaHome /></Link>
        {/* <div> */}
          <Link to="notifications" className="shadow-xl  flex flex-wrap items-center justify-between  hover:shadow transition-all delay-75 p-2 rounded-lg text-wrap">Notification<FaBell/></Link>
        {/* </div> */}
        <Link to="events" className="shadow-xl  flex flex-wrap items-center justify-between  hover:shadow transition-all delay-75 p-2 rounded-lg">Events<FaMedium/></Link>
        <Link to="chats" className="shadow-xl flex flex-wrap items-center justify-between   hover:shadow transition-all delay-75 p-2 rounded-lg">Chats<FaComment/></Link>
        <Link to="learnlab" className="shadow-xl flex-wrap flex items-center justify-between  hover:shadow transition-all delay-75 p-2 rounded-lg">LearnLab<FaBook/> </Link>
      </div>

    </nav>
  );
};

export default Navbar;
