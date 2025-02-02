
const UserDetailsSection = () => {
    return (
      <div className="w-11/12 mx-auto p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold text-center mb-4">User Details</h2>
  
        {/* Upload Profile and Cover Photo */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-6">
          <div className="text-center">
            <label htmlFor="profile" className="cursor-pointer">
              <div className="border-2 border-[#0057FF] rounded-lg p-4 w-40 h-40 flex items-center justify-center hover:bg-gray-100 transition-all">
                <span className="text-sm text-gray-500">Upload Profile Photo</span>
              </div>
              <input
                type="file"
                id="profile"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
  
          <div className="text-center">
            <label htmlFor="cover" className="cursor-pointer">
              <div className="border-2 border-[#0057FF] rounded-lg p-4 w-40 h-40 flex items-center justify-center hover:bg-gray-100 transition-all">
                <span className="text-sm text-gray-500">Upload Cover Photo</span>
              </div>
              <input
                type="file"
                id="cover"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
        </div>
  
        {/* College Details */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="College Name"
            className="border-2 rounded-lg px-4 py-2 text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Academic Details"
            className="border-2 rounded-lg px-4 py-2 text-black focus:outline-none"
          />
        </div>
  
        {/* Buttons Section */}
        <div className="flex justify-between mt-6">
          <button className="border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">
            Skip
          </button>
          <button className="border-[#0057FF] border-2 text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">
            Next
          </button>
        </div>
      </div>
    );
  };

  export default UserDetailsSection
  