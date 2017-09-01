import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    // borderTop: `3px solid ${Globals.colors.primary}`,
    width: '100%',
    fontWeight: 'lighter',
    maxWidth: 1000,
    margin: '2em auto',
    textAlign: 'center',
    '> h1': {
      fontSize: '3.998em',
      margin: '1em',
    },
    '> h2': {
      margin: '1em',
      // fontWeight: 'lighter',
      fontSize: '2.827em',
      // color: Globals.colors.header,
    },
    '> h3': {
      fontWeight: 'lighter',
      // color: Globals.colors.subheader,
      fontSize: '1.999em',
      margin: '1em',
    },
    '> h4': {
      color: Globals.colors.topic,
      margin: '1em',
      fontWeight: 'lighter',
      fontSize: '1.414em',
    },
    '> h5': {
      color: Globals.colors.topic,
      margin: '1em',
      fontWeight: 'lighter',
      fontSize: '1em',
    },
    '> p': {
      // color: Globals.colors.primary,
      // fontSize: '20px',
      margin: '1em',
      fontSize: '1em',
    },
    '> span': {
      color: Globals.colors.darken,
      display: 'inline-block',
      margin: '1em',
      fontSize: '1em',
    },
    '> p span': {
      // fontSize: '26px',
      fontSize: '1em',
      color: Globals.colors.primary,
      display: 'inline-block',
      margin: '1em',
    },
    '> img': {
      maxWidth: '100%',
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
