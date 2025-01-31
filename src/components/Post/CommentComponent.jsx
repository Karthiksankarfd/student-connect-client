import React, { useContext, useState } from 'react';
import { UserLoggedInStateContext } from '../../context/UserLoggedInContext';
import usePostActions from '../../hooks/usePostActions';
import { PostContext } from '../../context/PostContext';
import { FaHeart } from 'react-icons/fa';

const CommentComponent = ({ postId }) => {
    const { loggedInuser } = useContext(UserLoggedInStateContext);
    const { postComment } = usePostActions();
    const { comments } = useContext(PostContext);
    const [comment, setComment] = useState("");

    return (
        <section className='comment-section-component p-3 max-w-full overflow-hidden h-auto'>
            {/* Write comment section */}
            <form 
                className='flex justify-between gap-x-3 mb-5 items-center w-full'
                onSubmit={async (e) => { 
                    e.preventDefault(); 
                    await postComment(postId, loggedInuser._id, comment); 
                    setComment("");
                }}
            >
                <img 
                    src={loggedInuser?.profilePhotoUrl} 
                    alt='profile' 
                    className='rounded-full h-8 w-8 object-cover aspect-square' 
                />
                <input 
                    required 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    type='text' 
                    placeholder='Write a comment' 
                    className='flex-grow px-3 py-1 rounded-full border border-gray-300 bg-transparent placeholder:text-gray-500 dark:placeholder:text-white w-full focus:outline-none'
                />
                <input 
                    type='submit' 
                    className='border border-gray-300 px-4 py-2 text-sm rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700' 
                />
            </form>

            {/* Comments list */}
            <div className='comments_list w-full'>
                <div className='h-fit w-full'>
                    {comments[postId]?.comments?.length > 0 ? (
                        comments[postId]?.comments?.map((comment) => (
                            <div key={comment._id} className='mt-3 w-full'>
                                <div className='flex items-center w-full'>
                                    <img 
                                        src={comment?.author?.profilePhotoUrl} 
                                        alt='profile' 
                                        className='h-6 w-6 rounded-full object-cover mr-2' 
                                    />
                                    <span className='font-semibold text-sm truncate'>{comment?.author?.name}</span>
                                </div>
                                <p className='text-xs ml-8 whitespace-pre-line break-words w-full'>{comment?.comment}</p>
                                <div className='flex gap-3 ml-8 mt-2 text-xs'>
                                    {['Reply', <FaHeart key='heart' />].map((item, index) => (
                                        <button key={index} className='hover:underline'>{item}</button>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-xs ml-8'>No comments yet.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CommentComponent;
