import React, { Component } from 'react';
import Cover from 'react-video-cover';
import VideoBackgroundLoop from '../media/video/background3.webm';

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
class VideoPlayer extends Component {
  state = {
    resizeNotifier: () => {},
  };

  render() {
    const videoOptions = {
      src: VideoBackgroundLoop,
      autoPlay: true,
      loop: true,
    };

    return (
      <div style={style}>
        <Cover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
        />
      </div>
    );
  }
}

export default VideoPlayer;
