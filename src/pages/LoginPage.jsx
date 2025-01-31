import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from  "../hooks/useLogin"
const LoginPage = () => {

    const{email,setEmail,loading, setloading,login,formData,user,reqpassword, setreqPassword,passwordError,emailError,validatePassword ,validateEmail,error} =  useLogin()
 

 
  

    // let isValidemail = validateEmail(email)
    // let isValidPassword = validatePassword (password)

 
  return (
    <section className="login-form-container dark w-full min-h-screen grid place-items-center ">

      <form className="p-6 rounded-lg border-2  max-w-md w-full" onSubmit={login}>

           <p className="white text-start mb-5 text-[30px] text-[#0057FF]">Login</p>

                <div className=" flex flex-col items-start ">
                    <label
                        htmlFor="email"
                        className="white block text-gray-500 text-sm font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none mb-2 "
                    />
                    {!validateEmail && emailError}
                </div>
                <div className="flex flex-col items-start ">
                    <label
                        htmlFor="password"
                        className="white block text-gray-500 text-sm font-medium mb-2"
                    >
                        Password
                    </label>

                    <input
                        onChange={(e)=>{setreqPassword(e.target.value)}}
                        type="password"
                        name="password"
                        id="password"
                        value={reqpassword}
                        className="px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none mb-2"
                    />
                    <p className="error-msg text-red-500 text-xs mb-2">{error}</p>
                    {!validatePassword && passwordError}

                    <Link className="text-[#0057FF] text-start text-sm mb-2">Forget Password ?</Link>
                </div>
                
                <button type="submit"  className="w-full bg-[#0057FF] text-white py-2 px-4 rounded-md transition" >
                        Login
                </button>
      </form>
    </section>
  );
};

export default LoginPage;
