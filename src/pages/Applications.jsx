import React from 'react';
import auth from '../assets/Projects/Apps/Authorize.png';
import db from '../assets/Projects/Apps/Database.png';
import userEx from '../assets/Projects/Apps/IdentityUserExtend.png';
import program from '../assets/Projects/Apps/ProgramCs.png';
import vm from '../assets/Projects/Apps/ViewModel.png';
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';

export default function Applications() {
    document.title = "Applications";
    return (
            <div className='page-container'>
                <h1>Applications</h1>
                <div className='project-report-box'>
                    <div className='project-box'>
                        <img src={auth} className='image-box-app' alt='MVC controller showing Authorization' />
                        <p>Set role requirements for certain parts of the page, or routes in the controller.</p>
                    </div>
                    <div className='project-box'>
                        <img src={db} className='image-box-app' alt='Database shown in sql explorer' />
                        <p>Database handled easily with entity framework sql. Scaffolding used to create tables for users. </p>
                    </div>
                    <div className='project-box'>
                        <img src={userEx} className='image-box-app' alt='Custom User model ' />
                        <p>Custom User extending Identity User to create the new fields in database table.</p>
                    </div>
                    <div className='project-box'>
                        <img src={program} className='image-box-app' alt='Program.cs after adding identity and roles' />
                        <p>Add password requirements, add custome roles and add authorization and authentications to program.cs</p>
                    </div>
                    <div className='project-box'>
                        <img src={vm} className='image-box-app' alt='Staff register view model' />
                        <p>View Model for staff registration including basic validation for most inputs.</p>
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
