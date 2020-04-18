import React, { useState, useEffect } from 'react';
import {FiMoreHorizontal, FiClock} from 'react-icons/fi';
import api from '../../../services/api';

import './styles.css'

const Posts = () => {

    
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        api.get('posts')
            .then(res => setPosts(res.data))

    }, [posts]);

    return (
        <div className="posts-container">
            {posts.map( post => (

                <div className="post-card" key={post._id}>
                    <div className="post-header">
                        <FiMoreHorizontal />
                        <h2>{post.title}</h2>
                        <small className="category">{post.category.name}</small>
                        <br/>
                        <small><FiClock /> {post.date}</small>
                    </div>
                    <div className="post-body">
                        <p>{post.content}</p>
                    </div>
                    <div className="post-footer">
                        <small>{post.slug}</small>
                        <small>Nome do autor</small>
                    </div>
                </div>

            ))}

        </div>
    );
}

export default Posts;
