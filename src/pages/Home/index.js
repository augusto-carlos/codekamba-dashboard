import React from 'react';

import { TiMessage, TiUserOutline, TiBookmark, TiHeartOutline } from 'react-icons/ti';

import './styles.css'
import imgHome from '../../assets/img-home.svg'
import imgHome2 from '../../assets/img-home2.svg'
import imgHome3 from '../../assets/img-home3.svg'

export default function Home() {

    return (
        <div>

            <div className="status-container">
                <div className="status-card">
                    <TiBookmark />
                    <div className="status-card-text">
                        <h6>576</h6>
                        <small>Postagens</small>
                    </div>
                </div>


                <div className="status-card">
                    <TiMessage />
                    <div className="status-card-text">
                        <h6>576</h6>
                        <small>Comentários</small>
                    </div>
                </div>


                <div className="status-card">
                    <TiUserOutline />
                    <div className="status-card-text">
                        <h6>576</h6>
                        <small>Pessoas</small>
                    </div>
                </div>

                <div className="status-card">
                    <TiHeartOutline />
                    <div className="status-card-text">
                        <h6>576</h6>
                        <small>Reacções</small>
                    </div>
                </div>


            </div>

            <div className="home-container">

                <div className="home-card">
                    <img src={imgHome} alt="imagem de tela inicial" width="200px" />
                    <div className="welcome-text">
                        <h3 className="text-normal">Organizar as ideias</h3>
                        <small>Lorem, ipsum dolor.</small>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores aliquam sed atque maxime incidunt eveniet iusto voluptates mollitia ratione!</p>
                    </div>
                </div>

                <div className="home-card">
                    <img src={imgHome2} alt="imagem de tela inicial" width="200px" />
                    <div className="welcome-text">
                        <h3 className="text-normal">Rever os conteúdos</h3>
                        <small>Lorem, ipsum dolor.</small>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores aliquam sed atque maxime incidunt eveniet iusto voluptates mollitia ratione!</p>
                    </div>
                </div>

                <div className="home-card">
                    <img src={imgHome3} alt="imagem de tela inicial" width="200px" />
                    <div className="welcome-text">
                        <h3 className="text-normal">Guardar as matérias</h3>
                        <small>Lorem, ipsum dolor.</small>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores aliquam sed atque maxime incidunt eveniet iusto voluptates mollitia ratione!</p>
                    </div>
                </div>

            </div>



        </div>
    );
}

