import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="left">
                    <img src="/profileMain.png" alt="Sushant" className="photo" />
                </div>

                <div className="right">
                    <h1>About Me</h1>

                    <div className="intro">
                        <h2>Hi, I'm Sushant Yadav</h2>
                        <p>I am a motivated BCA student focused on front-end development, skilled in HTML, CSS, JavaScript, and React. I have built projects like a Pet Adoption Website, BMI Calculator, and Quiz Application, which strengthened my design and problem-solving skills. I’m continuously learning backend and database concepts to grow into a full-stack developer in the future.</p>
                    </div>

                    <div className="skills">
                        <h3>Skills</h3>

                        <div className="skill">
                            <div className="skill-row">
                                <div className="skill-label">HTML</div>
                                <div className="skill-value">90%</div>
                            </div>
                            <div className="bar"><div className="fill" style={{ width: '90%' }}></div></div>
                        </div>

                        <div className="skill">
                            <div className="skill-row">
                                <div className="skill-label">CSS</div>
                                <div className="skill-value">85%</div>
                            </div>
                            <div className="bar"><div className="fill" style={{ width: '85%' }}></div></div>
                        </div>

                        <div className="skill">
                            <div className="skill-row">
                                <div className="skill-label">JavaScript</div>
                                <div className="skill-value">78%</div>
                            </div>
                            <div className="bar"><div className="fill" style={{ width: '78%' }}></div></div>
                        </div>

                        <div className="skill">
                            <div className="skill-row">
                                <div className="skill-label">React</div>
                                <div className="skill-value">72%</div>
                            </div>
                            <div className="bar"><div className="fill" style={{ width: '72%' }}></div></div>
                        </div>

                        <div className="skill">
                            <div className="skill-row">
                                <div className="skill-label">Git / GitHub</div>
                                <div className="skill-value">65%</div>
                            </div>
                            <div className="bar"><div className="fill" style={{ width: '65%' }}></div></div>
                        </div>

                    </div>

                    <div className="contact">
                        <a className="contact-button" href="mailto:your-email@example.com">Contact me</a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutMe;