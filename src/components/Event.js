import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import imgEvent from '../media/images/reactconfbr-event.jpg';

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
    width: '100%',
    '> img': {
      maxWidth: '100%',
      margin: '0 auto',
    },
    display: 'flex ',
    margin: '0 auto',
    // float: 'left',
    // padding: '0',
    // margin: '0',
    // border: '1px solid lightgray',
  }),
  textContainer: css({
    padding: '1em 0 1em 0',
    width: '100%',
    display: 'flex',
  }),
};

class TextPitch extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="O evento">
          <h3 lang="en">Bleending Edge Web Development</h3>
          <div {...styles.imgContainer}>
            <img src={imgEvent} />
          </div>
          <p {...styles.textContainer}>
            {Globals.event.text}
          </p>
        </Text>
      </div>
    );
  }
}

export default TextPitch;
