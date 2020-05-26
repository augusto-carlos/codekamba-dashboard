import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import Search from '../../../components/Search'

import alertify from 'alertifyjs';

import api from '../../../services/api';
import './styles.css'
import '../alertify.min.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        api.get('posts')
            .then(res => {
                setPosts(res.data)
            })

    }, []);



    async function handleDeletePost(id) {
        try {
            await api.delete(`posts/${id}`)
            setPosts(posts.filter(post => post._id !== id));
        } catch (error) {
            alertify.error("Falha ao eliminar post.")
        }
    }

    return (

        <div className="content">

            <div className="posts-header">
                <Search placeholder="buscar por posts..."/>
                <Link to="posts/new" className="button">
                    <GoPlus /> Adicionar
                </Link>
            </div>

            <div className="posts-container">

                {posts.map(post => (

                    <div className="post-card" key={post._id}>
                        <div className="post-card-header">
                            <FiTrash onClick={() => handleDeletePost(post._id)} />
                            <small className="category">{post.category.name}</small>
                            <h3 className="text-large">{post.title}</h3>
                            <small>Por <strong>{post.author.username}</strong></small>
                        </div>
                        <div className="post-card-body">
                            <p>{post.content.split(' ').slice(0, 50).join(' ')+'...'}</p>
                        </div>
                        <div className="post-card-footer">
                            <small>{post.slug}</small>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default Posts;
