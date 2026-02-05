import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainContent from './MainContent'
import Footer from './footer'
import AboutMe from './AboutMe'
import Education from './Education'

 function App() {
  return (
    <>
    <header className="navbar">
      <span className="logo">SRK</span>
      <nav >
        <a href="#home">Home</a>
        <a href="#AboutMe">About</a>
        <a href="#projects">Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
<div id="home">
    <MainContent />
</div>

<div id="AboutMe">
<AboutMe />
</div>
<div id="education">
  <Education />
</div>

<div id="footer">
<Footer />
</div>

    </>
  );
}

export default App;