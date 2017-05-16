import React from 'react';
import { css } from 'glamor';

import Logo from './Logo';
import Infos from './Infos';
import Title from './Title';

import BackgroundPattern from '../media/images/backgroundPattern.png';

const styles = {
  container: css({
    backgroundImage: `url(${BackgroundPattern})`,
    color: 'white',
    width: '100%',
    height: '100vh',
    minWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
};

const Header = () => (
  <div {...styles.container}>
    <Title />
    <Logo />
    <Infos />
  </div>
);

export default Header;
