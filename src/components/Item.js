import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    borderTop: `3px solid ${Globals.colors.primary}`,
    textAlign: 'left',
    margin: '30px',
    textTransform: 'uppercase',
    '> h3': {
      color: Globals.colors.primary,
      margin: 0,
      letterSpacing: 2,
    },
    '> h2': {
      margin: 0,
      letterSpacing: 2,
    },
    '> h4': {
      color: Globals.colors.darken,
      margin: 0,
      letterSpacing: 6,
    },
    '> p': {
      color: Globals.colors.primary,
      letterSpacing: 2,
    },
    '> strong': {
      color: Globals.colors.darken,
      letterSpacing: 2,
    },
    '> span': {
      color: Globals.colors.primary,
      letterSpacing: 2,
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
