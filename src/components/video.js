import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './VideoPlayer.css';

const VideoPlayer = ({ videoSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);


    useEffect(() => {
        const captureThumbnail = () => {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            video.currentTime = 5; // Capture the frame at 5 seconds
            video.onloadeddata = () => {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                setThumbnail(canvas.toDataURL('image/jpeg'));
            };
        };

        captureThumbnail();
    }, [videoSrc]);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleClose = () => {
        setIsPlaying(false);
    };

    return (
        <div style={{width: '100%'}}>
            <div className="video-thumbnail" onClick={handlePlay}>
                {thumbnail ? (
                    <img src={thumbnail} alt="Video Thumbnail" />
                ) : (
                    <p>Loading thumbnail...</p>
                )}
                <button className="play-button">
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </div>

            {isPlaying && (
                <div className="video-popup">
                    <div className="video-popup-content">
                        <button className="close-button" onClick={handleClose}>X</button>
                        <video controls autoPlay>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}<video ref={videoRef} src={videoSrc} style={{ display: 'none' }} />
            <canvas ref={canvasRef} width="640" height="360" style={{ display: 'none' }} />
        </div>
    );
};

export default VideoPlayer;
