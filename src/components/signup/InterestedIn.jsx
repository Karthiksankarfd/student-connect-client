import {  useNavigate } from "react-router-dom"
import {SignupContext} from "../../context/SignupContext"
import { useContext } from "react"
const InterestedIn = ()=>{
const navigate = useNavigate()
     const{signUpUser, setSignUpUser} = useContext(SignupContext)
            console.log(signUpUser.email, signUpUser.password)
    console.log(signUpUser.areasInterestedIn)
    let feilds = [  "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "MERN Stack Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "UI/UX Design",
        "Mobile App Development",
        "Cloud Computing",
        "Cybersecurity",
        "DevOps Engineering",
        "Blockchain Development",
        "Internet of Things (IoT)",
        "Game Development",
        "Augmented Reality (AR)",
        "Virtual Reality (VR)",
        "Embedded Systems",
        "Quantum Computing",
        "Robotics",
        "Big Data Analytics",
        "Database Administration",
        "System Administration",
        "API Development",
        "Quality Assurance (QA) Testing",
        "Technical Writing",
        "IT Support",
        "Network Engineering",
        "Computer Vision",
        "NLP (Natural Language Processing)"]
    return(
        <section className="w-11/12 rounded-lg  shadow-lg p-5">
            <h3 className="text-center text-[20px] lg:text-[30px] text-[#0057FF] mb-5">Select the topics interested in </h3>
            <div className="flex gap-5 flex-wrap justify-center">
                    {feilds.map((feilds, index)=>{
                        return(
                            <button key={index} onClick={(e)=>{e.preventDefault();setSignUpUser((prevUser)=>({...prevUser, areasInterestedIn:[...prevUser.areasInterestedIn, feilds]})) }}  className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">{feilds}</button>
                        )
                    })}
            </div>
            <hr className="mt-5 "/>
                     <div className="flex flex-wrap justify-between mt-5 ">
                        <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">previous</button>
                     {/* <button className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">next</button> */}
                        <div>
                            <button onClick={()=>{navigate("/profileUpload")}} className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50 mr-5">skip</button>
                            <button onClick={()=>{navigate("/profileUpload")}} className="border-[#0057FF] border-2 text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">continue</button>
                        </div>
                    </div>

        </section>
    )
}

export default InterestedIn;