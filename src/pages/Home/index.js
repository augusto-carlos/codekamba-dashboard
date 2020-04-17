import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { FaAngular, FaVuejs, FaReact, FaBootstrap, FaExpandArrowsAlt, FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import api from '../../services/api';

import './styles.css'


export default function Home() {


    const [users, setUsers] = useState([]);
    const user = {
        name: localStorage.getItem('userName'),
        id: localStorage.getItem('userId')
    }

    useEffect(() => {

        api.get('usuarios')
            .then(res => setUsers(res.data))

    }, [user.id]);

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
                    <FaAngular />
                    <h6>576%</h6>
                    <small>lorem, dlor irtom</small>
                </div>


                <div className="status-card">
                    <FaReact />
                    <h6>576%</h6>
                    <small>lorem, dlor irtom</small>
                </div>


                <div className="status-card">
                    <FaVuejs />
                    <h6>576%</h6>
                    <small>lorem, dlor irtom</small>
                </div>

                <div className="status-card">
                    <FaBootstrap />
                    <h6>576%</h6>
                    <small>lorem, dlor irtom</small>
                </div>


            </div>
            <div className="chart-container">
                <div className="chart" style={{ width: '370px', height: '370px' }}>
                    <Line
                        data={data}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>

                <div className="chart" style={{ width: '370px', height: '370px' }}>
                    <Bar
                        data={data}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>

                <div className="notification-container">
                    <div className="notification-header">
                        <span>
                            <FaExpandArrowsAlt />
                        </span>
                        <span>
                            <FaRegWindowClose />
                        </span>
                    </div>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <small>Lorem, ipsum dolor.</small>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolores aliquam sed atque maxime incidunt eveniet iusto voluptates mollitia ratione!</p>
                </div>


            </div>


            <div className="last-users-container">

                {users.map(user => (
                    <div className="user-card" key={user._id}>
                        <AiOutlineUser />
                        <div>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

