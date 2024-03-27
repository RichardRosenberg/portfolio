import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';

export default function Asteroids() {
  document.title = "Asteroids";
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Asteroids/Build/Asteroids.loader.js",
    dataUrl: "/Asteroids/Build/Asteroids.data",
    frameworkUrl: "/Asteroids/Build/Asteroids.framework.js",
    codeUrl: "/Asteroids/Build/Asteroids.wasm",
  });
  return (
    <div className='page-container'>
      <h1>Asteroids</h1>
      <div className='game-container'>
        <div className='unity-container'>
          <Unity
            unityProvider={unityProvider}
            style={{ width: '75%', height: 'auto' }}
          />
        </div>
        <div className='bottom-game-text'>
          <h1>About Asteroids</h1>
          <p>
            Designing the game involved navigating challenges in object pooling, asteroid spawning, and collision detection, enhancing my proficiency in C# programming. Working on the project also sharpened my problem-solving skills, particularly in managing the complexity of asteroid movements and ensuring seamless gameplay. Additionally, implementing features like scoring and game over mechanics broadened my understanding of game state management.
          </p>
        </div>
        <motion.div className='back-to-projects2'>
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
    </div>
  );
}
