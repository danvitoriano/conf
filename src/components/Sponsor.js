import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#f0f0f0',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
};

class TextSponsor extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="APOIOS" subtitle="">
          <p>
            <span style={{ fontWeight: 'bold' }}>Taller</span>,{' '}
            <span style={{ fontWeight: 'bold' }}>Dev Na Estrada</span>,{' '}
            <span style={{ fontWeight: 'bold' }}>Fullcircle</span>,{' '}
            <span style={{ fontWeight: 'bold' }}>Codamos Club</span>
          </p>
          <p>
            Informações sobre cotas de patrocínio e apoios: <br />
            <a href="mailto:reactconfbr@gmail.com" {...styles.link}>
              <b>reactconfbr@gmail.com</b>
            </a>
          </p>
        </Text>
      </div>
    );
  }
}

export default TextSponsor;
