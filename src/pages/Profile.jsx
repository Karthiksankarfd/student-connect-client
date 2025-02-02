import React, { useContext } from 'react';
import { UserLoggedInStateContext } from '../context/UserLoggedInContext';
import { Link } from 'react-router-dom';

import { FaEdit } from 'react-icons/fa';

const Profile = () => {

  const { loggedInuser, isLoggedIn } = useContext(UserLoggedInStateContext);

  return (
    <>
      {isLoggedIn ? (
        <section className="profilesection p-5 h-fit grid grid-cols-12 gap-y-5 gap-x-5">
          {/* User Basic Info */}
          <div className="user_basic_info_container_main p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg w-full rounded-lg lg:col-span-3 col-span-12">
            <button className="float-right" title="Edit Profile">
              <FaEdit />
            </button>
            <img
              src={loggedInuser?.profilePhotoUrl || 'https://via.placeholder.com/150'}
              className={`${
                loggedInuser?.story ? 'border-4 border-blue-500' : 'border-none'
              } rounded-full h-16 w-16 object-cover`}
              alt="profile"
            />
            <div className="name_and_bio">
              <p className="text-xl font-semibold">{loggedInuser?.name || 'User Name'}</p>
              <p className="email text-sm font-light">{loggedInuser?.email || 'No email provided'}</p>
              {loggedInuser?.portfolioUrl && (
                <Link
                  target="blank"
                  className="text-xs font-semibold hover:underline underline-offset-2 text-blue-500"
                >
                  {loggedInuser?.portfolioUrl}
                </Link>
              )}
              <div className="flex my-2">
                <Link className="text-xs text-blue-500 mr-3">
                  Followers {loggedInuser?.followers?.length || 0}
                </Link>
                <Link className="text-xs text-blue-500">
                  Following {loggedInuser?.following?.length || 0}
                </Link>
              </div>

              <div className="flex gap-x-5">
                <Link className="border-2 border-blue-500 rounded-full py-1 px-2 text-xs">
                  Follow
                </Link>
                <Link className="border-2 border-blue-500 rounded-full py-1 px-2 text-xs">
                  Message
                </Link>
              </div>
            </div>
          </div>

          {/* About and Bio */}
          <div className="user_bio_about__container_main p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg w-full rounded-lg lg:col-span-6 col-span-12 grid grid-flow-row gap-y-2">
            <div>
              <button className="float-right" title="Edit Profile">
                <FaEdit />
              </button>
              <h3 className="font-semibold">About</h3>
              <p id="about" className="text-xs">
                {loggedInuser?.about || 'No about info provided'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Bio</h3>
              <p className="bio text-xs">
                {loggedInuser?.bio || 'No bio info provided'}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="links p-3 shadow-lg bg-white text-black dark:bg-black dark:text-white rounded-lg lg:col-span-3 col-span-12">
            <h3 className="font-semibold">Links</h3>
            <div>
              {loggedInuser?.links?.length > 0 ? (
                loggedInuser.links.map((link, index) => (
                  <Link
                    key={index}
                    target="blank"
                    title={link}
                    className="text-xs font-semibold hover:underline underline-offset-2 text-blue-500"
                  >
                    {link}
                  </Link>
                ))
              ) : (
                <p className="text-xs">No links provided... add info</p>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg rounded-lg lg:col-span-4 col-span-12">
            <h3 className="font-semibold">Skills</h3>
            <ul className="skills flex gap-x-3 flex-wrap">
              {loggedInuser?.skills?.length > 0 ? (
                loggedInuser.skills.map((skill, index) => (
                  <li key={index} className="text-xs">
                    {skill}
                  </li>
                ))
              ) : (
                <p className="text-xs">No skills info provided... add info</p>
              )}
            </ul>
          </div>

          {/* Tools */}
          <div className="p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg rounded-lg lg:col-span-4 col-span-12">
            <h3 className="font-semibold">Tools</h3>
            <ul className="tools flex gap-x-3 flex-wrap">
              {loggedInuser?.tools?.length > 0 ? (
                loggedInuser.tools.map((tool, index) => (
                  <li key={index} className="text-xs">
                    {tool}
                  </li>
                ))
              ) : (
                <p className="text-xs">No tools info provided... add info</p>
              )}
            </ul>
          </div>

          {/* Interested In */}
          <div className="p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg rounded-lg lg:col-span-4 col-span-12">
            <h3 className="font-semibold">Interested In</h3>
            <ul className="tools flex gap-x-3 flex-wrap">
              {loggedInuser?.areasInterestedIn?.length > 0 ? (
                loggedInuser.areasInterestedIn.map((area, index) => (
                  <li key={index} className="text-xs">
                    {area}
                  </li>
                ))
              ) : (
                <p className="text-xs">No info provided... add info</p>
              )}
            </ul>
          </div>

          {/* Posts */}
          {/* <div className="posts rounded-lg grid gap-y-5 col-span-12">
            <h3 className="font-semibold">Posts</h3>
            {loggedInuser?.posts?.length > 0 ? (
              loggedInuser.posts.map((post, index) => (
                <PostCard {...post} />
              ))
            ) : (
              <p className="text-xs">No posts to display</p>
            )}
          </div> */}
        </section>
      ) : (
        <p  className="text-center text-xl h-dvh">Please log in to view the profile.</p>
      )}
    </>
  );
};

export default Profile;
