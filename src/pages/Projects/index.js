import React from 'react';
import { GoRepo, GoSearch } from 'react-icons/go';

import './styles.css'

const Projects = () => {

    const projects = [{}, {}, {}, {}, {}, {}]

    return (
        <div className="content">

            <div className="projects-header">
                <form>
                    <div className="search">
                        <input type="search" /><GoSearch />
                    </div>
                </form>
            </div>

            <div className="projects-container">

                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-card-header">
                            <h3><GoRepo /> Nome do projecto</h3>
                            <small className="project-tag">React</small>
                            <small className="project-tag">Redux</small>
                            <small className="project-tag">Adonis.js</small>
                        </div>
                        <div className="project-card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugiat?</p>
                        </div>
                    </div>
                ))}


            </div>

        </div>
    );
}

export default Projects;
