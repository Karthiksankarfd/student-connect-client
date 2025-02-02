import { Link } from "react-router-dom";
// import Button from "./Button"
// import PersonalInformation from "./userdatailscomponents/PersonalInformation"
import { useContext} from "react";
import { SignupContext } from "../../context/SignupContext";
import useSignup from "../../hooks/useSignup";
import { GoogleLogin } from "@react-oauth/google";
const StepOneEmail = () => {

  const { setSignUpUser, signUpUser, isLoading,signUpError} = useContext(SignupContext);
  console.log(signUpUser);
  const { isMailExist } = useSignup();
  
  return (

<section className="w-full h-dvh grid place-items-center">
<section className="signup-Step1 border-2 rounded-lg shadow-lg w-full lg:w-1/2 grid grid-flow-row place-content-center gap-y-5 py-5 h-full lg:h-fit bg-white">
<h3 className="white text-start  text-[30px] text-[#0057FF]">
            Signup
          </h3>
      <div className="loader_request_status">
      {isLoading && <h4 className="text-green-500 text-center">Verifying Email...</h4>}
      </div>

      <div className="">
            {/* <label htmlFor="googlebtn">Log in with google</label> */}
            <div className="" name="googlebtn" id="googlebtn"><GoogleLogin/></div>
      </div>
      

      <div className=" w-full  grid  ">
        <form className=" w-full h-fit  grid place-items-start gap-y-3 p-3">

          <label className=" text-gray-500 text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={signUpUser.email}
            name="email"
            placeholder="Enter a valid email"
            onChange={(e) =>
              setSignUpUser((prevUser) => ({
                ...prevUser,
                email: e.target.value,
              }))
            }
            className="text-black block w-full focus:outline-none border-2 rounded-lg px-5  py-2   border-gray-300 "
          />
         
          <p className="error_message text-orange-500 text-sm ">{signUpError}
            {/* <Link to="/emaillogin" className="text-[#0057FF] lg:w-1/2"> */}
            </p>
        </form>
      </div>

      <div className="btns grid grid-cols-12 gap-4 w-full ">
        {/* Next Button */}
        <div className="lg:col-span-2 sm:col-span-12 col-span-12 grid w-full ">
          <Link
            onClick={(e) => {
              isMailExist(e);
              // Optional: Prevent default navigation if needed
            }}
            className="text-center border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50"
            to="/"
          >
            Sign Up
          </Link>
        </div>

        {/* Go to Login Button */}
        <div className="lg:col-span-2 sm:col-span-12 col-span-12 grid">
          <Link
            //     onClick={(e) => {
            //         isMailExist(e);
            //     }}
            className="text-center border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50"
            to="/emaillogin"
          >
           Go Login
          </Link>
        </div>
      </div>
    </section>
</section>
    

  );
};

export default StepOneEmail;
