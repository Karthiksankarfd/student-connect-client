import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import EventCard from "../components/EventCard";
import events from "../MockDatas/events";
import { UserLoggedInStateContext } from "../context/UserLoggedInContext";
import useFetchPost from "../hooks/useFetchPost";
import { PostContext } from "../context/PostContext";
import PostContainer from "../components/Post/PostContainer";
import PostCardSkeleton from "../components/Post/PostCardSkeleton";
import AppSkeleton from "../SKELETONLOADERS/AppSkeleton";
import { ModalContext } from "../context/ModalContext";

const IndexPage = () => {
  const { fetchFeeds } = useFetchPost();
  const { posts } = useContext(PostContext);
  const { loggedInuser, loading } = useContext(UserLoggedInStateContext);
  const [isDummyLoading, setIsDummyLoading] = useState(false);
  const { setIsUploadModal, setIsModalActive } = useContext(ModalContext);

  const handleLogin = () => {
    setIsDummyLoading(true);
    // Simulate a login process (e.g., API call)
    setTimeout(() => {
      setIsDummyLoading(false);
      //alert("Login Successful!"); // Replace with your post-login logic
    }, 2000); // Adjust the timeout as needed
  };

  useEffect(() => {
    handleLogin();
    fetchFeeds();
  }, []);

  return (
    <>
      {isDummyLoading ? (
        <AppSkeleton />
      ) : (
        <section className="flex justify-center">
          <div className="grid grid-cols-12  gap-7 lg:mt-5  md:mx-[calc(100%-90%)]">
            {/* Sidebar/User Profile Section */}
            <aside className="col-span-full hidden md:block lg:col-span-3 h-dvh overflow-y-scroll">
              <div className="p-3 mb-5 bg-white dark:bg-black dark:text-white shadow-lg rounded-lg">
                <button className="float-right" title="Edit Profile">
                  <FaEdit />
                </button>
                <img
                  src={loggedInuser?.profilePhotoUrl}
                  alt="profile"
                  className={`${
                    loggedInuser?.story
                      ? "border-4 border-blue-500"
                      : "border-none"
                  } rounded-full h-16 w-16 object-cover`}
                />
                <div className="mt-3">
                  <h3 className="text-2xl font-semibold">
                    {loggedInuser?.name}
                  </h3>
                  <p className="text-sm font-semibold">{loggedInuser?.email}</p>
                  <Link
                    to={loggedInuser?.portfolioUrl}
                    target="_blank"
                    className="text-xs font-semibold hover:underline underline-offset-2 text-blue-500"
                  >
                    {loggedInuser?.portfolioUrl}
                  </Link>
                  <div className="flex my-2">
                    <Link
                      className="text-xs text-blue-500 mr-3"
                      title="This shows how many users are following your profile "
                    >
                      Followers {loggedInuser?.followers?.length || 0}
                    </Link>
                    <Link className="text-xs text-blue-500">
                      Following {loggedInuser?.following?.length || 0}
                    </Link>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <button className="border-2 border-blue-500 rounded-full py-1 px-3 text-xs">
                      Follow
                    </button>
                    <button className="border-2 border-blue-500 rounded-full py-1 px-3 text-xs">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <Sidebar />
            </aside>

            {/* Posts Section */}
            <main className="col-span-12 lg:col-span-6 h-dvh overflow-y-scroll">
              <div className="my-5">
                <input
                  type="text"
                  placeholder="What is on your mind?"
                  className="w-full bg-transparent border-2 rounded-full border-gray-600 focus:border-purple-600 outline-none py-2 px-4"
                />
                <div className="flex justify-around bg-white dark:bg-black mt-5 py-3 rounded-xl">
                  {["Media", "Post", "Story"].map((text, index) => (
                    <button
                      onClick={() => {
                        setIsUploadModal(true);
                        setIsModalActive(true);
                      }}
                      key={index}
                      className="border-2 border-[#0057FF] dark:text-white text-black py-2 px-5 rounded-full text-xs hover:bg-[#0057FF] hover:text-white transition-all"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
              {posts ? <PostContainer /> : <PostCardSkeleton />}
            </main>

            {/* Events Section */}
            <aside className="col-span-12 lg:col-span-3 hidden lg:block">
              <div className="h-96 bg-white dark:bg-black rounded-lg overflow-y-scroll flex flex-col gap-5">
                <h4 className="text-center sticky top-0 bg-white dark:bg-black text-black dark:text-white py-2">
                  Upcoming Events
                </h4>
                <div
                  behavior="scroll"
                  direction="up"
                  className="w-fit animate-scrollY"
                  scrollamount="6"
                >
                  {events.map((event, index) => (
                    <Link key={index} to="events">
                      <EventCard
                        image={event.image}
                        name={event.name}
                        eventDescription={event.description}
                        venue={event.venue}
                        time={event.time}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}
    </>
  );
};

export default IndexPage;
