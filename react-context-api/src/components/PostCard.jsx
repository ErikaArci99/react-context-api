import React from 'react';

const PostCard = ({ post }) => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <p className="text-muted fst-italic">Categoria: {post.category}</p>
            </div>
        </div>
    );
};

export default PostCard;