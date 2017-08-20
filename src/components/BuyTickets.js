import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';
import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.white,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    padding: '10px 22px',
    background: Globals.colors.shout,
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    ':hover': {
      backgroundColor: Globals.colors.background,
      border: '1px solid',
      borderColor: Globals.colors.primary,
      color: Globals.colors.primary,
    },

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
    },
  }),
};

class TextBuyTickets extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="COMPRE AGORA" subtitle="INGRESSOS">
          <br />
          <a
            href="https://www.sympla.com.br/react-conf-brasil-2017__161239"
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >
            <b>3º LOTE R$250,00</b>
          </a>
        </Text>
      </div>
    );
  }
}

export default TextBuyTickets;
