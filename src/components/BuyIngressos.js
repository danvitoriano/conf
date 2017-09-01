import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.secondary,
    width: '100vw',
    display: 'flex',
    color: Globals.colors.white,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    padding: '20px 0',
    width: '80%',
    maxWidth: 400,
    margin: '0 auto 2em auto',
    display: 'block',
    background: Globals.colors.main,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    // fontSize: '22px',

    ':hover': {
      backgroundColor: Globals.colors.lighMain,
      // border: '1px solid',
      // borderColor: Globals.colors.primary,
      // color: Globals.colors.primary,
    },

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
    },
  }),
};

class TextBuyIngressos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Ingressos">
          <p>All ingressos available only at Sympla:</p>
          <br />
          <a
            href="https://www.sympla.com.br/react-conf-brasil-2017__161239"
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >
            <b>Comprar ingressos</b>
          </a>
        </Text>
      </div>
    );
  }
}

export default TextBuyIngressos;
