import React, { useContext } from 'react';
import { UserLoggedInStateContext } from '../context/UserLoggedInContext';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import EditProfileModal from '../components/Modal/EditProfileModal';
import { ModalContext } from '../context/ModalContext';

const Profile = () => {

  const { loggedInuser, isLoggedIn } = useContext(UserLoggedInStateContext);
  const{openEditProfileModal,closeEditProfileModal,isEditProfileModalOpen } = useContext(ModalContext)
  // var isOpen = false ;
  return (
    <>
      {isLoggedIn ? (
        <section className="profilesection p-5 h-fit grid grid-cols-12 gap-y-5 gap-x-5">
          {/* User Basic Info */}
          <div className="user_basic_info_container_main p-3 bg-white text-black dark:bg-black dark:text-white shadow-lg w-full rounded-lg lg:col-span-3 col-span-12">
            <button className="float-right" title="Edit Profile">
              <FaEdit onClick={openEditProfileModal}/>
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

              {/*  */}
              <div className="flex my-2">
                <Link className="text-xs text-blue-500 mr-3">
                  Followers {loggedInuser?.followers?.length || 0}
                </Link>
                <Link className="text-xs text-blue-500">
                  Following {loggedInuser?.following?.length || 0}
                </Link>
              </div>
{/* 
              <div className="flex gap-x-5">
                <Link className="border-2 border-blue-500 rounded-full py-1 px-2 text-xs">
                  Follow
                </Link>
                <Link className="border-2 border-blue-500 rounded-full py-1 px-2 text-xs">
                  Message
                </Link>
              </div> */}
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

      {isEditProfileModalOpen && 
      <EditProfileModal  user = {loggedInuser} onClose={closeEditProfileModal}/>}
    </>
  );
};

export default Profile;



// import React, { useContext } from 'react';
// import { UserLoggedInStateContext } from '../context/UserLoggedInContext';
// import { Link } from 'react-router-dom';
// import { FaEdit } from 'react-icons/fa';
// import EditProfileModal from '../components/Modal/EditProfileModal';
// import { ModalContext } from '../context/ModalContext';

// const Profile = () => {
//   const { loggedInuser, isLoggedIn } = useContext(UserLoggedInStateContext);
//   const { openEditProfileModal, closeEditProfileModal, isEditProfileModalOpen } = useContext(ModalContext);

//   return (
//     <>
//       {isLoggedIn ? (
//         <section className="profilesection p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left Column - Profile Info */}
//           <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg text-center">
//             <div className="relative inline-block">
//               <img
//                 src={loggedInuser?.profilePhotoUrl || 'https://via.placeholder.com/150'}
//                 className="rounded-full w-24 h-24 object-cover border-4 border-blue-500"
//                 alt="profile"
//               />
//               <button 
//                 className="absolute top-0 right-0 bg-gray-800 text-white p-1 rounded-full"
//                 onClick={openEditProfileModal}
//               >
//                 <FaEdit />
//               </button>
//             </div>
//             <h2 className="text-xl font-semibold mt-3">{loggedInuser?.name || 'User Name'}</h2>
//             <p className="text-sm text-gray-500">{loggedInuser?.email || 'No email provided'}</p>
//             {loggedInuser?.portfolioUrl && (
//               <Link target="_blank" className="text-xs text-blue-500 hover:underline">
//                 {loggedInuser?.portfolioUrl}
//               </Link>
//             )}
//             <div className="flex justify-center gap-4 mt-3">
//               <Link className="text-sm text-blue-500">Followers {loggedInuser?.followers?.length || 0}</Link>
//               <Link className="text-sm text-blue-500">Following {loggedInuser?.following?.length || 0}</Link>
//             </div>
//             <div className="mt-4 flex gap-3 justify-center">
//               <button className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-xs">Follow</button>
//               <button className="border border-blue-500 text-blue-500 rounded-full px-3 py-1 text-xs">Message</button>
//             </div>
//           </div>

//           {/* Middle Column - Bio and About */}
//           <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg col-span-2">
//             <div className="mb-4">
//               <h3 className="font-semibold text-lg flex justify-between">
//                 About <FaEdit className="cursor-pointer" onClick={openEditProfileModal} />
//               </h3>
//               <p className="text-sm">{loggedInuser?.about || 'No about info provided'}</p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-lg">Bio</h3>
//               <p className="text-sm">{loggedInuser?.bio || 'No bio info provided'}</p>
//             </div>
//           </div>

//           {/* Bottom Section - Skills, Tools, Interests */}
//           <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {['Skills', 'Tools', 'Interested In'].map((section, idx) => (
//               <div key={idx} className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg">
//                 <h3 className="font-semibold text-lg">{section}</h3>
//                 <ul className="flex flex-wrap gap-2 mt-2">
//                   {(loggedInuser?.[section.toLowerCase().replace(' ', '')] || []).length > 0 ? (
//                     loggedInuser[section.toLowerCase().replace(' ', '')].map((item, index) => (
//                       <li key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
//                         {item}
//                       </li>
//                     ))
//                   ) : (
//                     <p className="text-xs text-gray-500">No {section.toLowerCase()} info provided</p>
//                   )}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </section>
//       ) : (
//         <p className="text-center text-xl">Please log in to view the profile.</p>
//       )}

//       {isEditProfileModalOpen && <EditProfileModal user={loggedInuser} onClose={closeEditProfileModal} />}
//     </>
//   );
// };

// export default Profile;

