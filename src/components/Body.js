import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Event from './Event';
import Venue from './Venue';
import Speakers from './Speakers';
import Sponsor from './Sponsor';
import Topics from './Topics';
import C4P from './C4P';
import BuyIngressos from './BuyIngressos';
import Contact from './Contact';
import Meetup from './Meetup';
import Help from './Help';

const styles = {
  container: css({
    display: 'flex',
    background: Globals.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  }),
};

class App extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Event />
        <Venue />
        <Speakers />
        <BuyIngressos />
        <Sponsor />
        <Meetup />
        <Contact />
      </div>
    );
  }
}

export default App;
