import React, { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserLoggedInStateContext } from "./UserLoggedInContext";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(UserLoggedInStateContext)

  useEffect(() => {
    if (isLoggedIn === false) {
      console.log("Redirecting to /login");
      navigate("/emaillogin");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return <>{ children }</>;
};

export default ProtectedComponent;
