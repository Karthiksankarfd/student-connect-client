import React, { useContext, useEffect } from "react";
import { UserLoggedInStateContext } from "../../context/UserLoggedInContext";
import API from "../../services/API";

const ChatUserList = ({ users }) => {
    const {isLoggedIn} = useContext(UserLoggedInStateContext)
    const fetchUsers = async ()=>{
  
       if(!isLoggedIn){
            return alert("Please login to view your chat")
       }

        try{
           const fetchUser = await API.get("/fetchusers")
           console.log(fetchUser.data)
        }catch(e){
            console.log(e,"Error fetching chat users")
        }
    }

    useEffect(()=>{
        // fetchUsers()
    },[])
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">Chats</h2>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li
            key={user?.id}
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md"
          >
            <img
              src={user?.profilePhotoUrl}
              alt={user?.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="text-gray-800 font-medium">{user?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatUserList;
