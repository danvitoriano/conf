import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Pitch from './Pitch';
import Sponsor from './Sponsor';
import Topics from './Topics';
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
        <Sponsor />
        <Meetup />
        <Help />
        <Contact />
      </div>
    );
  }
}

export default App;
