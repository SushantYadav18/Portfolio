import React from 'react';
import './Education.css';
function Education() {
    return (
        <>
        <div className="education-container">
            <h1>Education</h1>
            <div className="education-list">
                <div className="education-card">
                    <div className="education-image">
                        <img src="/images/school.jpg" alt="Jay Kishan Secondary School" />
                    </div>
                    <div className="education-details">
                        <h2>School Level (NEB Board)</h2>
                        <h3>Jay Kishan Secondary School</h3>
                        <p>Rautahat</p>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-image">
                        <img src="/images/college.jpg" alt="Model Multiple College" />
                    </div>
                    <div className="education-details">
                        <h2>+2 Science (NEB Board)</h2>
                        <h3>Model Multiple College</h3>
                        <p>Janakpur</p>
                    </div>
                </div>

                <div className="education-card">
                    <div className="education-image">
                        <img src="/images/university.jpg" alt="Saraswati Multiple Campus" />
                    </div>
                    <div className="education-details">
                        <h2>Bachelor of Computer Application</h2>
                        <h3>Saraswati Multiple Campus</h3>
                        <p>Lainchaur, Thamel</p>
                        <p className="board">Tribhuwan University</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Education;