import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import API from '../../services/API';
import { FaBell, FaEdit } from 'react-icons/fa';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const id = queryParams.get('_id');

  const fetchQuery = async (category, docId) => {
    try {
      const response = await API.get(`/getdataonquery?category=${category}&_id=${docId}`);
      console.log("Fetched Data:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (category && id) {
      fetchQuery(category, id);
    }
  }, [category, id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-black dark:text-white">
    {/* Banner and Profile Section */}
    <div className="relative">
      {/* Banner Image */}
      <div className="h-48 w-full overflow-hidden">
        <img 
        src={user?.coverPhotoUrl || ""}
          // src="/api/placeholder/1200/300"
          alt="Profile banner"
          className="w-full h-full object-cover bg-gray-600"
        />
      </div>
      
      {/* Notification Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
          < FaBell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
          <FaEdit className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      
      {/* Profile Picture */}
      <div className="absolute -bottom-16 left-8">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <img
            src={ user?.profilePhotoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"}
            alt="Profilepicture"
            className="w-full h-full object-cover bg-orange-200"
          />
        </div>
      </div>
    </div>

    {/* Profile Info Section */}
    <div className="pt-20 px-8 pb-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">{user?.name}</h1>
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          </div>
          <p className="text-gray-600">{user?.about}</p>
          <p className="text-sm text-gray-500 mt-1"> {user?.location?.state}, {user?.location?.country} <span className="text-blue-600 cursor-pointer">Contact info</span></p>
          <p className="text-sm text-gray-500 mt-1">500+ connections</p>
        </div>

        {/* Company Logos */}
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-gray-100 rounded">
            {/* <img
              src="/api/placeholder/48/48"
              alt="Xentrix Studios"
              className="w-full h-full object-cover"
            /> */}
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded">
            {/* <img
              src="/api/placeholder/48/48"
              alt="WIZTOONZ"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="px-4 py-1 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
          Connect
        </button>
        <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors">
          Message
        </button>
        <button className="px-4 py-1 border border-gray-400 text-gray-600 rounded-full font-medium hover:bg-gray-50 transition-colors">
          More
        </button>
      </div>

      {/* About Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">About</h2>
        <p className="text-gray-600">
        {user?.about}
        </p>
      </div>
    </div>
  </div>
  );
};

export default UserProfilePage;
