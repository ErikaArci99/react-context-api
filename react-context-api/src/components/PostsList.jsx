import React, { useContext, useEffect } from 'react';
import { PostContext } from '../context/PostContext';
import PostCard from './PostCard';
import { useAlertContext } from '../context/AlertContext';
import Alert from './Alert';

const PostsList = () => {
    const posts = useContext(PostContext);
    const { setAlertData } = useAlertContext();

    useEffect(() => {
        setAlertData({ type: "success", message: "Nuovi Post Disponibili" })
    }, [])

    return (
        <div className="row">
            <div className="col-12">
            </div>
            {posts.map(post => (
                <div className="col-md-6 mb-4" key={post.id}>
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
};

export default PostsList;