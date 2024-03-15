import React, { useState, useEffect } from 'react';
import myImage from '../assets/placeholder-image.png';
import { motion, useAnimation } from 'framer-motion';
import '../styles/home.css';

const texts = [
"\"Make it work, make it right, make it fast\"  Kent Beck", 
"\"Talk is cheap, show me the code\"  Linus Torvalds", 
"\"Never trust a computer you can't throw out a window\" Steve Wozniak",
"\"The only way to do great work is to love what you do\"  Steve Jobs" 
];

const Home = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const mainContentControls = useAnimation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentTextIndex < texts.length - 1) {
                setCurrentTextIndex(prevIndex => prevIndex + 1);
            }
        }, 3500);
        return () => clearTimeout(timeout);
    }, [currentTextIndex]);
    document.title = "Home";
    return (
        <div className='page-container'>
            <div className='image-text-home'>
                <motion.div
                    key={texts[currentTextIndex]}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}>
                    {texts[currentTextIndex]}
                </motion.div>
            </div>
            <motion.div
                className="main-content"
                initial={{ opacity: 0, y: 50 }}
                animate={mainContentControls}
                style={{ scaleX: 0 }}
            />
            <h1 className='about-heading'>About Me</h1>
            <div className='bio-box'>
                <h2>Who is Richard Rosenberg?</h2>
                <p>
                    From a young age I had a passion for technology and for computers. As a young boy I would take everything apart to see how it works.
                    Eventually I discovered video games and knew this was my passion. I never had the opportunity to pursue my dreams in learning to program,
                    but a few years ago that all changed. After saving up as much money as I could I decided I would return to school and finally learn something I've wanted to learn for my entire life.
                </p>
                <h2>Commitment to Lifelong Learning</h2>
                <p>
                    Now equipped with knowledge acquired from John Abbott College as a full-stack developer, I prepare to embark on my new career as a programmer. However, my passion for learning extends far beyond the classroom. I am committed to continuous self-improvement and lifelong learning. I am excited to delve deeper into Unity and other game development software, building upon my solid foundation in Java and C#.
                </p>
                <h2>My Future Goals</h2>
                <p>
                    In the future I hope to be working within the video game industry, hopefully using my creativity and skills to create parts of video games.
                    I will hone my craft to one day know as much as possible about the entire process.
                </p>
                <h2>What I have to offer?</h2>
                <p>
                    I'm a hard working reliable and punctual employee. I work well with others and always have respect for everyone. I'm a fast learner and a self starter, I will constantly be working on improving myself and my skillset. I will work very hard to become and remain an asset to your company!
                </p>
            </div>
            <div className='image-box-about'>
                <img src={myImage} alt='Richard Rosenberg Picture' />
            </div>
        </div>
    );
}

export default Home;
