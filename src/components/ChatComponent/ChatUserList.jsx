import React, { useContext, useEffect, useState } from "react";
import { UserLoggedInStateContext } from "../../context/UserLoggedInContext";
import API from "../../services/API";
import ChatWindow from "./ChatWindow";
// import { io } from "socket.io-client";

const ChatUserList = () => {
  const { isLoggedIn, loggedInuser } = useContext(UserLoggedInStateContext);
  const [chatUsersList, setChatUsersList] = useState(null);
  const [userInChatWindow, setUserInChatWindow] = useState(null);

  useEffect(() => {


    const fetchUsers = async () => {
      if (!isLoggedIn) {
        console.log("User not logged in, skipping API call.");
        return;
      }

      try {
        console.log("Fetching chat users...");
        const response = await API.get("/fetchusers");
        console.log("Fetched users:", response.data);
        setChatUsersList(response.data);
      } catch (e) {
        console.error("Error fetching chat users:", e);
      }
    };

    if (isLoggedIn) {
      fetchUsers();
    }

    // return () => socket.off("receiveMessage"); // Cleanup on unmount
  }, [isLoggedIn]);

  return (
    <main className="flex">
      <div className="w-full max-w-sm  shadow-lg p-4 max-h-[650px] overflow-auto relative">
        <h2 className="text-lg font-semibold mb-3 text-red-300">Chats</h2>
        <div className="community-action-btns">
          <button className="border-[#0057FF] border-2  mb-3 dark:text-white text-black  py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all delay-50">create community</button>
        </div>
        <ul className="">
          {chatUsersList?.map((user) => (
            <li
              onClick={() => setUserInChatWindow(user)}
              key={user?._id}
              className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md"
            >
              <img
                src={
                  user?.profilePhotoUrl ||
                  "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
                }
                alt={user?.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <span className="text-gray-800 dark:text-white font-medium">{user?.name}</span>
              <span>{}</span>
            </li>
          ))}
        </ul>
      </div>

      <ChatWindow {...userInChatWindow} />
    </main>
  );
};

export default ChatUserList;
