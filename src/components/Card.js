import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({
    textAlign: 'left',
    textTransform: 'uppercase',
    background: '#FFFFFF',
    display: 'inline-block',
    columnBreakInside: 'avoid',
    border: '2px solid #fcfcfc',
    boxShadow: '0 1px 2px rgba(34, 25, 25, 0.4)',
    borderTop: `3px solid ${Globals.colors.primary}`,
    margin: '0 10px 15px',
    padding: '5px 10px',
    '> h3': {
      color: Globals.colors.primary,
      margin: '0 10px',
    },
    '> h4': {
      color: Globals.colors.gray,
      margin: '0 10px',
    },
    '> p': {
      color: Globals.colors.darken,
      margin: '0 10px',
    },
    '@media(max-width: 720px)': {
      width: '100%',
      margin: '10px 0',
      padding: '5px 0px',
    }
  }),
};

class Card extends PureComponent {
  render() {
    const { topic, author, votes } = this.props;

    return (
      <div {...styles.container}>
        <h3>{topic}</h3>
        <h4>{author}</h4>
        <p>{votes}</p>
      </div>
    );
  }
}

export default Card;
