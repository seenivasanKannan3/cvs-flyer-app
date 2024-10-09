import React, { useEffect, useState } from 'react';

// import React from 'react';
// import './newLanding.css';
// import Video from './video';
// import SlideShow from './slideShow';
// import testVideo from '../assets/test-video.mp4';
// import EventDetail from './eventDetail';
// import Check from './check';
// import Welcome from './welcome';
// import { useEffect } from 'react';
// import { useState } from 'react';

// // import React from 'react';
// // import './newLanding.css';
import Video from './video';
import SlideShow1 from './slideShow1';
import SlideShow2 from './slideShow2';
import SlideShow3 from './slideShow3';
import testVideo from '../assets/test-video.mp4'
import EventDetail from './eventDetail';
import Check from './check';
import Welcome from './welcome';
// import React, { useState } from 'react';
import Modal from 'react-modal';

// // const tiles = [
// //     { id: 1, content: <EventDetail/> },
// //     { id: 2, content: <Check/> },
// //     { id: 3, content: <Welcome/> },
// //     { id: 4, content: <SlideShow/> },
// //     { id: 5, content: <Video videoSrc={testVideo}/> },
// // ];

// // const NewLanding = () => {
// //     return (
// //         <div className="landing-container">
// //             {tiles.map(tile => (
// //                 <div key={tile.id} className="tile">
// //                     {tile.content}
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };

// // export default NewLanding;
// const tiles = [
//     { id: 1, content: <EventDetail/> },
//     { id: 2, content: <Check/> },
//     { id: 3, content: <Welcome/> },
//     { id: 4, content: <SlideShow/> },
//     { id: 5, content: <Video videoSrc={testVideo}/> },
// ];

// const NewLanding = () => {
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         setLoaded(true);
//     }, []);

//     return (
//         <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
//             {tiles.map(tile => (
//                 <div key={tile.id} className="tile">
//                     {tile.content}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default NewLanding;
const tiles = [
    { id: 1, content: <EventDetail/> },
    { id: 2, content: <Video videoSrc={testVideo}/> },
    { id: 3, content: ''},
    { id: 4, content: <Welcome/>},
    { id: 5, content:  <SlideShow2/>},
    { id: 6, content:  <SlideShow1/>},
    { id: 7, content: <SlideShow3/> },
    { id: 8, content: <Check/>},
];

// const NewLanding = () => {
//     const [loaded, setLoaded] = useState(false);

//     useEffect(() => {
//         setLoaded(true);
//     }, []);

//     return (
//         <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
//             {tiles.map(tile => (
//                 <div key={tile.id} className="tile">
//                     {tile.content}
//                 </div>
//             ))}
//             <style jsx>{`
//                 .landing-container {
//                     display: grid;
//                     grid-template-columns: repeat(4, 1fr);
//                     grid-template-rows: repeat(2, 1fr);
//                     gap: 10px;
//                     width: 100vw;
//                     height: 100vh;
//                     overflow: hidden;
//                 }
//                 .tile {
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     background-color: #f0f0f0;
//                     border: 1px solid #ccc;
//                     transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
//                     opacity: 0;
//                     transform: scale(0.9);
//                 }
//                 .loaded .tile {
//                     opacity: 1;
//                     transform: scale(1);
//                 }
//                 .tile:hover {
//                     transform: scale(1.05);
//                 }
//             `}</style>
//         </div>
//     );
// };
const NewLanding = () => {
    const [loaded, setLoaded] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const openModal = (id, content) => {
        if(id !== 2){
        setModalContent(content);
        setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    return (
        <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
            {tiles.map(tile => (
                <div key={tile.id} className="tile" onClick={() => openModal(tile.id, tile.content)}>
                    {tile.content}
                </div>
            ))}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Tile Content"
                className="modal"
                overlayClassName="overlay"
            >
                <button onClick={closeModal}>Close</button>
                {modalContent}
            </Modal>
            <style jsx>{`
                .landing-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                    gap: 10px;
                    width: 100vw;
                    height: 100vh;
                    overflow: hidden;
                }
                .tile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f0f0f0;
                    border: 1px solid #ccc;
                    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                    opacity: 0;
                    transform: scale(0.9);
                }
                .loaded .tile {
                    opacity: 1;
                    transform: scale(0.9);
                }
                .modal {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    height: 50%;
                    width: 50%;
                    transform: translate(-50%, -50%);
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }
                .overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.75);
                }
            `}</style>
        </div>
    );
};

export default NewLanding;

// export default NewLanding;

