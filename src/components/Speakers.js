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
            RELAY MODERN<br />
            <b>Sibelius Seraphini</b> São Paulo, Brasil
          </p>
          <p>
            REACT ********** <span>divulgação em breve</span><br />
            <b>******** ******</b> ********, Brasil
          </p>
        </Text>
      </div>
    );
  }
}

export default TextSpeakers;
