import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import { FiTrash, FiTag} from 'react-icons/fi';
import {GoPlus} from 'react-icons/go';

import api from '../../../services/api';
import Search from '../../../components/Search';
import './styles.css'

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        api.get('categories').then(res => {
            setCategories(res.data)
        })

    },[]);

    function handleDeleteCategory(id){
        try {
            api.delete(`categories/${id}`)
            setCategories(categories.filter(category => category.id !== id));
        } catch (err) {

        }
    }

    return (
        <div className="content">

            <div className="categories-header">
                <Search placeholder="buscar por categorias..." />
                <Link to="categories/new" className="button">
                    <GoPlus /> Adicionar
                </Link>
            </div>

            <div className="categories-container">

                {categories.map(category => (

                    <div className="category-card" key={category.id}>
                        <div className="category-card-header">
                            <FiTrash onClick={() => handleDeleteCategory(category.id)} />
                            <h3><FiTag /> {category.name}</h3>
                        </div>
                        <div className="category-card-body">
                            <p>{category.description.split(' ').slice(0, 50).join(' ') + '...'}</p>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    );
}

export default Categories;
