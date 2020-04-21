import React, { useState, useEffect } from 'react';
import alertify from 'alertifyjs';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../../services/api';

import './alertify.min.css';

const NewPost = () => {

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');

    const [categories, setCategories] = useState([]);

    const history = useHistory()

    useEffect(() => {

        api.get('categorias')
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

            <div className="container-add-post">
                <Link to="/posts" className="button"><FiArrowLeft/> Voltar</Link>
                <div className="container-add-post-header">
                    <h3>Adicionar novo post</h3>
                </div>
                <div className="container-add-post-body">
                    <form onSubmit={handleAddPost}>
                        <label>Título</label>
                        <input
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <div className="input-group">

                            <section>
                                <label>Categoria</label>
                                <select name="category">
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </select>
                            </section>
                            <section>
                                <label>Slug</label>
                                <input type="text" onChange={e => setSlug(e.target.value)} />
                            </section>

                        </div>

                        <label>Conteúdo</label>
                        <textarea rows="7" onChange={e => setContent(e.target.value)}></textarea>

                        <button>Publicar</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default NewPost;
