import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'flex-end',
      display: 'block',
      width: '80%',
      margin: '0 auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    padding: '20px 30px',
    background: Globals.colors.main,
    // borderRadius: '4px',
    // border: '1px solid',
    // borderColor: 'transparent',
    cursor: 'pointer',
    fontWeight: 'light',
    textDecoration: 'none',
    position: 'absolute',
    top: '35px',
    right: '30px',
    letterSpacing: '1.5px',
    fontSize: '22px',

    ':hover': {
      backgroundColor: Globals.colors.white,
      // border: '1px solid',
      // borderColor: Globals.colors.primary,
      // color: Globals.colors.primary,
    },

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
      position: 'relative',
      marginBottom: '20px',
      top: '0',
      right: '0',
    },
  }),
};

class Ingresso extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <a
          href="https://www.sympla.com.br/react-conf-brasil-2017__161239"
          target="_blank"
          rel="noopener noreferrer"
          {...styles.link}
        >
          <b>Ingressos</b>
        </a>
      </div>
    );
  }
}

export default Ingresso;
