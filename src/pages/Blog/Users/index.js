import React, { useState, useEffect } from 'react';
import { GoPlus, GoSearch, GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';
import alertify from 'alertifyjs';

import api from '../../../services/api';
import './styles.css';



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        api.get('usuarios')
            .then(res => setUsers(res.data))

    }, []);

    async function handleDeleteUser(id) {
        try {
            await api.delete(`usuarios/${id}`)
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            alertify.error("Falha ao eliminar o usuário.")
        }
    }

    return (
        <div className="content">

            <div className="users-header">
                <form>
                    <div className="search">
                        <input type="search" /> <GoSearch />
                    </div>
                </form>
                <Link to="users/new" className="button">
                    <GoPlus /> Adicionar
            </Link>
            </div>

            <div className="users-container">
                {users.map(user => (
                    <div className="user-card" key={user._id} onClick={() => handleDeleteUser(user._id)}>
                        <GoPerson />
                        <div>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
