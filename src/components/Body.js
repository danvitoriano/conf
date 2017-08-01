import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Pitch from './Pitch';
import Venue from './Venue';
import Speakers from './Speakers';
import Sponsor from './Sponsor';
import Topics from './Topics';
import C4P from './C4P';
import BuyTickets from './BuyTickets';
import Meetup from './Meetup';
import HelpAndContact from './HelpAndContact';

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
        <Sponsor />
        <Meetup />
        <C4P />
        <HelpAndContact />
      </div>
    );
  }
}

export default App;
