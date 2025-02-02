import React, { useContext, useEffect } from 'react';
import PostCard from '../PostCard';
import useFetchPost from '../../hooks/useFetchPost';
import { PostContext } from '../../context/PostContext';

const PostContainer = () => {
    const { posts } = useContext(PostContext);
    const { fetchFeeds } = useFetchPost();

    useEffect(() => {
        fetchFeeds();
    }, []);

    return (
        <ul className="PostContainer">
            {posts.map((post, index) => (
                <li key={post.id || index}>
                    <PostCard {...post} />
                </li>
            ))}
        </ul>
    );
};

export default PostContainer;
