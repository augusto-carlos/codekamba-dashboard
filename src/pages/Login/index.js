import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault()

        try {

            const res = await api.post('session', { email, password })
            localStorage.setItem('userID', res.data._id)
            localStorage.setItem('userName', res.data.name)
            history.push('/home');

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <div className="container">

                <div className="login-container">
                    <form onSubmit={handleLogin}>
                        <h3>Faça o Login</h3>

                        <input
                            type="email"
                            placeholder="seu email"
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="sua senha"
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
