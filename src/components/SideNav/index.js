import React from 'react';
import { TiUserOutline, TiBookmark, TiHome, TiLockClosed, TiFlashOutline, TiDatabase } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

import { FiGrid } from 'react-icons/fi';

import './styles.css'

const SideNav = () => {
    return (
        <aside className="sidenav">
            <div className="sidenav-header">
                <h3>Dashboard</h3>
            </div>
            <ul>

                <li>
                    <NavLink to="/" exact activeClassName="aside-item-actived">
                        <TiHome size={17} />
                        <label htmlFor="#">Home</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/posts" activeClassName="aside-item-actived">
                        <TiBookmark size={17} />
                        <label htmlFor="#">Posts</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/categories" activeClassName="aside-item-actived">
                        <FiGrid />
                        <label htmlFor="#">Categorias</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/users" activeClassName="aside-item-actived">
                        <TiUserOutline size={17} />
                        <label htmlFor="#">usuários</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/login" activeClassName="aside-item-actived">
                        <TiLockClosed size={17} />
                        <label htmlFor="#">login</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/services" activeClassName="aside-item-actived">
                        <TiFlashOutline size={17} />
                        <label htmlFor="#">Serviços</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/banco" activeClassName="aside-item-actived">
                        <TiDatabase size={17} />
                        <label htmlFor="#">Banco de dados</label>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default SideNav;
