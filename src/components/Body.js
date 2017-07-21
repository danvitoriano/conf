import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Pitch from './Pitch';
import Venue from './Venue';
import Speakers from './Speakers';
import Sponsor from './Sponsor';
import Topics from './Topics';
import C4P from './C4P';
import BuyTickets from './BuyTickets';
import Contact from './Contact';
import Meetup from './Meetup';
import Help from './Help';

const styles = {
  container: css({
    display: 'flex',
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
        <Pitch />
        <Topics />
        <Venue />
        <Speakers />
        <BuyTickets />
        <C4P />
        <Sponsor />
        <Meetup />
        <Help />
        <Contact />
      </div>
    );
  }
}

export default App;
