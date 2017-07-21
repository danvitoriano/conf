import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

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
    backgroundSize: '3%, 55%',
    color: 'white',
    width: '100%',
    height: '100vh',
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '@media(max-width: 720px)': {
      backgroundSize: '10%, 100%',
      backgroundPosition: 'left top, -557% 93%',
    },
  }),
  h1: css({
    alignSelf: 'flex-start',
    maxWidth: 401,
    paddingLeft: 130,
    fontSize: 52,

    '> span': {
      color: Globals.colors.primary,
    },
    '@media(max-width: 720px)': {
      fontSize: 25,
      paddingLeft: 30,
      color: Globals.colors.primary,
      alignSelf: 'center',
    },
  }),
  logo: css({
    alignSelf: 'flex-start',
    paddingLeft: 130,

    '> span': {
      color: Globals.colors.primary,
    },
    '@media(max-width: 720px)': {
      paddingLeft: 0,
      alignSelf: 'center',
    },
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    <div {...styles.logo}>
      <Logo />
    </div>
    <h1 {...styles.h1}>
      O CONHECIMENTO
      NUNCA ESTEVE
      <span> TÃO PERTO.</span>
    </h1>
    <Ticket />
    <Infos />
  </div>;

export default Header;
