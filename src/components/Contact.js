// eslint-disable-next-line no-unused-vars
import React from 'react';
import GithubLogo from './images/Github';
import LinkLogo from './images/Link';

function Contact() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='home-layout'>
                    <h1 style={{fontSize:'300%'}}>Contact</h1>
                    
                    <p>
                        <h1>rjmpham@gmail.com</h1>
                    </p>

                    <p>

                        <h1>(587) 433-3138</h1>
                    </p>

                    <p>
                        <a href="https://github.com/rjmpham/"><GithubLogo/></a>  <a href="https://www.linkedin.com/in/rjmpham/"><LinkLogo/></a>
                    </p>

                </div>



                
            </header>
        </div>
    );
}

export default Contact;