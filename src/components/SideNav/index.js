import React from 'react';
import { TiUserOutline, TiBookmark, TiHome,  TiMessage } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';

import { GoSettings, GoRepo } from 'react-icons/go';
import { FiGrid, FiActivity } from 'react-icons/fi';

import './styles.css'

const SideNav = () => {
    return (
        <aside className="sidenav">
            <div className="logo-container">
                <h3><GoSettings /> Dashboard</h3>
            </div>

            <ul>
                <h4>Blog</h4>
                
                <li>
                    <NavLink to="/home" activeClassName="aside-item-actived">
                        <TiHome size={18} />
                        <label>Home</label>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/posts" activeClassName="aside-item-actived">
                        <TiBookmark size={18} />
                        <label>Postagens</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/categorias" activeClassName="aside-item-actived">
                        <FiGrid/>
                        <label>Categorias</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/comentarios" activeClassName="aside-item-actived">
                        <TiMessage size={18} />
                        <label>Comentários</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/usuarios" activeClassName="aside-item-actived">
                        <TiUserOutline size={18} />
                        <label>Usuários</label>
                    </NavLink>
                </li>
            </ul>

            <ul>
                <h4>Dashboard</h4>
  
                <li>
                    <NavLink to="/blog-servicos" activeClassName="aside-item-actived">
                        <FiActivity size={18} />
                        <label>Serviços</label>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/repositorios" activeClassName="aside-item-actived">
                        <GoRepo size={18} />
                        <label>Repositórios</label>
                    </NavLink>
                </li>

            </ul>
        
        </aside>
    );
}

export default SideNav;
