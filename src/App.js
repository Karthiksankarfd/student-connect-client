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
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from './pages/Profile';
import ModalContextProvider from './context/ModalContext';
import PostUploadDatacontext from "./context/PostUploadDatacontext";
import IndexPage from './pages/IndexPage';
import Community from './pages/Community';
import Events from './pages/Events';
import EventDetailPage from './pages/EventDetailPage';
import MentorshipPage from './pages/MentorshipPage';
import EventDetailContext from './context/EventDetailContext';
import MentorsListPage from './pages/MentorsListPage';
import OppurtunityPage from './pages/OppurtunityPage';
import ScholarshipPage from './pages/ScholarShipPage';
import IndexPageOfOppurtunity from './pages/IndexPageOfOppurtunity';
import UserLoggedInContextProvider from './context/UserLoggedInContext';
import PostContextProvider from './context/PostContext';
import ProtectedComponent from './context/ProtectedComponent';
import SearchContextProvider from './context/searchContext';
import SearchResultsPage from "./pages/SearchResultsPage"
// import { SpeedInsights } from "@vercel/speed-insights/react"
import Results from './components/SearchResultsPageComponents/Results';
import UserProfilePage from './components/SearchResultsPageComponents/UserProfilePage';
import ChatUserList from './components/ChatComponent/ChatUserList';
// import ChatUserList from './components/ChatComponent/ChatUserList';

function App() {
  function checkNetworkConnection() {
    let rtt = navigator.connection.rtt
    if (rtt === 0) {
      return window.alert("Please connect to network and try again")
    }
  }
  useEffect(() => {
    checkNetworkConnection()
  }, [])



  return (
    <UserLoggedInContextProvider>
      <GoogleOAuthProvider clientId="1069161712161-81cigu02ov4da1jf6ku1bni0a4v5m696.apps.googleusercontent.com">
        <SearchContextProvider>
          <PostContextProvider>
            <EventDetailContext>
              <PostUploadDatacontext>
                <ModalContextProvider>
                  <SignupContextProvider>
                    <div className="App " >
                      {/* <SpeedInsights /> */}
                      <Routes>
                            <Route path="/" element={<WelcomePage />} />
                            {/* Parent Route */}
                            <Route path="/stntcnthome" element={<HomePage />}>
                                  {/* <ProtectedComponent></ProtectedComponent> */}
                                  <Route index element={<IndexPage />} />
                                  <Route path="/stntcnthome/profile" element={<Profile />} />
                                  <Route path="/stntcnthome/community" element={<ProtectedComponent>
                                    <ChatUserList/>
                                    </ProtectedComponent>} />
                                  <Route path="/stntcnthome/mentorship" element={<MentorshipPage />} />

                                  <Route path="/stntcnthome/Opportunities" element={<OppurtunityPage />}>
                                        <Route index element={<IndexPageOfOppurtunity />} />
                                        <Route path="/stntcnthome/Opportunities/scholarships" element={<ScholarshipPage />} />
                                  </Route>

                                  <Route path="/stntcnthome/mentorship/mentorlist" element={<MentorsListPage />} />
                                  <Route path="/stntcnthome/events" element={<Events />} >
                                  </Route>
                                  {/* <Route path ="/stnstcnthome/events/:id" elements = {<EventDetailPage/>} /> */}
                                  {/* <Route path ="detail" element = {<EventDetail/>} /> */}
                                  <Route path="/stntcnthome/events/detail" element={<EventDetailPage />} />
                                  {/* /stntcnthome/searchresultpage/search?keyword=k */}
                                  <Route path='/stntcnthome/searchresultpage/search' element={<SearchResultsPage />}>
                                    <Route index element={<Results />} />
                                  </Route>
                                  <Route path='/stntcnthome/view_user_profile' element={<UserProfilePage />} />
                            </Route>
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
        </SearchContextProvider>
      </GoogleOAuthProvider>
    </UserLoggedInContextProvider>
  );
}

export default App;
