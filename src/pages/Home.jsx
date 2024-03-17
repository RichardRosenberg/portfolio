import React from 'react';
import myImage from '../assets/placeholder-image.png';
import { motion } from 'framer-motion';
import '../styles/home.css';

const Home = () => {
    document.title = "Home";

    return (
        <div className='page-container'>
            <h1 className='about-heading'>About Me</h1>
            <motion.div
                className='bio-box'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}>
                <h2>Who is Richard Rosenberg?</h2>
                <p>
                    From a young age I had a passion for technology and for computers. As a young boy I would take everything apart to see how it works.
                    Eventually I discovered video games and knew this was my passion.
                </p>
                <h2>Commitment to Lifelong Learning</h2>
                <p>
                    Now equipped with knowledge acquired from John Abbott College as a full-stack developer, I prepare to embark on my new career as a programmer. I am committed to continuous self-improvement and lifelong learning. I am excited to delve deeper into Unity and other game development software, building upon my solid foundation in Java and C#.
                </p>
                <h2>My Future Goals</h2>
                <p>
                    In the future I hope to be working within the video game industry, hopefully using my creativity and skills to create parts of video games.
                </p>
                <h2>What I have to offer?</h2>
                <p>
                    I'm a hard working reliable and punctual employee. I work well with others and always have respect for everyone. I'm a fast learner and a self starter, I will constantly be working on improving myself and my skillset.
                </p>
                <br />
            </motion.div>

            <motion.div
                className='image-box-home'
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}>
                <img src={myImage} alt='Richard Rosenberg Picture' />
            </motion.div>
        </div>
    );
}

export default Home;
