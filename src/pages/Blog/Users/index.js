import React, { useState, useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';

import api from '../../../services/api';
import './styles.css';



const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        api.get('usuarios')
            .then(res => setUsers(res.data))

    }, []);

    return (
        <div>
            <div className="last-users-container">

                {users.map(user => (
                    <div className="user-card" key={user._id}>
                        <AiOutlineUser />
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
