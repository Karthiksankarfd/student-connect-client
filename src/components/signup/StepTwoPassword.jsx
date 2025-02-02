
import useSignup from "../../hooks/useSignup"
import { SignupContext } from "../../context/SignupContext"
import { useContext } from "react"

const StepTwoPassword = ()=>{
        const{signUpError}=useContext(SignupContext)
        const{signUpUser, setSignUpUser} = useContext(SignupContext)
        console.log(signUpUser.email)
        const{confirmPassword,setConfirmPassword,isPasswordMatchig} = useSignup()

    return(
        <section className="w-full h-dvh grid place-items-center">
                <section className="signup-Step1 border-2 rounded-lg shadow-lg lg:w-1/2 w-full grid grid-flow-row place-items-center gap-y-5 py-5 bg-white">
                        <div className=" w-full  grid place-items-center ">
                                
                                <form className="w-full  h-fit  grid place-items-start gap-y-3 p-5">

                                <h3 className="white text-start  text-[30px] text-[#0057FF]">Create Password</h3>

                                <label className=" text-gray-500 text-sm font-medium  " htmlFor="email">Password</label> 
                                <input  type="password"  name="password" placeholder="Enter a strong password" value={signUpUser.password} onChange={(e)=>setSignUpUser((prev)=>( {...prev, password:e.target.value}))   } className="text-black focus:outline-none border-2 rounded-lg px-5  py-2  w-full  border-gray-300 "/>
                                
                                <label className=" text-gray-500 text-sm font-medium" htmlFor="confirm-password">Confirm password</label> 
                                <input  type="password"  name="confirm-password" placeholder="confirm password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="text-black focus:outline-none border-2 rounded-lg px-5  py-2  w-full border-gray-300 "  />
                                <p className="error_message text-orange-500 text-sm text-wrap ">{signUpError}
                                        {/* <Link to="/emaillogin" className="text-[#0057FF]">try login</Link> or try with another email */}
                                        </p>

                                </form>
                                
                        </div>

                <div className="btns grid lg:grid-cols-6 sm:grid-cols-1 gap-4 w-full px-5">

                                {/* Previous Button */}
                                <div className="lg:col-span-2 sm:col-span-1  grid place-items-start">
                                        {/* <Button name="<<Previous" /> */}
                                        <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">previous</button>
                                </div>
                                {/* Go to login Button */}
                                <div className="lg:col-span-2 sm:col-span-1  grid place-items-center">
                                        {/* <Button name="Go to login" />     */}
                
                                </div>
                                {/* Next Button */}
                                <div className="lg:col-span-2 sm:col-span-1  grid place-items-end">
                                        {/* <Button name="Next >>" /> */}
                                        <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50" onClick={isPasswordMatchig}>continue</button>
                                </div>

                </div>

                </section>
        </section>

    )
}

export default StepTwoPassword;