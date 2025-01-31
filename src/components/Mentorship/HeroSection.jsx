import React from 'react';
import { useNavigate } from "react-router";
const HeroSection = () => {
   const navigate = useNavigate ()
  return (
    <section className="dark:bg-gradient-to-br from-black to-blue-500 dark:text-white bg-white text-black  py-20 px-5 text-center h-dvh flex flex-col lg:justify-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Supercharge your career with <br />
        <h1 className="text-blue-500 mt-3"> Long Term Mentorship</h1>
      </h1>
      <p className="mt-4 text-lg md:text-xl ">
        Land your dream job, role, and company faster than ever with 1:1 long term mentorship.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        {/* <button className="bg-white text-black py-3 px-6 rounded-md font-semibold shadow-md hover:bg-gray-200">
          Book a Free Trial
        </button> */}
        <button onClick={()=>navigate("mentorlist") } className="bg-blue-500 text-white py-3 px-6 rounded-md font-semibold shadow-md hover:bg-blue-600">
          Find your Mentor →
        </button>
      </div>
      <div className="mt-8 flex justify-center space-x-8 text-sm ">
        <div className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> No Payment Required
        </div>
        <div className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Verified Mentors Only
        </div>
        <div className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Reschedule Anytime
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
