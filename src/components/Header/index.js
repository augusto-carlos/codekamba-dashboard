import React from 'react';

import { MdAccountCircle } from 'react-icons/md';
import './styles.css';

const Header = () => {

    const user = {
        name: localStorage.getItem('USER_NAME'),
        id: localStorage.getItem('USER_ID')
    }

    return (
        <header className="header">

                <div className="login">
                    <MdAccountCircle size={24} />
                    <span>{user ? user.name : 'nome do usuário'}</span>
                </div>

        </header>
    );
}

export default Header;
