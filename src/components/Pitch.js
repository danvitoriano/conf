import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgPicth from '../media/images/reactconfbr-pitch.jpg';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  imgContainer: css({
    width: '50%',
    display: 'flex ',
    float: 'left',
    padding: '1em',
    margin: '3em 0 0 0',
    border: '1px solid lightgray',
  }),
  textContainer: css({
    padding: '3em',
    display: 'flex',
  }),
};

class TextPitch extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text
          title="Bleending Edge Web Development"
          subtitle="React Brazil Community"
        >
          <div {...styles.imgContainer}>
            <img src={imgPicth} />
          </div>
          <p {...styles.textContainer}>
            {Globals.pitch.text}
          </p>
        </Text>
      </div>
    );
  }
}

export default TextPitch;
