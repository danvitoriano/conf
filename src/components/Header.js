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
  h1: css({
    alignSelf: 'flex-start',
    maxWidth: 401,
    paddingLeft: 30,
    fontSize: 52,
  }),
};

const Header = () =>
  <div {...styles.container}>
    <Title />
    {/* <Logo />  */}
    <h1 {...styles.h1}>
      O CONHECIMENTO
      NUNCA ESTEVE
      TÃO PERTO.
    </h1>
    <Ticket />
    <Infos />
  </div>;

export default Header;
