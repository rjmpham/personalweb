/* eslint-disable no-unused-vars */

import React from 'react';
import './Demo.css';
import Game from './View/Game.js';
import Menu from './View/Menu';

function Demo(){
    return(
        <div className='demo-area'>
            <div className="gameArea">
                <div className="innerGame">
                    <Game />
                    <Menu />
                </div>
            </div>
        </div>

    );
}

export default Demo;