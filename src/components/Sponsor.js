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
        <Text
          title="PATROCINADORES"
          subtitle="APOIE O EVENTO E FAÇA SUA MARCA APARECER"
        >
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
