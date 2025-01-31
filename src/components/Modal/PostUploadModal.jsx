import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaNotEqual, FaUpload } from "react-icons/fa";
import upload from "../../assets/png/upload.png";
import loggedInuser from "../../MockDatas/loggedInuser";
import useUpload from "../../hooks/useUpload";
import { ModalContext } from "../../context/ModalContext";
import TaskCompletionModal from "./TaskCompletionModal";
import { PostDataContext } from "../../context/PostUploadDatacontext";

const PostUploadModal = () => {

  const {
    isUploading,
    setIsUploading,
    isUploadModal,
    setIsUploadModal,
    setIsUploaded,
    isUploaded,
    isUploadFailed,
    setIsUploadFailed,
    isModalActive,
    setIsModalActive,
  } = useContext(ModalContext);

  
  const {userId} = loggedInuser
  
  const { uploadError, uploadPostfn, handlePostfilechange,handleCaptinChange} = useUpload();

  const {postContent, setPostContent,previewUrls, } = useContext(PostDataContext)

  // whenever component unmounts we have to clear the postContent.imgae [] and urls
  useEffect(() => {
    // Cleanup function will be executed when the component unmounts
    return () => {
      setPostContent({
        images: [],
        caption:null,
        tags: null,
      });
    };
  }, []);
  // Empty dependency array means this runs only on unmount

  return (
    <>
      {isModalActive && (
        <section className="absolute modal-overlay-container top-0 w-full h-dvh bg-black/50 z-[4]">
          {isUploadModal && (
            <div className="modal-card absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full lg:w-1/2 rounded-xl -translate-y-1/2 h-5/6 z-[3] bg-white p-5 flex flex-col items-center">
              <div className="w-full header-model">
                <button
                  className="float-right text-2xl w-fit px-3 py-1 text-gray-600"
                  onClick={() => {
                    setIsUploadModal(false);
                    setIsModalActive(false);
                  }}
                >
                  <div className="h-7 w-0.5 bg-black inline-block rotate-45"></div>
                  <div className="h-7 w-0.5 bg-black inline-block -rotate-45"></div>
                </button>
                <div className="flex items-center gap-x-2 font-semibold">
                  <img
                    src={loggedInuser.profilePhotoUrl}
                    alt="profileimage"
                    className="h-14 w-14 rounded-full"
                  />
                  <span>{loggedInuser.name}</span>
                </div>
              </div>

              {!postContent.images.length && (
                <img
                  src={upload}
                  alt="png"
                  className="w-44 h-44 object-cover"
                />
              )}

              {/* Preview Section */}

              {postContent.images.length > 0 && (
                <div className="preview-container w-full overflow-x-auto flex  ">
                  {postContent.images.map((file, index) => {
                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 min-w-[150px] h-auto flex "
                      >
                        {file.type.startsWith("image/") ? (
                          // <div className="relative w-full h-auto">
                            <img
                              src={previewUrls[index]}
                              alt="Preview"
                              className="object-contain my-2 max-w-96 h-64 rounded-md border-2"
                            />
                          // </div>
                        ) : (
                          <video
                            src={previewUrls[index]}
                            controls
                            autoPlay
                            loop
                            className="h-40 w-full border border-gray-300 rounded-md object-contain"
                          ></video>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {postContent.images.length > 0 && (
                <input
                  name="caption"
                  type="text"
                  id="description"
                  className="w-full py-4 border-b-2 font-normal bg-slate-200 focus:border-black outline-none border-gray-200 mb-5 px-3 rounded-lg"
                  placeholder="Add description..."
                  value={postContent.caption}
                  onChange={handleCaptinChange}
                />
              )}

              {/* Upload Section */}
              {!postContent.images.length && (
                <div className="flex bg-blue-500 rounded-full justify-center items-center px-5 lg:w-1/2 w-full">
                  <label
                    htmlFor="StoryUpload"
                    className="flex items-center text-white font-semibold px-5 py-2 rounded-full cursor-pointer"
                  >
                    <span>Upload from device</span>
                  </label>
                  <FaUpload className="text-white ml-2" />
                  <input
                  value={postContent.images}
                    name="images"
                    multiple
                    type="file"
                    id="StoryUpload"
                    className="hidden"
                    onChange={handlePostfilechange}
                    accept="video/*,image/*"
                  />
                </div>
              )}

              {postContent.images.length > 0 && (
                <button
                  onClick={uploadPostfn}
                  className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-full w-full"
                >
                  Upload Post
                </button>
              )}
            </div>
          )}

          {isUploading && (
            <TaskCompletionModal
              task="Post Uploading"
              btnName="Done"
              png={<FaUpload size="20px" className="animate-pulse" />}
            />
          )}
          {isUploaded && (
            <TaskCompletionModal
              task="Post Upload Successful"
              btnName="Done"
              png={<FaCheck size="20px" className="animate-pulse" />}
            />
          )}
          {isUploadFailed && (
            <TaskCompletionModal
              task="Post Upload Failed"
              btnName="Retry"
              png={<FaNotEqual size="20px" className="animate-pulse" />}
              fn={() => {
                setIsUploadFailed(false);
                setIsUploadModal(true);
              }}
            />
          )}
        </section>
      )}
    </>
  );
};

export default PostUploadModal;
