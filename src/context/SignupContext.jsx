import React, { createContext, useState,children  } from 'react';

export const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {

  const[signUpError,setSignUpError]= useState("")
  const [signUpUser, setSignUpUser] = useState({
    name: "",
    email: "",
    password: "",
    profilePhoto: "",
    coverPhoto: "",
    about:"",
    linkedInUrl: "",
    portfolioUrl: "",
    collegeUrl: "",
    githubUrl: "",
    areasInterestedIn: [],
    createdAt: "",
    updatedAt: "",
  });

  return (
    <SignupContext.Provider value={{ signUpUser, setSignUpUser,signUpError,setSignUpError}}>
      {children} {/* Fallback to null if no children are provided */}
    </SignupContext.Provider>
  );
};

export default SignupContextProvider;
