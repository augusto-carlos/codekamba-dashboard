import React, {useState } from 'react';
import alertify from 'alertifyjs';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../../services/api';

const NewUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

   async function handleAddUser (e) {
        e.preventDefault();
        await api.post('usuarios', { name, email, password })

        alertify.success('Usuário adicionado com sucesso!')
        history.goBack();
    }

    return (
        <div className="add-user-container">
            <Link to="/users" className="button btn-back"><FiArrowLeft /> Voltar</Link>
            <div className="add-user-container">
                <form onSubmit={handleAddUser}>
                    <input
                        type="text"
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome do usuário"
                    />
                    <input
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email do usuário"
                    />
                    <input
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha do usuário"
                    />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}

export default NewUser;
