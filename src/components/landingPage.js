// import React from 'react';
// import Grid from '@mui/material/Grid2';
// import Tile from './tile';
// import VideoTile from './videoTile';
// import Video from './video';
// import SlideShow from './slideShow';
// import testVideo from '../assets/test-video.mp4'
// import EventDetail from './eventDetail';
// import Check from './check';
// import Welcome from './welcome';
// import bgImage from '../assets/bgImage.png';

// const LandingPage = () => {
//   const tilesContent = [
//    <SlideShow/>,
//     'Tile 2 Content',
//     'Tile 3 Content',
//     'Tile 4 Content',
//     'Tile 5 Content',
//     'Tile 6 Content',
//     <VideoTile videoSrc={testVideo} />,
//   ];

//   return (
//     <div style={styles.container}>
//       {/* {tilesContent.map((content, index) => (
//         <Tile key={index} content={content} />
//       ))} */}
//       <Grid container>
//         <Grid  size={4}><Tile content={<EventDetail/>} /></Grid>
//         <Grid  size={5}><Tile content={<Check/>} /></Grid>
//         <Grid  size={3}><Tile content={<Welcome/>} /></Grid>
//       </Grid>
//       <Grid container>
//         <Grid  size={6}><Tile content={<SlideShow/>} /></Grid>
//         <Grid  size={6}><Tile content={<Video videoSrc={testVideo}/>} /></Grid>
//       </Grid>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     backgroundImage: bgImage
//   },
// };

// export default LandingPage;