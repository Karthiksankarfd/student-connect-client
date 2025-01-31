import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StepOneEmail from './components/signup/StepOneEmail';
import StepTwoPassword from './components/signup/StepTwoPassword';
import InterestedIn from './components/signup/InterestedIn';
import PersonalInformation from './components/userdatailscomponents/PersonalInformation';
import SignupContextProvider from './context/SignupContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import MainLayout from './pages/MainLayout';
import NavbarVertical from './components/NavbarVertical';
import PostUploadModal from './components/Modal/PostUploadModal';
import ModalContextProvider from './context/ModalContext';
import PostUploadDatacontext from "./context/PostUploadDatacontext";
import NotificationPage from './pages/NotificationPage';
import IndexPage from './pages/IndexPage';
import Community from './pages/Community';
import Events from './pages/Events';
import EventDetailPage from './pages/EventDetailPage';
import MentorshipPage from './pages/MentorshipPage';
import EventDetail from './components/Events/EventDetail';
import EventDetailContext from './context/EventDetailContext';
import MentorsListPage from './pages/MentorsListPage';
import OppurtunityPage from './pages/OppurtunityPage';
import ScholarshipPage from './pages/ScholarShipPage';
import IndexPageOfOppurtunity from './pages/IndexPageOfOppurtunity';
import UserLoggedInContextProvider from './context/UserLoggedInContext';
import PostContextProvider from './context/PostContext';
function App() {
  // function checkNetworkConnection(){
  //    let rtt = navigator.connection.rtt
  //    if(rtt === 0){
  //     window.alert("Please connect to network")
  //    }
  //    return window.alert("Back to online")
  // }
  // useEffect(()=>{
  //   checkNetworkConnection()
  // },[])
  
  return (
    <GoogleOAuthProvider clientId="1069161712161-81cigu02ov4da1jf6ku1bni0a4v5m696.apps.googleusercontent.com">
            <UserLoggedInContextProvider>
              <PostContextProvider>
                <EventDetailContext>
                  <PostUploadDatacontext>
                    <ModalContextProvider>
                        <SignupContextProvider>
                          <div className="App " >
                            <Routes>
                              <Route path="/" element={<WelcomePage />} />
                              {/* Parent Route */}
                              <Route path="/stntcnthome" element={<HomePage />}>
                                    <Route index element={<IndexPage/>}/>
                                    <Route path="/stntcnthome/profile" element={<Profile/>} />
                                    <Route path="/stntcnthome/community" element={<Community/>} />
                                    <Route path="/stntcnthome/mentorship" element = {<MentorshipPage/>}/>
                                    <Route path="/stntcnthome/Opportunities" element={<OppurtunityPage/>}>
                                        <Route index element={<IndexPageOfOppurtunity/>}/>
                                        <Route path="/stntcnthome/Opportunities/scholarships" element={<ScholarshipPage/>}/>
                                    </Route> 
                                    <Route path="/stntcnthome/mentorship/mentorlist" element = {<MentorsListPage/>}/>
                                    <Route path="/stntcnthome/events" element={<Events/>} > 
                              </Route>
                                  
                  
                                        {/* <Route path ="/stnstcnthome/events/:id" elements = {<EventDetailPage/>} /> */}
                                        {/* <Route path ="detail" element = {<EventDetail/>} /> */}
                                  
                                    <Route path ="/stntcnthome/events/detail" element = {<EventDetailPage/>} />
                              </Route>
                              {/* <Route path="/stntcnthome" element={<MainLayout />}>
                                      <Route index element={<HomePage/>}/>
                                      <Route path="/stntcnthome/notifications" element={<NotificationPage/>} />
                              </Route> */}
                              {/* Nested Profile Route */}
                              <Route path="/emaillogin" element={<LoginPage />} />
                              <Route path="/signup" element={<StepOneEmail />} />
                              <Route path="/signuppassword" element={<StepTwoPassword />} />
                              <Route path="/areasinterestedin" element={<InterestedIn />} />
                              <Route path="/profileUpload" element={<PersonalInformation />} />
                            </Routes>
                          </div>
                        </SignupContextProvider>
                    </ModalContextProvider>
                </PostUploadDatacontext>
            </EventDetailContext>
      </PostContextProvider>
      </UserLoggedInContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
