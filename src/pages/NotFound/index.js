import React from 'react';
import img404 from '../../assets/404-icon.svg';

import './styles.css'

const NotFound = () => {
    return (
        <div className="container404">
            <img src={img404} width="300px" alt="route not found"/>
            <h3>Erro 404</h3>
            <p>Página não encontrada</p>
        </div>
    );
}

export default NotFound;
