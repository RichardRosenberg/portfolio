import React from 'react';
import adminReview from '../assets/Projects/MovieDB/adminReview.png';
import adminView from '../assets/Projects/MovieDB/adminView.png';
import login from '../assets/Projects/MovieDB/login.png';
import movieList from '../assets/Projects/MovieDB/movieList.png';
import moviePage from '../assets/Projects/MovieDB/moviePage.png';
import reviews from '../assets/Projects/MovieDB/reviews.png';
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';
import '../styles/game.css';

export default function SpringBoot() {
    document.title = "Spring Boot";
    return (
        <div className='page-container'>
            <div className='bio-box-app'>
                <h1>Spring Boot</h1>
                <div className='image-box2'>
                    <div className='project-box'>
                        <img src={login} className='app-image-box' alt='WPF Application' />
                        <p>Login and Signup functions with DB table for users, all data encrypted.</p>
                    </div>
                    <div className='project-box'>
                        <img src={movieList} className='app-image-box' alt='MVC Application' />
                        <p>Movie List page from a user point of view. User cannot add new movies or edit the current ones. <br></br> They can view the individual movie pages and the main list however.</p>
                    </div>
                    <div className='project-box'>
                        <img src={moviePage} className='app-image-box' alt='WPF Application with Database' />
                        <p>Self generated page is created when movie is entered into the DB from an Admin role.</p>
                    </div>
                    <div className='project-box'>
                        <img src={reviews} className='app-image-box' alt='WPF Application' />
                        <p>Reviews at bottom including those left by other users, only editable and deletable by original user or admins.</p>
                    </div>
                    <div className='project-box'>
                        <img src={adminReview} className='app-image-box' alt='MVC Application' />
                        <p>Admins can delete harmful reviews but cannot edit them in any way.</p>
                    </div>
                    <div className='project-box'>
                        <img src={adminView} className='app-image-box' alt='WPF Application with Database' />
                        <p>Admin movie list page looks slightly different with full CRUD operations.</p>
                    </div>
                </div>
                <motion.div className='project-box'>
                    <a href="Projects">
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