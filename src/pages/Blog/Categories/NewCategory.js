import React, { useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'

import alertify from 'alertifyjs';
import api from '../../../services/api';
import './styles.css'

const NewCategory = () => {
    const history = useHistory()

    const [name, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleAddCategory(e) {
        e.preventDefault();
        try {
            api.post('categories', {
                name,
                description
            })
            history.goBack();
            alertify.success('Categoria adicionada com sucesso!')
        } catch (err) {

        }
    }

    return (
        <div className="add-category-container">

            <section className="add-category-info">
                <Link to="/posts" className="button btn-back"><FiArrowLeft /> Voltar</Link>
                <h2>Adicione uma nova categoria ao blog</h2>
                <small>Lorem ipsum, dolor assumenda!</small>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt eaque nemo eius vel voluptates eligendi voluptate autem aperiam illo totam in minima quos repellendus molestiae.</p>
            </section>

            <div className="add-category-body">
                <form onSubmit={handleAddCategory}>
                    <label htmlFor="name">Nome</label>
                    <input
                        name="name"
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <label htmlFor="description">Descrição</label>
                    <textarea
                        name="description"
                        rows="7"
                        onChange={e => setDescription(e.target.value)}>
                    </textarea>

                    <button>Publicar</button>
                </form>
            </div>

        </div>
    );
}

export default NewCategory;
