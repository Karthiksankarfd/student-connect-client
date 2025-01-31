import axios from 'axios'
import React, { useContext, useMemo, useState } from 'react'
import API from '../services/API'
import { useNavigate } from 'react-router-dom'
import useLogin from './useLogin'
import { SignupContext } from '../context/SignupContext'
import { UserLoggedInStateContext } from '../context/UserLoggedInContext'
const useSignup = () => {

    const {isLoading, setIsLoading,loggedInuser,setLoggedInuser} = useContext(UserLoggedInStateContext)
    // isLoading, setIsLoading,
    const{setSignUpUser,signUpUser,setSignUpError} = useContext(SignupContext)

    const{validatePassword} = useLogin()

    const navigate =  useNavigate()
    const[confirmPassword,setConfirmPassword ] = useState("")

    
    const formData = new FormData();
    formData.append('name', signUpUser.name);
    formData.append('email', signUpUser.email);
    formData.append('password', signUpUser.password);
    formData.append('profilePhoto', signUpUser.profilePhoto); // Assuming it's a File object
    formData.append('coverPhoto', signUpUser.coverPhoto); // Assuming it's a File object
    formData.append('linkedInUrl', signUpUser.linkedInUrl);
    formData.append('portfolioUrl', signUpUser.portfolioUrl);
    formData.append('collegeUrl', signUpUser.collegeUrl);
    formData.append('githubUrl', signUpUser.githubUrl);
    // user.areasInterestedIn is an array so by using index we are upadting the value
    signUpUser.areasInterestedIn.forEach((area,index)=> formData.append(`areasInterestedIn[${index}]`, area) )
    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    //   }
    const isMailExist = async (e) => {
        e.preventDefault();

        if(signUpUser.email===""){
            setSignUpError("Please provide an email address.");
            return;
        }

        // Validation: Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signUpUser.email)) {
            setSignUpError("Invalid email format. Please enter a valid email.");
            return;
        }

        try {
            setIsLoading(true)
            const verifySignUPemail = await API.post("/auth/isMailExist", {}, {
                headers: { "email": signUpUser.email }
            });
            if (verifySignUPemail.status === 201) {
                setSignUpUser((prev)=>({...prev, email:verifySignUPemail.data.useremail}))
                console.log(verifySignUPemail.data);
                navigate("/signuppassword");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setSignUpError("Account already exists with the provided Email 😟");
            } else {
                console.error("Error verifying the email:", error);
                setSignUpError(
                    "Something went wrong while verifying the email. Please try again."
                );
            }
        } finally {
            setIsLoading(false);
        }
    };
      
    // this updates some component state so i memozied this function 
    const isvalidpassord = useMemo(() => validatePassword(signUpUser.password), [signUpUser.password]);
    // const isvalidpassord = () => validatePassword(signUpuser.password);
    // const isvalidpassord =  validatePassword(signUpuser.password);
    
    const isPasswordMatchig = ()=>{
            if(isvalidpassord){
                if(signUpUser.password === confirmPassword){
                        navigate("/areasinterestedin")
                        return true 
                }else{
                    setSignUpError("Passord and confirm password are not matching...")
                    return false;
                }
            }else{
                setSignUpError("Please enter a password containing atleast one upper case, one special character and one numerical value")
                return false
            }
    }
    

 const createUser = async(e)=>{
        e.preventDefault();
    try{

        const createUser = await API.post("/auth/signupandcreateuser",formData,{headers:{
            "content-type":"multipart/form-data"
        }})

        if(createUser.status === 201){
            console.log("user created successfully ...")
            setLoggedInuser(createUser.data.user)
            navigate("/stntcnthome")
        }
    }catch(e){
        console.error(e)
    }
 }
  // The useSignup returing these below values  
  return {isMailExist,createUser,confirmPassword,setConfirmPassword,isPasswordMatchig}
}

export default useSignup
