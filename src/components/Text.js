import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    // borderTop: `3px solid ${Globals.colors.primary}`,
    width: '100%',
    maxWidth: 1000,
    margin: '5em auto',
    '> h1': {
      fontSize: '3.998em',
      margin: '0 0 0.33em 0',
    },
    '> h2': {
      margin: '0 0 0.33em 0',
      fontSize: '2.827em',
      color: Globals.colors.header,
      fontWeight: 'light',
      textTransform: 'uppercase',
    },
    '> h3': {
      color: Globals.colors.subheader,
      fontSize: '1.999em',
      margin: '0 0 0.33em 0',
    },
    '> h4': {
      color: Globals.colors.topic,
      margin: '0 0 0.33em 0',
      fontWeight: 'lighter',
      fontSize: '1.414em',
    },
    '> h5': {
      color: Globals.colors.topic,
      margin: '0 0 0.33em 0',
      fontWeight: 'lighter',
      fontSize: '1em',
    },
    '> p': {
      // color: Globals.colors.primary,
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
        <h3>
          {subtitle}
        </h3>
        <h2>
          {title}
        </h2>

        {children}
      </div>
    );
  }
}

export default Text;
