
import React, { useState } from 'react'
import API from '../services/API';
import { useNavigate } from 'react-router-dom';
const { createContext } = require("react");

export const UserLoggedInStateContext = createContext()

const UserLoggedInContextProvider = ({children}) => {
    const navigate  = useNavigate()
      const[isLoading, setIsLoading] = useState(false)
      const[isLoggedIn, setIsloggedIn] = useState(false)
      const[loggedInuser , setLoggedInuser] = useState()
      const[posts, setPosts] = useState()

      const verifyToken = async ()=>{
        let token = localStorage.getItem("authtoken")
        if(!token){
            console.log("No token Found")
            return;
        }
        try{
            let req =  await API.post("/auth/verifytoken",{token},
                {
                    headers: {
                 'Authorization' : `Bearer ${token}`,
                 'Content-Type': 'application/json',
               }
            }
        )
                
                if(req.status === 201){
                    setIsloggedIn(true)
                    setLoggedInuser(req.data.user)
                    navigate("/stntcnthome")
                }
                
       
        }catch(e){
            console.log(e,"This is from cath block")
        }
  
    }
  return (
    <UserLoggedInStateContext.Provider value={{loggedInuser , setLoggedInuser,isLoggedIn, setIsloggedIn,isLoading, setIsLoading,verifyToken}}>
      {children}
    </UserLoggedInStateContext.Provider>
  )
}

export default UserLoggedInContextProvider ;
