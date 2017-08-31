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
    color: Globals.colors.primary,
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.white,
    padding: '20px 40px',
    background: Globals.colors.main,
    cursor: 'pointer',
    textDecoration: 'none',
    letterSpacing: '1.5px',
    fontSize: '22px',

    ':hover': {
      backgroundColor: Globals.colors.background,
      // border: '1px solid',
      // borderColor: Globals.colors.primary,
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
        <Text title="TICKETS">
          <p>All tickets available only at Sympla:</p>
          <br />
          <a
            href="https://www.sympla.com.br/react-conf-brasil-2017__161239"
            target="_blank"
            rel="noopener noreferrer"
            {...styles.link}
          >
            <b>BUY TICKETS</b>
          </a>
        </Text>
      </div>
    );
  }
}

export default TextBuyTickets;
