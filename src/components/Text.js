import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    borderTop: `3px solid ${Globals.colors.primary}`,
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
    '> h3': {
      color: Globals.colors.primary,
      margin: 0,
      fontSize: 30,
      textTransform: 'uppercase',
    },
    '> h2': {
      margin: 0,
      paddingTop: 20,
      color: Globals.colors.gray,
      textTransform: 'uppercase',
    },
    '> h4': {
      color: Globals.colors.darken,
      margin: 0,
      letterSpacing: 6,
    },
    '> p': {
      color: Globals.colors.darken,
      fontSize: '20px',
      margin: 0,
    },
    '> span': {
      color: Globals.colors.darken,
      fontSize: '20px',
      padding: '20px 20px 0 20px',
      display: 'inline-block',
    },
    '> p span': {
      color: Globals.colors.darken,
      fontSize: '14px',
      color: Globals.colors.primary,
      padding: '0px 20px 0 20px',
      display: 'inline-block',
    },
    '> img': {
      maxWidth: '100%',
    },
    '@media(max-width: 720px)': {
      width: '80%',
      maxWidth: '80%',
    },
  }),
};

class Text extends PureComponent {
  render() {
    const { title, subtitle, reverse, children } = this.props;

    return (
      <div
        {...styles.container}
        style={{ borderTop: reverse && '3px solid white' }}
      >
        <h3 style={{ color: reverse && '#080C27' }}>{title}</h3>
        <h2 style={{ color: reverse && 'white' }}>{subtitle}</h2>

        {children}
      </div>
    );
  }
}

export default Text;
