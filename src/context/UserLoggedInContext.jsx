
import React, { useState } from 'react'
import API from '../services/API';
import { useLocation, useNavigate } from 'react-router-dom';
const { createContext } = require("react");

export const UserLoggedInStateContext = createContext()

const UserLoggedInContextProvider = ({children}) => {
    const navigate  = useNavigate()
      const[isLoading, setIsLoading] = useState(false)
      const[isLoggedIn, setIsloggedIn] = useState(false)
      const[loggedInuser , setLoggedInuser] = useState()
      const[posts, setPosts] = useState();

      const location = useLocation()
      // Extract query parameters from the URL
      const queryParams = new URLSearchParams(location);

      const verifyToken = async ()=>{
        let token = localStorage.getItem("authtoken")
        if(!token){
            // console.log(isLoading)
            console.log("No token Found")
            return;
        }
        setIsLoading(true)
        console.log(isLoading)
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
                    setIsLoading(false)
                    setIsloggedIn(true)
                    console.log(isLoading)
                    setLoggedInuser(req.data.user);
                    const goToUrl = location.pathname + (location.search ? location.search : "" )

                    if(location.pathname === "/" ||location.pathname === "/emaillogin"){
                      navigate("/stntcnthome")
                    }else{
                      navigate(goToUrl)
                    }
                    
                }
        }catch(e){
            console.log(e,"This is from cath block")
        }finally{
          setIsLoading(false)
          // isLoggedIn(true)
          console.log(isLoggedIn)
        }
  
    }
  return (
    <UserLoggedInStateContext.Provider value={{loggedInuser , setLoggedInuser,isLoggedIn, setIsloggedIn,isLoading, setIsLoading,verifyToken}}>
      {children}
    </UserLoggedInStateContext.Provider>
  )
}

export default UserLoggedInContextProvider ;
