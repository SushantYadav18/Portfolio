import React from 'react';
import './MainContent.css'
export default function MainContent(){
    return (
        <>
       
     <div className="main-content">
        <div className="profile-image">
        <img src="/profile.jpg" alt="Profile" width="500" height="500"/>
</div>
        <div className="intro-text">
          <h1>Sushant Yadav</h1>
          <p>Frontend Developer | ReactJS | JavaScript | HTML | CSS | TailwindCSS | Vite | GitHub</p>
          <button className="contact-button">Contact Me</button>
        </div>
    
    
</div>
        </>
    )
}