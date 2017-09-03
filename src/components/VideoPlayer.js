import React, { Component } from 'react';
import Cover from 'react-video-cover';
import ReactPlayer from 'react-player';
// import VideoBackgroundLoop from '../media/video/background3.webm';
import VideoBackgroundLoop2 from '../media/video/background3.mp4';

const VideoBackgroundLoop =
  'https://www.youtube.com/embed/y9RWLJzONsQ?rel=0&amp;controls=0&amp;showinfo=0';

const style = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  // opacity: '0.5',
  background: 'black',
  top: 0,
  left: 0,
  zIndex: -1,
};
const sty = {
  transform: 'translateX(-50%) translateY(-50%)',
};
class VideoPlayer extends Component {
  state = {
    resizeNotifier: () => {},
  };

  render() {
    const videoOptions = {
      src: VideoBackgroundLoop2,
      autoPlay: true,
      loop: true,
      preload: 'auto',
      muted: true,
    };

    return (
      <div style={style}>
        <Cover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          style={sty}
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
        {/*<ReactPlayer url={VideoBackgroundLoop} playing autoplay loop muted width='100%' height='100vh' />*/}
      </div>
    );
  }
}

export default VideoPlayer;
