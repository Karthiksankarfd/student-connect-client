import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { UserLoggedInStateContext } from "../../context/UserLoggedInContext";
import API from "../../services/API";

const ChatWindow = ({ ...user }) => {
  const { loggedInuser } = useContext(UserLoggedInStateContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [onlineUsers, setOnlineUsers] = useState()

  const [chatHistory, setChatHistory] = useState(null)
  const socketRef = useRef(null); // Store socket instance


  // console.log(user.name)
  const getMessages = useCallback(async (senderId, receiverId) => {
    setChatHistory(null); // Optional: Reset chat while fetching
    try {
      console.log("Fetching messages for:", senderId, receiverId);
      const res = await API.get(`/messages/${senderId}/${receiverId}`);
      setMessages(res.data.messages);
      console.log(messages)
      console.log("Updated chatHistory:", res.data.messages);
    } catch (e) {
      console.error("Error fetching messages:", e);
    }
  }, []);

  useEffect(() => {
    getMessages(loggedInuser._id, user._id)
  }, [getMessages, loggedInuser._id, user._id])

  useEffect(() => {

    // Initialize socket only once
    socketRef.current = io("http://localhost:5000", {
      transports: ["websocket", "polling"], // Ensure smooth connection
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      console.log(`You are connected with id ${socket.id}`);
      // Registering user after socket connection is established
      const userToRegister = { userId: loggedInuser._id, socketId: socket.id };
      socket.emit("registerUser", userToRegister);
    });

    socket.on("online-users", (onlineUsers) => {
      setOnlineUsers(onlineUsers)
      console.log(onlineUsers)
    })

    socket.on("receiveMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup function
    return () => {
      socket.off("receiveMessage");
      socket.disconnect();
    };
  }, [loggedInuser.name, loggedInuser._id, user._id]); // Run effect when logged-in user changes

  // const sendMessage = () => {
  //   if (input.trim() === "") return;
  //   const socket = socketRef.current;

  //   const newMessage = {
  //     senderId: loggedInuser._id,
  //     receiverId: user._id,
  //     message: input,  // Ensure this is a string, not nested
  //     // timestamp: formattedTime,
  //     delivered:false
  //   };
  //   setMessages((prevMessages) => [...prevMessages, { message: newMessage }]);
  //   socket.emit("sendMessage", newMessage);
  //   setInput("");
  // };

  const sendMessage = () => {
    if (input.trim() === "") return;
    const socket = socketRef.current;
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    let meridian = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // 0 -> 12, 13 -> 1, 14 -> 2, etc.
    hours = hours.toString().padStart(2, "0"); // Ensures "09" instead of "9"

    const formattedTime = `${hours}:${minutes} ${meridian}`;
    // Fix the structure of the new message
    const newMessage = {
      senderId: loggedInuser._id,
      receiverId: user._id,
      timestamp: formattedTime,
      text: input,
      delivered: false,
    };
  
    // Update local state immediately
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  
    // Emit to the server
    socket.emit("sendMessage", newMessage);
  
    setInput("");
  };
  

  return (
    <div className="flex flex-col w-full max-w-auto h-[650px]  bg-gray-100 shadow-lg  overflow-hidden">
      {/* Header - User Info */}
      <div className="bg-blue-500 text-white flex items-center p-4">
        <img
          src={user?.profilePhotoUrl || "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <h2 className="text-lg font-semibold">{user?.name}</h2>
      </div>

      {/* Chat Messages Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white dark:bg-black/90">
        {
        messages.length > 0 ? (
          messages?.map((message, index) => {
            return <div key={index} 
            className={`text-sm rounded-lg w-fit p-2 ${message.senderId === loggedInuser._id ? 
            "text-right bg-blue-500 ml-auto text-white" : 
            "text-left bg-slate-300 mr-auto"}`}>
            {message.text } 
            <span className="text-xs ml-3">{message?.timestamp}</span>
          </div>
          
          })
        ) : (<h4 className="text-center">No chat history found</h4>)
        }
      </div>

      {/* Input and Send Button */}
      <div className="p-3 bg-gray-200 flex items-center">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
