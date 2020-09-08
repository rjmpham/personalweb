/* eslint-disable no-unused-vars */
import React from 'react';
import Profile from './images/Profile';

function About() {
    return (
        <div className="App">
            <header className="other-header">
                <div className='container'>
                    <div className='profileImage'>
                        <Profile />
                    </div>
                    <p className='textProfile'>

                        I have graduated from the University of Calgary with a degree in Computer Science. 
                        Since then I have been learning React, JavaScript, and HTML to pursue a career in front end development. 
                        My interests include algorithms, problem solving, and front end design.
                        My current goal is to learn more technologies and stacks to become a full stack developer. 
                        What motivates me the most is the challenge that comes from working on interesting problems. 
                        Feel free to take a look at my resume to get an in-depth look at my skills, or look at my projects. Thank you for visiting my personal website.
                    </p>
                </div>



            </header>
        </div>
    );
}

export default About;