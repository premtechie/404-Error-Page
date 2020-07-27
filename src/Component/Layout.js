import React from 'react';
import Scarecrow from '../Assets/Image/Scarecrow.png';
import './Layout.css';

const layout=()=>{

    return (
        <div className='Layout'>
            <div className='content'>
                <img src={Scarecrow} alt='logo' />
                <div className='inside'>
                    <h1>I have bad news for you..!</h1>
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                    <button>Back to HomePage</button>
                </div>
            </div>
            
        </div>
    )
};

export default layout;
