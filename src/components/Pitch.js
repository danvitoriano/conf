import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Text from './Text';

const styles = {
  container: css({
    background: 'white',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
};

class TextPitch extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="COMUNIDADE REACT BRASIL" subtitle="BLEEDING EDGE">
          <p>{Globals.pitch.text}</p>
        </Text>
      </div>
    );
  }
}

export default TextPitch;
