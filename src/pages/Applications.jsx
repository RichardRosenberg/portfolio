import React from 'react';
import wpf from '../assets/Projects/Apps/wpf1.png';
import mvc from '../assets/Projects/Apps/mvc.png';
import wpfDb from '../assets/Projects/Apps/wpfDb.png';
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';

export default function Applications() {
    document.title = "Applications";
    return (
            <div className='page-container'>
                <h1>Applications</h1>
                <div className='project-report-box'>
                    <div className='project-box'>
                        <img src={wpf} className='image-box-app' alt='WPF Application' />
                        <p>Wpf Applications with save to file and save to databse functions. Clean Design for easy user input and easy storage of data.</p>
                    </div>
                    <div className='project-box'>
                        <img src={mvc} className='image-box-app' alt='MVC Application' />
                        <p>MVC applications useful for creating business applications and other useful apps.</p>
                    </div>
                    <div className='project-box'>
                        <img src={wpfDb} className='image-box-app' alt='WPF Application with Database' />
                        <p>Wpf Applications with save to file and save to databse functions using SQL Light.</p>
                    </div>
                </div>
                <motion.div className='back-to-projects'>
                    <a href="#/projects">
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
    );
}
