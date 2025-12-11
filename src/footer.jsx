import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="MainFooter">
            <div className="Footer-container">
                <div className="About-All">
                    <div className="About-Section">
                        <h3 className="About-Main">Thank You....</h3>
                        <p className="About-text">Thank you for visiting my portfolio website. Here you can find information about my projects, skills, and how to contact me.</p>
                    </div>
                    <div className="Footer-Links-Social">
                    <div className="Links-All">
                        <h3 className="Links-Main">Links</h3>
                        <ul className="Links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="Social-All">
                        <h3 className="Social-Main">Social</h3>
                        <ul className="Social">
                            <li><a href="#github">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/sushant-ray-yadav-315191269/">LinkedIn</a></li>
                            <li><a href="#twitter">Twitter</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="Copyright">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
