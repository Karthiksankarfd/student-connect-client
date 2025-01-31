import React from "react";

const FilterComponent = () => {
  return (
    <div className="p-6 w-auto  bg-white dark:bg-black text-black dark:text-white ">
      {/* Filter By Section */}
      <h2 className="text-xl font-semibold mb-4">Filter By</h2>

      {/* Domain Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Domain</label>
        <input
          type="text"
          placeholder="eg: frontend, backend, etc.."
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["Frontend", "Backend", "Fullstack", "DevOps / SRE / Cloud", "QA / Automation Testing", "Data Scientist / AI/ML", "Data Analyst"].map((domain) => (
            <span
              key={domain}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Skills</label>
        <input
          type="text"
          placeholder="eg: java, dsa, sql etc.."
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["Leadership & Communication", "DSA", "SQL", "Java", "System Design"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Tools</label>
        <input
          type="text"
          placeholder="eg: git, postman, figma etc.."
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["Git", "Postman", "Visual Studio Code", "GitHub", "Docker"].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Experience</label>
        <div className="flex items-center gap-4">
          <span>0 Years</span>
          <input
                type="range"
                min="0"
                max="15"
                
                className="flex-grow appearance-none accent-blue-100 w-full  shadow-black   dark:bg-gray-700 cursor-pointer"/>
          <span>15+ Years</span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Pricing</label>
        <div className="flex items-center gap-4">
          <span>₹5,000</span>
          <input
            type="range"
            min="5000"
            max="40000"
            className="flex-grow accent-blue-100"
          />
          <span>₹40,000</span>
        </div>
      </div>

      {/* Languages Section */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium">Languages</label>
        <input
          type="text"
          placeholder="eg: english, hindi, telugu etc.."
          className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {["English", "Hindi", "Telugu", "Bengali", "Marathi"].map((language) => (
            <span
              key={language}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-sm rounded-full"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
