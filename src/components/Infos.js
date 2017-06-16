import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Item from './Item';

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
    color: '#666666',
    padding: '10px 15px',
    background: Globals.colors.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid white',
    textDecoration: 'none',

    ':hover' : {
      backgroundColor: 'transparent',
      color: Globals.colors.primary,
    },

    '@media(max-width: 720px)': {
      display: 'block',
      textAlign: 'center'
    },
  }),
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Item title="INGRESSO" subtitle="1º LOTE">
          <p>
            <a href=""  {...styles.link}>
              <b>INSCREVA-SE</b>
            </a>
          </p>
        </Item>

        <Item title="DATA" subtitle={Globals.date.full}>
          <p>{Globals.date.hour}</p>
        </Item>

        <Item title="LOCAL" subtitle={Globals.location.city}>
          <p>{Globals.location.country}</p>
        </Item>
      </div>
    );
  }
}

export default Infos;
