import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';
import '../styles/game.css';

export default function Flappy() {
  document.title = "Flappy Bird";
  const { unityProvider } = useUnityContext({
    loaderUrl: "./Flappy/Build/Flappy.loader.js",
    dataUrl: "./Flappy/Build/Flappy.data.br",
    frameworkUrl: "./Flappy/Build/Flappy.framework.js.br",
    codeUrl: "./Flappy/Build/Flappy.wasm.br",
  });
  return (
    <div className='page-container'>
      <div className='game-container'>
        <h1>Flappy Bird</h1>
        <div className='unity-container'>
          <Unity
            unityProvider={unityProvider}
            style={{ width: '75%', height: 'auto' }}
          />
        </div>
        <div className='bottom-game-text'>
          <h1>About Flappy Bird</h1>
          <p>
            Developing Flappy Bird in Unity using C# was a hands-on learning experience that strengthened my grasp of fundamental game development principles. This project involved tackling challenges such as user input, physics implementation, and game state management, contributing to a solid foundation in Unity and C#. Through debugging and optimizing code for better performance, I learned the importance of efficient programming practices.
          </p>
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
