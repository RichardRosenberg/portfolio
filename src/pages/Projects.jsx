import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/Projects/Flappy.png';
import project2 from '../assets/Projects/Asteroids.png';
import project3 from '../assets/Projects/Apps/IdentityUserExtend.png';
import project4 from '../assets/Projects/MovieDB/movieList.png';
import { Link } from 'react-router-dom'; 
import '../styles/projects.css';

export default function Projects() {
    document.title = "Projects";
    return (
        <div className='page-container'>
            <h1>Projects</h1>       
            <div className='project-page-container'>
                <motion.div className='project-page-box'>
                    <Link to="/projects/flappyBird">
                        <motion.img
                            src={project1}
                            className='game-image-box'
                            alt='Flappy Bird Picture'
                            whileHover={{ scale: 1.25 }}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Flappy Bird created with Unity, all assets created by me on Paint3D.
                    </motion.p>
                </motion.div>
                <motion.div className='project-page-box'>
                    <Link to="/projects/asteroids">
                        <motion.img
                            src={project2}
                            className='game-image-box'
                            alt='Asteroids Picture'
                            whileHover={{ scale: 1.25 }}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 1.3}}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Asteroids Game created with Unity, assets found online.
                    </motion.p>
                </motion.div>
                <motion.div className='project-page-box'>
                    <Link to="/projects/applications"> 
                        <motion.img
                            src={project3}
                            className='game-image-box'
                            alt='Applications Picture'
                            whileHover={{ scale: 1.25 }}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 1.3}}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        WPF applications and MVC applications with SQL Light.
                    </motion.p>
                </motion.div>
                <motion.div className='project-page-box'>
                    <Link to="/projects/springboot"> 
                        <motion.img
                            src={project4}
                            className='game-image-box'
                            alt='Spring Boot Picture'
                            whileHover={{ scale: 1.25 }}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 1.3 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Spring Boot movie database using mySQL and Spring security 6.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
