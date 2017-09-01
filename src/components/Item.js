import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    // borderTop: `3px solid ${Globals.colors.primary}`,
    textAlign: 'left',
    margin: '30px',
    textTransform: 'uppercase',
    // lineHeight: '1em',
    '> h3': {
      color: Globals.colors.secondary,
      margin: 0,
      letterSpacing: 1,
      // lineHeight: '1em',
    },
    '> h2': {
      margin: 0,
      color: Globals.colors.main,
      letterSpacing: 1,
      // lineHeight: '1em',
    },
    '> h4': {
      color: Globals.colors.main,
      margin: 0,
      // lineHeight: '1em',
      letterSpacing: 6,
    },
    '> p': {
      color: Globals.colors.white,
      letterSpacing: 2,
      margin: 0,
      // lineHeight: '1em',
    },
    '> strong': {
      color: Globals.colors.white,
      letterSpacing: 2,
      margin: 0,
      lineHeight: '1em',
    },
    '> span': {
      color: Globals.colors.white,
      letterSpacing: 2,
      margin: 0,
      lineHeight: '1em',
    },

    '@media(max-width: 720px)': {
      margin: '5px',
    },
  }),

  light: css({ color: 'white' }),
};

class Item extends PureComponent {
  render() {
    const { title, subtitle, children, color } = this.props;

    return (
      <div {...styles.container}>
        <h3>
          {title}
        </h3>
        {color
          ? <h2 {...css({ color: color })}>
              {subtitle}
            </h2>
          : <h2>
              {subtitle}
            </h2>}
        {children}
      </div>
    );
  }
}

export default Item;
