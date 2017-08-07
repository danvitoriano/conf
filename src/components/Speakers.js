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

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="APRESENTAÇÕES CONFIRMADAS" subtitle="PALESTRANTES">
          <p>
            <span>RELAY MODERN</span>
            <br />
            <b>Sibelius Seraphini</b> São Paulo, Brasil
          </p>
          <p>
            <span>ISOMORPHIC REACT + REDUX APP</span>
            <br />
            <b>Matheus Marsiglio</b> São Paulo, Brasil
          </p>
          <p>
            <span>SCRATCHING REACT FIBER</span>
            <br />
            <b>Raphael Amorim</b> Rio de Janeiro, Brasil
          </p>
          <p>
            <span>THE MAGIC WORLD OF TESTS WITH JEST</span>
            <br />
            <b>Fernando Daciuk</b> Curitiba, Brasil
          </p>
        </Text>
      </div>
    );
  }
}

export default TextSpeakers;
