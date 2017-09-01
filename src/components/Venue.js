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
    background: Globals.colors.base,
    width: '100vw',
    display: 'flex',
    '> img': {
      maxWidth: '100%',
    },
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
};

class TextVenue extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Localização" subtitle="Teatro Augusta, São Paulo, Brasil">
          <p>
            {Globals.event.locale}
          </p>
          <p>
            <br />
            No coração de São Paulo, o histórico Teatro Augusta será o palco de
            apresentações únicas.
          </p>
          <img src={imgAugusta} alt="Teatro Augusta" title="Teatro Augusta" />
          <small>Foto: Divulgação</small>
          <p>Rua Augusta, 943 - Cerqueira César, São Paulo / SP - Brasil</p>
        </Text>
      </div>
    );
  }
}

export default TextVenue;
