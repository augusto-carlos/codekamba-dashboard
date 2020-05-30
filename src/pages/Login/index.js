import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import {login} from '../../services/auth';
import api from '../../services/api';

import alertify from 'alertifyjs';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('authenticate', { email, password })

            if (login(res.data.token)) localStorage.setItem('USER_ID', res.data.id)

            alertify.success('Logado com sucesso!')
            return <Redirect to="/" />

        } catch (error) {
            alertify.warning('Email ou senha incorrecta. Tente de novamente :)')
        }

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="seu email"
                    onChange={ e => setEmail(e.target.value) }
                />

                <input
                    type="password"
                    placeholder="sua senha"
                    onChange={ e => setPassword(e.target.value) }
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
