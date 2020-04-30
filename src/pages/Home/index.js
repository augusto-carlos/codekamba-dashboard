import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { TiMessage, TiUserOutline, TiBookmark, TiHeartOutline, TiDelete } from 'react-icons/ti';

import './styles.css'

export default function Home() {

    const data = {
        labels: ['Jan', 'Fev', 'Marc', 'Abr', 'Maio', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Actividade do sistema',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.09)',
                borderColor: '#4dbeaf',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };


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

            <div className="chart-container">
                <div className="chart" style={{ width: '360px', height: '360px' }}>
                    <Line
                        data={data}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>

                <div className="chart" style={{ width: '360px', height: '360px' }}>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>

                <div className="notification-container">
                    <div className="notification-header">
                       
                        <span>
                            <TiDelete />
                        </span>
                    </div>
                    <h3>Alguma notificação importante.</h3>
                    <small>Lorem, ipsum dolor.</small>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores aliquam sed atque maxime incidunt eveniet iusto voluptates mollitia ratione!</p>
                </div>


            </div>



        </div>
    );
}

