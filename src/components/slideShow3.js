// import React, { useEffect, useState } from 'react';
// import hackathon1 from '../assets/hackathon1.png'
// import hackathon3 from '../assets/hackathon3.png'
// import hackathon4 from '../assets/hackathon4.png'
// // import './slideShow.css'; // Make sure to create a CSS file for styling

// const images = [
//     hackathon1,
//     hackathon3,
//     hackathon4
// ];

// const SlideShow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); // Change image every 3 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div >
//             {images.map((image, index) => (
//                 <div
//                     key={index}
//                     style={index=== currentIndex?{}:{display:'none'}}
//                 >
//                     <img src={image} alt={`Slide ${index + 1}`} style={{width: '380px'}}/>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SlideShow;
import React, { useEffect, useState } from 'react';
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import './slideShow.css'; // Make sure to create a CSS file for styling

const images = [
    image6,
    image7,
    image8,
];


const SlideShow1 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})`}}
                    />
                ))}
            </div>
            <div className="overlay-text">
            <h2>Health-a-thon - 2024</h2>
            </div>
            <div className="overlay-text-2">
            <h2>Prize Winning Moments</h2>
            </div>
        </div>
    );
};

export default SlideShow1;
