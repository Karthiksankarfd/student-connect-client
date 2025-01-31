 
//  import { Link, useNavigate } from "react-router-dom"
// import Button from "./Button"
// import PersonalInformation from "./userdatailscomponents/PersonalInformation"
// import { useEffect } from "react"
// import useLogin from "../hooks/useLogin"
// import useSignup from "../hooks/useSignup"
// const StepOneEmail =()=>{
//     const{isMailExist,setUser, user}=useSignup()
//     return(
//     <section className="signup-Step1 border-2 rounded-lg shadow-lg w-11/12 grid grid-flow-row place-items-center gap-y-5 py-5" >
//         <div className="loader_request_status">
//                 <p className="text-green-500">Verifying Email...</p>
//         </div>
//         <div className=" w-full  grid place-items-center ">
//                 <form className="lg:w-1/2 w-full h-fit  grid place-items-start gap-y-3 p-3">
//                     <h3 className="white text-start  text-[30px] text-[#0057FF]">Signup</h3>
//                     <label className=" text-gray-500 text-sm font-medium" htmlFor="email">Email</label> 
//                     <input  type="email" value={user.email}  name="email" placeholder="Enter a valid email" onChange={(e)=> setUser((prevUser) => ({...prevUser, email:e.target.value,  // Update the email field here
// }))}
//  className="text-black block w-full focus:outline-none border-2 rounded-lg px-5  py-2 lg:w-1/2  border-gray-300 "  />
//                     <p className="error_message text-orange-500 text-sm ">This email id is already registered... PLease <Link to="/emaillogin" className="text-[#0057FF] lg:w-1/2">try login</Link> or try with another email</p>
//                 </form>
//         </div>

//         <div className="btns grid lg:grid-cols-6 sm:grid-cols-1 gap-4 w-1/2">

//                 {/* Previous Button */}
//                 <div className="lg:col-span-2 sm:col-span-1  grid place-items-start">
//                         {/* <Button name="Previous" fn={ ()=>navigate("/StepTwoPassword")}/> */}
//                           <Link onClick={isMailExist} className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50 " to ="/">previous</Link>
//                 </div>

//                 {/* Go to login Button */}
//                 <div clsasName="lg:col-span-2 sm:col-span-1  grid place-items-center">
//                         <Button name="Go to login"  />
//                 </div>

//                 {/* Next Button */}
//                 <div className="lg:col-span-2 sm:col-span-1  grid place-items-end">
//                         <Button name="sign up" let  fn={isMailExist} />
//                 </div>
//         </div>
//     </section>
// )
// }


// const StepTwoPassword = ()=>{
//     return(
//         <section className="signup-Step1 border-2 rounded-lg shadow-lg w-11/12 grid grid-flow-row place-items-center gap-y-5 py-5">
//                 <div className=" w-full  grid place-items-center ">

//                         <form className="lg:w-1/2 w-fit  h-fit  grid place-items-start gap-y-3 p-3">

//                             <h3 className="white text-start  text-[30px] text-[#0057FF]">Create Password</h3>
//                             <label className=" text-gray-500 text-sm font-medium" htmlFor="email">Password</label> 
//                             <input  type="password"  name="password" placeholder="Enter a strong password" onChange={(e)=>console.log(e.target.value)} className="text-black focus:outline-none border-2 rounded-lg px-5  py-2 lg:w-1/2 w-full  border-gray-300 "/>
//                             <label className=" text-gray-500 text-sm font-medium" htmlFor="email">Confirm password</label> 
//                             <input  type="password"  name="password" placeholder="confirm password" onChange={(e)=>console.log(e.target.value)} className="text-black focus:outline-none border-2 rounded-lg px-5  py-2 lg:w-1/2 w-full border-gray-300 "  />
//                             <p className="error_message text-orange-500 text-sm ">Please enter a password containing atleast one special character,one number and Capital letter <Link to="/emaillogin" className="text-[#0057FF]">try login</Link> or try with another email</p>

//                         </form>
                        
//                 </div>

//             <div className="btns grid lg:grid-cols-6 sm:grid-cols-1 gap-4 w-1/2">

//                         {/* Previous Button */}
//                         <div className="lg:col-span-2 sm:col-span-1  grid place-items-start">
//                                 {/* <Button name="<<Previous" /> */}
//                                 <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">previous</button>
//                         </div>
//                         {/* Go to login Button */}
//                         <div className="lg:col-span-2 sm:col-span-1  grid place-items-center">
//                                 {/* <Button name="Go to login" />     */}
        
