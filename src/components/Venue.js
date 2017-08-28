import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
// import imgAugusta from '../media/images/gallery1.jpg';
import imgAugusta from '../media/images/theater-augusta.png';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    // background: Globals.colors.lightGray,
    background: imgAugusta,
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
        <Text title="SAO PAULO AUGUSTA THEATER" subtitle="LOCAL">
          <p>
            {Globals.pitch.locale}
          </p>
          <p>
            <br />
            No coração de São Paulo, o histórico palco será a casa de
            apresentações únicas e inéditas.
          </p>
          <strong>
            Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil
          </strong>
          <img src={imgAugusta} alt="Teatro Augusta" title="Teatro Augusta" />
          <a href="https://goo.gl/maps/CYJBVGHz3Nk">Google Maps</a>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
