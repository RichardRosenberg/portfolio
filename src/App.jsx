import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Asteroids from './pages/Asteroids'
import FlappyBird from './pages/FlappyBird'
import Applications from './pages/Applications'
import SpringBoot from './pages/SpringBoot'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/asteroids" element={<Asteroids />} />
        <Route path="/flappyBird" element={<FlappyBird />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/springboot" element={<SpringBoot />} />
      </Routes>
      <Footer />
    </div>    
    </>
  )
}

export default App
