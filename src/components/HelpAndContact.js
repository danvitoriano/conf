import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Contact from './Contact';
import Help from './Help';

const styles = {
  container: css({
    alignItems: 'center',
    background: '#00DBFF',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  }),
  link: css({
    color: '#666666',
  }),
  wrap: css({
    width: '100%',
    maxWidth: 1000,
    display: 'flex',
    justifyContent: 'space-between',
  }),
};

class HelpAndContact extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <div {...styles.wrap}>
          <Help />
          <Contact />
        </div>
      </div>
    );
  }
}

export default HelpAndContact;
