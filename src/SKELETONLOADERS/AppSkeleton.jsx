import React from "react";

const AppSkeleton = () => {


  return (
    <div className="min-h-screen bg-gray-100">
      
        <div className="p-4 animate-pulse">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-6">
            <div className="h-10 w-1/4 bg-gray-300 rounded"></div>
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-48 bg-gray-300 rounded"></div>
            <div className="h-48 bg-gray-300 rounded"></div>
            <div className="h-48 bg-gray-300 rounded"></div>
          </div>

          {/* Sidebar Section */}
          <div className="mt-6 space-y-4">
            <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
          </div>

          {/* Events/Action Buttons */}
          <div className="mt-8">
            <div className="h-10 w-full bg-gray-300 rounded mb-4"></div>
            <div className="h-10 w-5/6 bg-gray-300 rounded mb-4"></div>
            <div className="h-10 w-2/3 bg-gray-300 rounded"></div>
          </div>
        </div>
      
       
    </div>
  );
};

export default AppSkeleton;
