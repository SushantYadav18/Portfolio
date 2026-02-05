import React from 'react';
import './MainContent.css'
export default function MainContent(){
    return (
        <>
       
     <div className="main-content">
        <div className="profile-image">
        <img src="/profile.jpg" alt="Sushant Yadav profile" />
      </div>
        <div className="intro-text">
          <h1>I'm Sushant Yadav</h1>
          <p>Front-End Developer | Building clean, scalable UI with React — learning full-stack</p>
          <a className="contact-button" href="#Contact">Contact Me</a>
        </div>
    
    
</div>
        </>
    )
}