import React from 'react';
import myImage from '../assets/placeholder-image.png';
import { motion } from 'framer-motion';

export default function Resume() {
    document.title = "Resume";
    return (
        <div className='page-container'>
            <h1 className='resume-heading'>Resume</h1>
            <div className='bio-box'>
                <motion.div
                    className='main-content'
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>

                    <h2>Richard Rosenberg</h2>
                    <h2>Junior Full Stack Developer</h2>
                    <h2>Email: richard.rosenberg.1987@gmail.com</h2>
                    <br />
                    <h3>Summary</h3>
                    <p>
                        Punctual and reliable, always driven to learn new techniques and methods to accomplish my goals. A deep passion for technology and all things computerized. Organized clean and well commented code, that follows the rules of programming.
                        Never missed a day of work in over 15 years.
                    </p>
                    <br />
                    <h3>Skills</h3>
                    <p>
                        C#, Unity, JavaScript, Python, Blender, React, HTML, CSS.
                    </p>
                    <p>
                        Excellent customer service with 15 years of work experience. Fast worker, fast learner and a self starter.
                    </p>
                    <br />
                    <h3>Education</h3>
                    <p>
                        Full Stack Developer Courses at John Abbott College. Deans list all semesters, high marks.
                        <br />
                        Riverdale High School (DES)
                        <br />
                        Hebrew Foundation School (Elementary)
                    </p>
                    <br />
                    <h3>Work Experience</h3>
                    <h3>Student Full Stack Developer</h3>
                    <h3>May 2023 - Present</h3>
                    <ul>
                        <li>Projects including Employee management programs</li>
                        <li>Website design with React HTML and CSS</li>
                        <li>Cloud computing with AWS</li>
                        <li>Spring boot, PHP and other back end techniques</li>
                        <li>Node JS</li>
                    </ul>
                    <br />
                    <h3>Pizza Delivery Driver</h3>
                    <h3>April 2014 - May 2023</h3>
                    <ul>
                        <li>Worked variety of open and close shifts with various duties</li>
                        <li>Cleaned the restaurant during off hours</li>
                        <li>Always provided top tier customer service</li>
                        <li>Always kept my car in working order never missed a day or called in sick.</li>
                    </ul>
                    <br />
                    <h3>Butcher and Meat Associate</h3>
                    <h3>Jan 2010 - April 2014</h3>
                    <ul>
                        <li>Learned on the job skills to become a Certified butcher.</li>
                        <li>Cleaned and maintained to machinery in the butcher shop.</li>
                        <li>Serve customers and help them decide what to purchase.</li>
                        <li>Prepare cuts of meat and sausages.</li>
                    </ul>
                    <br />
                    <h3>References</h3>
                    <p>All References are available on request. Contact can be made with me by Email.</p>
                </motion.div>
            </div>

            <div className='image-box-home'>
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 1.5 }}>
                    <img src={myImage} alt='Richard Rosenberg Picture' />
                </motion.div>
            </div>
        </div>
    );
}
