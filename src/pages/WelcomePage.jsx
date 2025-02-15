import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import {Link, useNavigate} from  "react-router-dom"
import { GoogleLogin } from '@react-oauth/google';
import { UserLoggedInStateContext } from '../context/UserLoggedInContext';
import LaunchLoader from '../components/Loaders/LaunchLoader';
import FireBaseLoginBtn from '../components/GoogleOauth/FireBaseLoginBtn';
const WelcomePage = () => {
    
        const navigate = useNavigate()
        const{verifyToken} = useContext(UserLoggedInStateContext)
        const [isLaunchLoader,setisLaunchLoader] = useState(true)

        useEffect(() => {
            const timeout = setTimeout(() => {
              verifyToken();
              setisLaunchLoader(false);
            }, 2000);
          
            return () => clearTimeout(timeout); // Cleanup function
          }, []);
          

  return (
    <>  
    {isLaunchLoader ? (<LaunchLoader/>) : (
            <section className='welcome-container lg:p-10 flex justify-center items-center h-dvh bg-white'>
                <div className='flex flex-col justify-center items-start w-full lg:w-2/4 h-auto p-6'>
                    <div className='mb-3'>
                        <h1 className='text-start text-2xl lg:text-[40px] font-normal mb-2'>Welcome to </h1>
                        <h1 className='text-start text-3xl lg:text-[60px] font-normal text-[#0057FF] leading-tight'>studentConnect</h1>
                    </div>
                    <p className='text-start text-sm w-full  mb-3'>
                        Connect, collaborate, and grow with like-minded individuals. Explore new ideas, share experiences, and unlock opportunities in your field.
                    </p>
                    <div className='btn-container flex items-center  gap-5 mb-3 h-fit flex-wrap'>
                        <div className='flex-grow'>
                            <FireBaseLoginBtn/>
                        </div>
                        <div className='h-10 hidden lg:block w-[1px] bg-gray-400 items-stretch'></div>
                        <div className='flex-grow'>
                            <Button name="Login with email" fn = {()=>navigate("/emaillogin")} />  
                        </div>               
                    </div>


                    <div className='flex items-center w-full '>
                        <hr className='flex-grow border-gray-300' />
                        <p className='mx-2'>or</p>
                        <hr className='flex-grow border-gray-300' />
                    </div>
                    <p className='text-start'>
                         Don't have an account ? 
                        <span className='text-[#0057FF] '>
                        <Link to="/signup" className="text-blue-500 hover:underline ml-3">Sign up</Link>
                        </span>
                    </p>
                </div>
            </section>
    )}
            
    </>




  )
}

export default WelcomePage
