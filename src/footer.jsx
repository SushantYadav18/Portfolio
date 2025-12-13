import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <div className="brand">SRK</div>
                    <p className="desc">Thanks for visiting my portfolio. I build front-end experiences with attention to design and performance.</p>
                </div>

                <div className="footer-col footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#AboutMe">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col footer-contact">
                    <h4>Contact</h4>
                    <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
                    <div className="social">
                        <a href="https://github.com/SushantYadav18"><img src="/Icons/github.png" alt="GitHub"/></a>
                        <a href="https://www.linkedin.com/in/sushant-ray-yadav-315191269/"><img src="/Icons/linkedin.png" alt="LinkedIn"/></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">&copy; {new Date().getFullYear()} Sushant Yadav. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;
