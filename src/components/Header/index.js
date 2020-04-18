import React from 'react';
import { MdAccountCircle, MdSearch, MdExpandMore, MdApps } from 'react-icons/md';
import './styles.css';



const Header = () => {

    const user = {
        name: localStorage.getItem('userName'),
        id: localStorage.getItem('userId')
    }

    return (
        <header className="header">

        
            <div className="login">
                <MdAccountCircle size={24} />
                <span>{user ? user.name : 'nome do usuário'}<MdExpandMore /></span>
            </div>

        </header>
    );
}

export default Header;
