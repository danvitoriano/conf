import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from './utils/Globals';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

css.global('html, body', {
  padding: 0,
  margin: 0,
  fontFamily: 'Rajdhani, sans-serif',
  background: Globals.colors.transparent,
});

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
