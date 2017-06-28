import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  container: css({

    alignSelf: 'flex-end',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'flex-end',
      display:'block',
      width:'80%',
      margin:'0 auto'
    }
  }),
  link: css({
    color: Globals.colors.background,
    padding: '10px 22px',
    background: Globals.colors.primary,
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    'position': 'absolute',
    'top': '35px',
    'right': '30px',
    'letterSpacing': '1.5px',
    'fontSize': '22px',

    ':hover' : {
      backgroundColor: Globals.colors.background,
      border: '1px solid',
      borderColor: Globals.colors.primary,
      color: Globals.colors.primary,
    },

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center',
      'position': 'relative',
      'marginBottom': '20px',
      'top': '0',
      'right': '0',
    },
  })
};

class Item extends PureComponent {
  render() {
    const { title, subtitle, children, color } = this.props;

    return (
      <div {...styles.container}>
        <a href=""  {...styles.link}>
          <b>INSCREVA-SE</b>
        </a>
      </div>
    );
  }
}

export default Item;
