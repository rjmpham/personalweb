/* eslint-disable no-unused-vars */
import React from 'react';
import Img1 from './images/Project1Photo';
import Img2 from './images/Project2Photo';
import Img3 from './images/Project3Photo';
import {Link} from 'react-router-dom';

function Projects() {
    const navStyle = {
        color: 'white'

    };
    return (
        <div className="App">

            <header className='projects'>
                <div className='projectInner'>
                    <div className='projectImage'>
                        <Img1/>
                    </div>
                    <p className='textProject'>

                        <h2>Santorini Online</h2>
                        A digitial version of a classic game done in with React, JavaScript, HTML, and CSS. Try out the demo here!

                        <u1 className='nav-links'>
                            <Link style={navStyle} to='/santi'>
                                <li><h1>Demo</h1></li>
                            </Link>     

                            <h1><a href="https://github.com/rjmpham/HackathonReactSanti">Github Link</a></h1>
                        </u1>



                    </p>

                </div>
                <div className='projectInner2'>
                    <div className='projectImage2'>
                        <Img2/>
                    </div>
                    <p className='textProject2'>
                        <h2>Blockchain Clone</h2>
                        A functional clone of blockchain, written in Java, with a secure algorithm for block generation, and a peer-2-peer network architectue.
                        A server can be started, and peers can mine blocks, make transactions, verify them.
                        The repository also contains multiple altered and malicious version of the code that demonstrate the blockchain's ability to resist attacks.

                        <h1><a href="https://github.com/rjmpham/whatspass">Github Link</a></h1>

                    </p>

                </div>
                <div className='projectInner2'>
                    <div className='projectImage2'>
                        <Img3/>
                    </div>
                    <p className='textProject2'>
                        <h2>Password Generatior Site </h2>
                        A live website hosted on AWS with a JavaScript algorithm that generates passwords and and tests them under the hood.
                        The website explains tips and tricks to create and remember strong passwords. 
                        The passwords generated are checked via a popular  estimator called zxcvbn.  

                        <h1><a href="http://whatsinapassword.com">whatsinapassword.com</a>     <a href="https://github.com/rjmpham/whatspass">Github Link</a></h1>

                        

                    </p>

                </div>
            </header>
        </div>
    );
}

export default Projects;
