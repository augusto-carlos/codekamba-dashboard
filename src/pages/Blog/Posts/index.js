import React, { useState, useEffect } from 'react';
import { FiTrash, FiClock, FiX } from 'react-icons/fi';
import { GoSearch, GoPlus } from 'react-icons/go';
import api from '../../../services/api';
import alertify from 'alertifyjs';

import './styles.css'
import './alertify.min.css';

const Posts = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        api.get('posts')
            .then(res => setPosts(res.data))

        api.get('categorias')
            .then(res => setCategories(res.data))

    }, [posts]);

    function handleModalAddPost() {
        const modal = document.getElementById("modal-post")

        modal.style.display = modal.style.display === 'none' ? 'block' : 'none'
    }

    function handleAddPost(e) {
        e.preventDefault()

        api.post('posts', { title, slug, content, category })
            .then(() => {
                alertify
                    .alert("Post adicionado com sucesso!", function () {
                        alertify.message('OK');
                    })
            })

    }

    async function handleDeletePost(id) {
        try {
            await api.delete(`posts/${id}`)
            setPosts(posts.filter(post => post._id !== id));
        } catch (error) {

        }
    }

    return (

        <div className="content">

            <div className="posts-header">
                <button onClick={handleModalAddPost}><GoPlus /> Adicionar</button>
                <form>
                    <div className="search">
                        <input type="search" /> <GoSearch />
                    </div>
                </form>
            </div>

            <div className="posts-container">

                {posts.map(post => (

                    <div className="post-card" key={post._id}>
                        <div className="post-card-header">
                            <FiTrash onClick={() => handleDeletePost(post._id)} />
                            <small className="category">{post.category.name}</small>
                            <h2>{post.title}</h2>
                            <small><FiClock /> {post.date}</small>
                        </div>
                        <div className="post-card-body">
                            <p>{post.content}</p>
                        </div>
                        <div className="post-card-footer">
                            <small>{post.slug}</small>
                            <small>Nome do autor</small>
                        </div>
                    </div>

                ))}

                <div className="modal-add-post" id="modal-post">
                    <div className="modal-add-post-header">
                        <FiX onClick={handleModalAddPost} />
                        <h4>Adicionar novo post</h4>
                    </div>
                    <div className="modal-add-post-body">
                        <form onSubmit={handleAddPost}>
                            <label>Título</label>
                            <input
                                type="text"
                                onChange={e => setTitle(e.target.value)}
                            />

                            <label>Categoria</label>
                            <select onChange={e => setCategory(e.target.value)} >
                                {categories.map(category => (
                                    <option value={category._id}>{category.name}</option>
                                ))}
                            </select>

                            <label>Slug</label>
                            <input type="text" onChange={e => setSlug(e.target.value)} />

                            <label>Conteúdo</label>
                            <textarea rows="7" onChange={e => setContent(e.target.value)}></textarea>

                            <button>Publicar</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Posts;
