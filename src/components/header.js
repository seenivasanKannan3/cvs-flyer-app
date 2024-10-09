import React from 'react';
import './header.css';
import Gif from './gif';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#000048',
        color: 'white',
        padding: '10px',
        textAlign: 'center'
    };

    return (
        <header style={headerStyle}>
            <h1 className="animated-text">Sàvant Ràlly Innovation Quest - Health-a-thon - 2024</h1>
        </header>
    );
};

export default Header;
