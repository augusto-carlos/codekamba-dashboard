import React from 'react';

import { MdAccountCircle, MdMenu, MdNotifications } from 'react-icons/md';
import './styles.css';

const Header = () => {

    function handleSideNav(){
        const container = document.querySelector('.grid-container')
        container.classList.toggle('w-sidenav')
    }

    return (
        <header className="header">
            <MdMenu size={23} onClick={handleSideNav}/>

            <h2>Codetrial</h2>

                <div className="login">
                    <MdNotifications size={24} />
                    <MdAccountCircle size={24} />
                </div>

        </header>
    );
}

export default Header;
