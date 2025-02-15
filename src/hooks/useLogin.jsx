import  { useContext, useState } from "react";
import API from "../services/API";
import { useNavigate } from "react-router-dom";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";

const useLogin = () => {
  const { setIsloggedIn, setLoggedInuser,setIsLoading } = useContext(
    UserLoggedInStateContext
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [reqpassword, setreqPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  const formData = new FormData();
  formData.append("email", email);
  formData.append("pasword", reqpassword);

  // let errorf = true
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false; // Stops execution
    }
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Please enter a valid Password");
      return false;
    }
    return true;
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      setError("")
      // Validate email and password
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(reqpassword);
      // If either validation fails, stop execution
      if (!isEmailValid || !isPasswordValid) {
        setError("please provide valid credentials to login");
        return;
      }
      setIsLoading(true)
      setloading(true);
      const loginreq = await API.post(`/auth/login`, { email, reqpassword });
      if (loginreq.status === 201) {
        console.log(loginreq.data)
        setLoggedInuser(loginreq?.data?.user);
        setIsloggedIn(true);
        localStorage.setItem("authtoken", loginreq.data.authtoken);
        setloading(false);
        // console.log("Setting loader to false", loginreq.data);
        navigate("/stntcnthome");
      }
    } catch (e) {
      setloading(false);
      setIsLoading(false)
      // Check if the error has a response object (indicating a server response)
      if (e.response && e.response.status === 401) {
        console.log("Server message:", e.response);
        setError(e.response?.data?.msg);
      } else {
        console.log("Server message:", e.response);
        setError(e.response?.data?.msg);
        console.error("Unexpected error:", e);
      }
    }
  };

  return {
    email,
    setEmail,
    loading,
    setloading,
    login,
    formData,
    user,
    setUser,
    error,
    reqpassword,
    setreqPassword,
    emailError,
    passwordError,
    validatePassword,
  };
};

export default useLogin;
