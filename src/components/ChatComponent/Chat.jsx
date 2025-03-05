// import { useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { UserLoggedInStateContext } from '../../context/UserLoggedInContext';

// const socket = io("http://localhost:5000", {
//     //transports: ["websocket","polling"], // Prevents polling issues
// });

// function Chat() {
//     const{loggedInuser} = useContext(UserLoggedInStateContext);
//     const user = {name:loggedInuser.name};
    
//     // const [message, setMessage] = useState("");
//     const [message, setMessage] = useState({newMessage:"", user});

//     const [messages, setMessages] = useState([]); // this for getting the message from the server

//     // Register the user
//     socket.emit("register", user);

//     useEffect(() => {
//         // this updates the chat history when ever any the sendMessage event happens ...
//         socket.on("receiveMessage", (msg) => {   
//             setMessages((prevMessages) => [...prevMessages, msg]);
//         });

//         return () => socket.off("receiveMessage"); // Cleanup on unmount

//     }, []);

//     // 
//     const sendMessage = () => {
//         // if (message.newMessage.trim()) {
//             socket.emit("sendMessage", (message));
//             setMessage((prevMsg)=>({...prevMsg, newMessage:"", user }))
//         // }
//     };

//     return (
//         <div>
//             <h2>Chat</h2>
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index}  className="bg-gray-500 p-1 mb-3  w-fit flex flex-col items-start"> <p>{msg.newMessage}</p><p className="text-xs text-white " key={index}> from {msg?.user?.name}</p></div>
//                 ))}
//             </div>

//             <input 
//                 type="text" 
//                 value={message.newMessage} 
//                 onChange={(e) => setMessage((prevMsg)=>({...prevMsg, newMessage:e.target.value, user }))} 
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// }

// export default Chat;
