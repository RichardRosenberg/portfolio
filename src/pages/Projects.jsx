import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/Projects/FlappyBird.png';
import project2 from '../assets/Projects/Asteroids.png';
import project3 from '../assets/Projects/Applications.png';
import project4 from '../assets/Projects/SpringBoot.png';
import { Link } from 'react-router-dom'; 
import '../styles/projects.css';

export default function Projects() {
    document.title = "Projects";
    return (
        <div className='page-container'>
            <br /><br /><br />
            <motion.h1
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}>
                Projects
            </motion.h1>
            <div className='image-link-box'>
                <motion.div className='project-box'>
                    <Link to="/projects/flappyBird">
                        <motion.img
                            src={project1}
                            className='game-image-box'
                            alt='Flappy Bird Picture'
                            whileHover={{ scale: 1.5 }}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Flappy Bird created with Unity, all assets created by me on Paint3D.
                    </motion.p>
                </motion.div>
                <motion.div className='project-box'>
                    <Link to="/projects/asteroids">
                        <motion.img
                            src={project2}
                            className='game-image-box'
                            alt='Asteroids Picture'
                            whileHover={{ scale: 1.5 }}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Asteroids Game created with Unity, assets found online.
                    </motion.p>
                </motion.div>
                <motion.div className='project-box'>
                    <Link to="/projects/applications"> 
                        <motion.img
                            src={project3}
                            className='game-image-box'
                            alt='Applications Picture'
                            whileHover={{ scale: 1.5 }}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        WPF applications and MVC applications. Connection to database with SQL Light.
                    </motion.p>
                </motion.div>
                <motion.div className='project-box'>
                    <Link to="/projects/springboot"> 
                        <motion.img
                            src={project4}
                            className='game-image-box'
                            alt='Spring Boot Picture'
                            whileHover={{ scale: 1.5 }}
                            initial={{ scale: 1.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                    </Link>
                    <motion.p
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className='project-text'>
                        Spring Boot movie database using localhost and mySQL including Spring security 6.
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
