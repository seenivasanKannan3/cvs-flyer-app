import React, { useState, useEffect } from 'react';
import './check.css'; // Make sure to create a corresponding CSS file for styling
// import hackathon from '../assets/hackathon.png';
import generative_ai from '../assets/genAI.png';
import collaborate from '../assets/collaborate.png';
import healthathon from '../assets/healthathon.png';

const slides = [
    {
        title: "Health-a-thon - 2024",
        description: "Join the ultimate coding challenge!",
        image: healthathon
    },
    {
        title: "Generative AI",
        description: "Explore the future of AI technology.",
        image: generative_ai
    },
    {
        title: "Collaborate & Innovate",
        description: "Work with the best minds in the industry.",
        image: collaborate
    }
];

const Check = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={slide.title} style={{width: '100%', height: '100%'}}/>
                    <div className="text">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Check;
