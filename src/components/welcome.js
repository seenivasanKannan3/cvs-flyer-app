import React from 'react';
import './welcome.css';
import dedx from '../assets/de-dx.png';
import cognizantLogo from '../assets/cognizant_logo.png'

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="image-container">
                <img src={dedx} alt="Welcome" className="welcome-image" />
                <div className="overlay-text"><img src={cognizantLogo} alt="cognizant"  style={{width:'100px', position: 'relative', bottom: '160px', right: '120px'}}/></div>
                <div className="overlay-text" style={{position: 'absolute', top: '4%', left: '87%', fontSize: '12px'}}>DE DX IDE</div>
                <div className="faded-text">DE/DX</div>
                <div className="faded-text2">Health-a-thon</div>
            </div>
        </div>
    );
};

export default Welcome;
