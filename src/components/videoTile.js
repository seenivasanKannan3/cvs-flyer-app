import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// const VideoTile = ({ videoSrc }) => {
//   return (
//     <div >
//         <HoverVideoPlayer videoSrc={videoSrc} type="video/mp4"/>
//       {/* <video width="100%" controls>
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}
//     </div>
//   );
// };

// const styles = {
//   tile: {
//     flex: '1 1 calc(33.333% - 20px)',
//     // margin: '10px',
//     // padding: '20px',
//     backgroundColor: '#f0f0f0',
//     textAlign: 'center',
//     width: '380px',
//   },
// };

// export default VideoTile;
const VideoTile = ({ videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <HoverVideoPlayer videoSrc={videoSrc} type="video/mp4" onClick={handlePlay} />
      {isPlaying && ReactDOM.createPortal(
        <div style={styles.overlay}>
          <div style={styles.videoContainer}>
            <video width="100%" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={handleClose} style={styles.closeButton}>Close</button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

const styles = {
  tile: {
    flex: '1 1 calc(33.333% - 20px)',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    width: '380px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  videoContainer: {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
};

export default VideoTile;