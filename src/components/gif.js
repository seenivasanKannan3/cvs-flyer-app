import React from 'react';
import './Gif.css';

const Gif = () => {
    return (
        <div className="gif-container">
            <img 
                src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif" 
                alt="AI Gif" 
                className="responsive-gif" 
            />
        </div>
    );
};

export default Gif;
