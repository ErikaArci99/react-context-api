import React from 'react';
import PostsList from './PostsList';

const PostsPage = () => {
    return (
        <div className="container py-4">
            <h1 className="mb-4">Lista dei Post</h1>
            <PostsList />
        </div>
    );
};

export default PostsPage;