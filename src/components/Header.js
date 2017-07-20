import React from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ticket from './Ticket';

import BackgroundPattern from '../media/images/backgroundPattern.png';
import monkey from '../media/images/monkey.png';

const styles = {
  container: css({
    backgroundImage: `url(${BackgroundPattern}), url(${monkey})`,
    backgroundRepeat: 'repeat, no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '3%, contain',
    color: 'white',
    width: '100%',
    height: '100vh',
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    {/* <Logo /> */}
    <Ticket />
    <Infos />
  </div>;

export default Header;
