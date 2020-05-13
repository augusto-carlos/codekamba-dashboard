import React, { useState, useEffect } from 'react';
import alertify from 'alertifyjs';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';

import '../alertify.min.css';
import imgPost from '../../../assets/img-posts.jpg'

const NewPost = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');

    const [categories, setCategories] = useState([]);

    const history = useHistory()

    useEffect(() => {

        api.get('categories')
            .then(res => setCategories(res.data))

    }, []);

    function handleAddPost(e) {
        e.preventDefault()
        const category = e.target.category.value

        api.post('posts', { title, slug, content, category })

        alertify.success("Post adicionado com sucesso!");

        history.goBack()

    }

    return (
        <div>

            <div className="add-post-container">
                <section className="add-post-info">
                <Link to="/posts" className="button btn-back"><FiArrowLeft /> Voltar</Link>
                    <h2>Adicione um novo post ao blog</h2>
                    <small>Lorem ipsum, dolor assumenda!</small>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eaque nemo eius vel voluptates eligendi voluptate autem aperiam illo totam in minima quos repellendus molestiae.</p>
                </section>

                <div className="add-post-body">

                    <form onSubmit={handleAddPost}>
                        <label htmlFor="title">Título</label>
                        <input
                            name="title"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <div className="input-group">

                            <section>
                                <label htmlFor="slug">Slug</label>
                                <input
                                    name="slug"
                                    type="text"
                                    onChange={e => setSlug(e.target.value)}
                                    />
                            </section>

                            <section>
                                <label htmlFor="category">Categoria</label>
                                <select name="category"  width="20px">
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </select>
                            </section>

                        </div>

                        <label htmlFor="content">Conteúdo</label>
                        <textarea
                            name="content"
                            rows="7"
                            onChange={e => setContent(e.target.value)}>
                        </textarea>

                        <button>Publicar</button>
                    </form>

                </div>
            </div>

        </div>
    );
}

export default NewPost;
