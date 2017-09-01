import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Item from './Item';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    display: 'flex',
    margin: '1em',
    color: Globals.colors.white,
    '@media(max-width: 720px)': {
      alignSelf: 'flex-end',
      display: 'block',
      width: '80%',
      margin: '0 auto',
    },
  }),
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Item title=" " subtitle={Globals.date.full}>
          <p>
            {/*{Globals.date.hour}*/}
          </p>
        </Item>

        <Item title="" subtitle={Globals.location.city}>
          <p>
            <strong>
              {/*{Globals.location.locale}*/}
            </strong>
            <br />
            <span>
              {/*{Globals.location.address}*/}
            </span>
          </p>
        </Item>
      </div>
    );
  }
}

export default Infos;
