import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#ffffff',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="THE WORLD IS A STAGE" subtitle="LOCAL">
          <p>
            {Globals.pitch.locale}
          </p>
          <p>
            <strong>Teatro Augusta</strong>
            <br />
            No coração de São Paulo, o histórico palco será a casa de
            apresentações únicas e inéditas.
          </p>
          <strong>
            Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil
          </strong>
          <img
            src="http://i.imgur.com/xSpn9YZ.png"
            alt="Teatro Augusta"
            title="Teatro Augusta"
          />
          <a href="https://goo.gl/maps/CYJBVGHz3Nk">Google Maps</a>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
