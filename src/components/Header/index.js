import React from 'react';

import Search from '../Search';

import { MdAccountCircle, MdExpandMore, MdMenu } from 'react-icons/md';
import './styles.css';

const Header = () => {

    const user = {
        name: localStorage.getItem('USER_NAME'),
        id: localStorage.getItem('USER_ID')
    }

    function handleSideNav(){
        const container = document.querySelector('.grid-container')
        console.log(container)
        container.classList.toggle('w-sidenav')
    }

    return (
        <header className="header">
            <MdMenu size={25} onClick={handleSideNav}/>

            <Search placeholder="buscar por posts..." />

                <div className="login">
                    <MdAccountCircle size={24} />
                    <span>{user ? user.name : 'nome do usuário'}</span>
                <MdExpandMore size={18} />
                </div>

        </header>
    );
}

export default Header;