//                         </div>
//                         {/* Next Button */}
//                         <div className="lg:col-span-2 sm:col-span-1  grid place-items-end">
//                                 {/* <Button name="Next >>" /> */}
//                                 <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50 ">continue</button>
//                         </div>

//             </div>

//         </section>
//     )
// }

// const InterestedIn = ()=>{
//     let feilds = [  "Frontend Development",
//         "Backend Development",
//         "Full Stack Development",
//         "MERN Stack Development",
//         "Data Science",
//         "Machine Learning",
//         "Artificial Intelligence",
//         "UI/UX Design",
//         "Mobile App Development",
//         "Cloud Computing",
//         "Cybersecurity",
//         "DevOps Engineering",
//         "Blockchain Development",
//         "Internet of Things (IoT)",
//         "Game Development",
//         "Augmented Reality (AR)",
//         "Virtual Reality (VR)",
//         "Embedded Systems",
//         "Quantum Computing",
//         "Robotics",
//         "Big Data Analytics",
//         "Database Administration",
//         "System Administration",
//         "API Development",
//         "Quality Assurance (QA) Testing",
//         "Technical Writing",
//         "IT Support",
//         "Network Engineering",
//         "Computer Vision",
//         "NLP (Natural Language Processing)"]
//     return(
//         <section className="w-11/12 rounded-lg  shadow-lg p-5">
//             <h3 className="text-center text-[20px] lg:text-[30px] text-[#0057FF] mb-5">Select the topics interested in </h3>
//             <div className="flex gap-5 flex-wrap justify-center">
//                     {feilds.map((feilds, index)=>{
//                         return(
//                             <button key={index} onClick={(e)=>(console.log(feilds, index))}  className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">{feilds}</button>
//                         )
//                     })}
//             </div>
//             <hr className="mt-5 "/>
//                      <div className="flex flex-wrap justify-between mt-5 ">
//                         <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">previous</button>
//                      {/* <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">next</button> */}
//                         <div>
//                             <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50 mr-5">skip</button>
//                             <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">continue</button>
//                         </div>
//                     </div>

//         </section>
//     )
// }


// const UserDetailsSection = () => {
//   return (
//     <div className="w-11/12 mx-auto p-6 rounded-lg shadow-lg bg-white">
//       <h2 className="text-xl font-semibold text-center mb-4">User Details</h2>

//       {/* Upload Profile and Cover Photo */}
//       <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-6">
//         <div className="text-center">
//           <label htmlFor="profile" className="cursor-pointer">
//             <div className="border-2 border-[#0057FF] rounded-lg p-4 w-40 h-40 flex items-center justify-center hover:bg-gray-100 transition-all">
//               <span className="text-sm text-gray-500">Upload Profile Photo</span>
//             </div>
//             <input
//               type="file"
//               id="profile"
//               className="hidden"
//               accept="image/*"
//             />
//           </label>
//         </div>

//         <div className="text-center">
//           <label htmlFor="cover" className="cursor-pointer">
//             <div className="border-2 border-[#0057FF] rounded-lg p-4 w-40 h-40 flex items-center justify-center hover:bg-gray-100 transition-all">
//               <span className="text-sm text-gray-500">Upload Cover Photo</span>
//             </div>
//             <input
//               type="file"
//               id="cover"
//               className="hidden"
//               accept="image/*"
//             />
//           </label>
//         </div>
//       </div>

//       {/* College Details */}
//       <div className="flex flex-col gap-4">
//         <input
//           type="text"
//           placeholder="College Name"
//           className="border-2 rounded-lg px-4 py-2 text-black focus:outline-none"
//         />
//         <input
//           type="text"
//           placeholder="Academic Details"
//           className="border-2 rounded-lg px-4 py-2 text-black focus:outline-none"
//         />
//       </div>

//       {/* Buttons Section */}
//       <div className="flex justify-between mt-6">
//         <button className="border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">
//           Skip
//         </button>
//         <button className="border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };




// const StepperSignUp=()=>{
//     // let step = 3

//     const{ step ,increasestep,setStep} = useSignup()
//     // let steps ;
//     // increasestep()
   
//     useEffect(()=>{
//       setStep(step)
//       console.log(step, "This from useeffect")
//     },[])


//      return(
        
//         <main className="grid place-items-center">
//             {step === 1 && <StepOneEmail/>}
//             {step === 2 && <StepTwoPassword/>}
//             {step === 3 && <InterestedIn/>}
//             {step === 4 && <PersonalInformation/>}
//         </main>

//      )
// }

// export default StepperSignUp;