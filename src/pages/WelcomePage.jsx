import React, { useContext, useEffect } from 'react'
import Button from '../components/Button'
import {Link, useNavigate} from  "react-router-dom"
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import API from "../services/API"
import { UserLoggedInStateContext } from '../context/UserLoggedInContext';
const WelcomePage = () => {

const{verifyToken} = useContext(UserLoggedInStateContext)
const navigate = useNavigate()

useEffect(  ()=>{
    verifyToken()
},[])




  return (
    // <GoogleOAuthProvider clientId="1069161712161-j2sqpjjbq98fsk6sn5r6qkpe47boqoub.apps.googleusercontent.com">     
            <section className='welcome-container lg:p-10 flex justify-center items-center h-dvh'>

                            <div className='flex flex-col justify-center items-start w-full lg:w-2/4 h-auto p-6'>
                                <div className='mb-3'>
                                    <h1 className='text-start text-sm lg:text-[60px] font-semibold mb-3'>Welcome to </h1>
                                    <h1 className='text-start text-sm lg:text-[60px] font-semibold text-[#0057FF] leading-tight'>studentConnect</h1>
                                </div>
                                <p className='text-start w-full  mb-3'>
                                    Connect, collaborate, and grow with like-minded individuals. Explore new ideas, share experiences, and unlock opportunities in your field.
                                </p>
                                <div className='btn-container flex justify-start items-center gap-x-5 mb-3'>
                                    {/* <Button name="Login with google" /> */}
                                    <GoogleLogin/>
                                    {/* <div className='h-[1px] w-[2px] bg-gray-400'>|</div> */}
                                    <Button name="Login with email" fn = {()=>navigate("emaillogin")} />
                                </div>
                                <div className='flex items-center w-full '>
                                    <hr className='flex-grow border-gray-300' />
                                    <p className='mx-2'>or</p>
                                    <hr className='flex-grow border-gray-300' />
                                </div>
                                <p className='text-start'>
                                    Don't have an account? 
                                    <span className='text-[#0057FF] underline'>
                                        <Link to="/signup">Sign in</Link>
                                    </span>
                                </p>
                            </div>

            </section>
    //    </GoogleOAuthProvider>


  )
}

export default WelcomePage
