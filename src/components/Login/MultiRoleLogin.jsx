import React, { useState } from "react";

const MultiRoleLogin = () => {
  const [activeLoginType, setActiveLoginType] = useState("Student"); // Default login type

  const handleLogin = () => {
    alert(`Logging in as ${activeLoginType}!`);
    // Add login functionality here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      
      {/* Login Type Tabs */}
      <div className="flex flex-col w-1/2 mb-6 gap-3">
        {["Student", "Institute", "Company/Organization"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 border rounded-t-lg font-medium ${
              activeLoginType === type
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveLoginType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      
      {/* Login Form */}
      <div className="w-1/2  bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Login as {activeLoginType}
        </h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MultiRoleLogin;
