import React from 'react';
import { TiUserOutline, TiBookmark, TiHome,  TiMessage, TiWeatherCloudy, TiInfoLarge, TiThLargeOutline } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';


import { GoSettings, GoPulse, GoRepo, GoGear } from 'react-icons/go';


import './styles.css'

const SideNav = () => {
    return (
        <aside className="sidenav">
            <div className="logo-container">
                <h3><GoSettings /> Codekamba</h3>
            </div>

            <ul>
                <h4>Painel Inicial</h4>
                <li>
                    <NavLink to="home" activeClassName="aside-item-actived">
                        <TiHome size={18} />
                        <label>Home</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="atalhos" activeClassName="aside-item-actived">
                        <TiThLargeOutline size={18} />
                        <label>Atalhos</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="sistema" activeClassName="aside-item-actived">
                        <GoGear size={18} />
                        <label>Sistema</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="info" activeClassName="aside-item-actived">
                        <TiInfoLarge size={18} />
                        <label>info</label>
                    </NavLink>
                </li>

            </ul>

            <ul>
                <h4>Blog</h4>
                
                <li>
                    <NavLink to="blog-performance" activeClassName="aside-item-actived">
                        <GoPulse size={18} />
                        <label>Performance</label>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="posts" activeClassName="aside-item-actived">
                        <TiBookmark size={18} />
                        <label>Postagens</label>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="comentarios" activeClassName="aside-item-actived">
                        <TiMessage size={18} />
                        <label>Comentarios</label>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="usuarios" activeClassName="aside-item-actived">
                        <TiUserOutline size={18} />
                        <label>Usuários</label>
                    </NavLink>
                </li>
            </ul>

            <ul>
                <h4>Projectos</h4>
                
                <li>
                    <NavLink to="producao" activeClassName="aside-item-actived">
                        <TiWeatherCloudy size={18} />
                        <label>Em produção</label>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="repositorios" activeClassName="aside-item-actived">
                        <GoRepo size={18} />
                        <label>Repositórios</label>
                    </NavLink>
                </li>

            </ul>
        
        </aside>
    );
}

export default SideNav;
