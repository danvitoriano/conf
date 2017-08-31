import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
// import imgAugusta from '../media/images/gallery1.jpg';
import imgAugusta from '../media/images/theater-augusta.png';
import Text from './Text';

const urlPhotos = {
  folha: {
    url:
      'http://guia.folha.uol.com.br/teatro/sem-definicao/teatro-augusta-consolacao-724754030.shtml',
  },
  veja: {
    url: 'https://vejasp.abril.com.br/estabelecimento/teatro-augusta/',
  },
};

const styles = {
  container: css({
    alignSelf: 'flex-end',
    color: Globals.colors.white,
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
        <Text title="VENUE" subtitle="SAO PAULO, BRAZIL">
          <p>
            {Globals.pitch.locale}
          </p>
          <p>
            <br />
            No coração de São Paulo, o histórico Teatro Augusta será o palco de
            apresentações únicas.
          </p>
          <p>Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil</p>
          <img src={imgAugusta} alt="Teatro Augusta" title="Teatro Augusta" />
        </Text>
      </div>
    );
  }
}

export default TextVenue;
