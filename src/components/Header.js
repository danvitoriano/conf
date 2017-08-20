import React from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';
import Ticket from './Ticket';

import BackgroundPattern from '../media/images/backgroundPattern.png';

const styles = {
  container: css({
    // backgroundImage: `url(${BackgroundPattern})`,
    background: Globals.colors.white,
    color: Globals.colors.primary,
    width: '100%',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    <Logo />
    <Ticket />
    <Infos />
  </div>;

export default Header;
