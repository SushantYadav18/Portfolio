import React from 'react';
import './AboutMe.css';
 function AboutMe() {
    return (
        <div className="about-me-container">
            <h1>About Me</h1>
            
            <section className="intro">
                <h2>Hello, I'm Sushant Yadav</h2>
                <p>Welcome to my portfolio! I'm from Rautathat and passionate about creating amazing web experiences.</p>
            </section>

            <section className="background">
                <h3>Background</h3>
                <p>
                    I am a dedicated Frontend Developer with hands-on experience building responsive and modern web applications.<br />
                     My core skills include HTML, CSS, JavaScript, React, and UI/UX fundamentals. <br />
                     I enjoy transforming designs into clean, functional interfaces and optimizing websites for performance, accessibility, <br />and mobile responsiveness.<br />
                      I’m a fast learner, a team player, and always excited to explore new frontend technologies<br /> to create impactful digital experiences.<br />
                </p>
            </section>

            <section className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>JavaScript & React</li>
                    <li>Web Development</li>
                    <li>UI/UX Design</li>
                    <li>Problem Solving</li>
                </ul>
            </section>

            <section className="interests">
                <h3>Interests</h3>
                <p>
                    I'm interested in modern web technologies, open-source development, and continuous learning.<br />
                    When I'm not coding, you can find me exploring new ideas and technologies.
                </p>
            </section>

            <section className="contact">
                <h3>Get In Touch</h3>
                <p>Feel free to reach out to me for collaborations or just a friendly hello!</p>
            </section>
        </div>
    );
}
export default AboutMe;