import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    // borderTop: `3px solid ${Globals.colors.primary}`,
    width: '100%',
    maxWidth: 1000,
    margin: '20px auto',
    minHeight: '100vh',
    '> h2': {
      margin: 0,
      fontSize: 64,
      color: Globals.colors.header,
      fontWeight: 'lighter',
      // textTransform: 'uppercase',
    },
    '> h3': {
      color: Globals.colors.subheader,
      fontSize: 48,
      margin: 0,
      // textTransform: 'uppercase',
    },
    '> h4': {
      color: Globals.colors.topic,
      margin: 0,
      fontSize: 32,
    },
    '> p': {
      color: Globals.colors.darken,
      fontSize: '20px',
    },
    '> span': {
      color: Globals.colors.darken,
      fontSize: '20px',
      padding: '20px 20px 0 20px',
      display: 'inline-block',
    },
    '> p span': {
      fontSize: '26px',
      color: Globals.colors.primary,
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
    const { title, subtitle, children } = this.props;

    return (
      <div {...styles.container}>
        <h2>
          {title}
        </h2>
        <h3>
          {subtitle}
        </h3>

        {children}
      </div>
    );
  }
}

export default Text;
