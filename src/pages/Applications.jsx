import React from 'react';
import wpf from '../assets/Projects/Apps/wpf1.png';
import mvc from '../assets/Projects/Apps/mvc.png';
import wpfDb from '../assets/Projects/Apps/wpfDb.png';
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';
import '../styles/game.css';

export default function Applications() {
    document.title = "Applications";
    return (
        <div className='page-container'>
            <br /><br /><br />
            <div className='bio-box-app'>
                <h1>Applications</h1>
                <div className='image-box2'>
                    <div className='project-box'>
                        <img src={wpf} className='app-image-box' alt='WPF Application' />
                        <p>Wpf Applications with save to file and save to databse functions. Clean Design for easy user input and easy storage of data.</p>
                    </div>
                    <div className='project-box'>
                        <img src={mvc} className='app-image-box' alt='MVC Application' />
                        <p>MVC applications useful for creating business applications and other useful apps.</p>
                    </div>
                    <div className='project-box'>
                        <img src={wpfDb} className='app-image-box' alt='WPF Application with Database' />
                        <p>Wpf Applications with save to file and save to databse functions using SQL Light.</p>
                    </div>
                </div>
                <motion.div className='project-box'>
                    <a href="../projects">
                        <motion.img
                            src={project}
                            className='game-image-box'
                            alt='Back To Projects'
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.5 }}
                        />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
