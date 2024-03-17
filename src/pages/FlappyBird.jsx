import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import project from '../assets/Projects/returnToProjects.png';
import { motion } from 'framer-motion';

export default function Flappy() {
  document.title = "Flappy Bird";
    const { unityProvider } = useUnityContext({
      loaderUrl: "/Flappy/Build/Flappy.loader.js",
      dataUrl: "/Flappy/Build/Flappy.data",
      frameworkUrl: "/Flappy/Build/Flappy.framework.js",
      codeUrl: "/Flappy/Build/Flappy.wasm",
    });

  return (
    <div className='page-container'>
      <h1>Flappy Bird</h1>
      <div className='game-container'>        
        <div className='unity-container'>
          <Unity
            unityProvider={unityProvider}
            style={{ width: '75%', height: 'auto' }}
          />
        </div>
        <div className='bottom-game-text'>
          <h2>About Flappy Bird</h2>
          <p>
            Developing Flappy Bird in Unity using C# was a hands-on learning experience that strengthened my grasp of fundamental game development principles. This project involved tackling challenges such as user input, physics implementation, and game state management, contributing to a solid foundation in Unity and C#. Through debugging and optimizing code for better performance, I learned the importance of efficient programming practices.
          </p>
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
    </div>
  );
}
