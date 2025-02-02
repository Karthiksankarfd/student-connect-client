import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useLogin from  "../hooks/useLogin"
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
const LoginPage = () => {

    const{email,setEmail,login,reqpassword, setreqPassword,passwordError,emailError,validatePassword ,validateEmail,error} =  useLogin()
    const{isLoading} = useContext(UserLoggedInStateContext) 
  return (
<>
<section className="login-form-container   w-full min-h-screen grid place-items-center bg-white">

<form className="p-6 rounded-lg  max-w-md w-full" onSubmit={login}>

     <p className="white text-center mb-5 text-[30px] text-[#0057FF]">Login</p>

          <div className=" flex flex-col items-start ">
              <label
                  htmlFor="email"
                  className="white block text-gray-500 text-sm font-medium mb-1"
              >
                  Email
              </label>
              <input
                  onChange={(e)=>{setEmail(e.target.value)}}
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="px-3 py-2 w-full border-b border-gray-300  focus:outline-none mb-2 "
              />
              {!validateEmail && emailError}
          </div>
          <div className="flex flex-col items-start ">
              <label
                  htmlFor="password"
                  className="white block text-gray-500 text-sm font-medium mb-1"
              >
                  Password
              </label>

              <input
                  onChange={(e)=>{setreqPassword(e.target.value)}}
                  type="password"
                  name="password"
                  id="password"
                  value={reqpassword}
                  className="px-3 py-2 w-full border-b border-gray-300  focus:outline-none mb-2"
              />
              <p className="error-msg text-red-500 text-sm mb-2">{error}</p>
              {!validatePassword && passwordError}

              <Link className="text-[#0057FF] text-start text-sm mb-2">Forget Password ?</Link>
          </div>
          
          <button type="submit"  className="w-full bg-[#0057FF] text-white py-2 px-4 rounded-md transition" >
                  Login
          </button>


</form>
</section>


                {/* Loader Modal */}
                {isLoading && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow-md flex items-center space-x-4">
                      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-700">Loading, please wait...</span>
                    </div>
                  </div>
                )}
</>
  );
};

export default LoginPage;
