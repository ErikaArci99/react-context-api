import React, { useContext } from 'react';
import { PostContext } from '../context/PostContext';
import PostCard from './PostCard';

const PostsList = () => {
    const posts = useContext(PostContext);

    return (
        <div className="row">
            {posts.map(post => (
                <div className="col-md-6 mb-4" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;