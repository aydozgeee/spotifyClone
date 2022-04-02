import React from 'react'
import '../styles/Player.css';

import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>

            <Sidebar></Sidebar>
            <Body></Body>
            </div>
            <Footer></Footer>
            

        </div>
    )
}

export default Player