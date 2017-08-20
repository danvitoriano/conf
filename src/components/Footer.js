import React, { PureComponent } from 'react';
import { css, before } from 'glamor';
import Globals from '../utils/Globals';

import Item from './Item';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: Globals.colors.white,
    width: '100%',
    '@media(max-width: 720px)': {
      width: '100%',
      flexDirection: 'column',
    },
  }),

  wrapper: css({
    display: 'flex',
    // alignItems: 'center',
    width: '100%',
    maxWidth: 1000,
    justifyContent: 'space-between',
    '@media(max-width: 720px)': {
      width: '100%',
      flexDirection: 'column',
    },
  }),

  link: css({
    background: Globals.colors.secondary,
    color: Globals.colors.link,
  }),

  before: before({
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '100%',
    height: '0',
    width: '0',
    borderColor: 'transparent transparent #ffc819',
    borderStyle: 'solid',
    borderWidth: '0 0 3vw 100vw',
  }),
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container} {...styles.before}>
        <div {...styles.wrapper}>
          <Item title="#REACTCONFBR" subtitle="REACT BRASIL" />
          <Item title="COMPROMISSO">
            <p>
              <a
                {...styles.link}
                href="http://www.reactconfbr.com.br/files/react_conf_brasil-codigo_de_conduta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código de Conduta
              </a>
            </p>
          </Item>
          <Item>
            <p>
              Branding:{' '}
              <a {...styles.link} href="https://informatica.sp.senai.br">
                Escola SENAI Informática
              </a>
            </p>
            <p>
              Criado com:{' '}
              <a
                {...styles.link}
                href="https://github.com/facebookincubator/create-react-app/"
              >
                create-react-app
              </a>
            </p>
            <p>
              React Confs no mundo:{' '}
              <a
                {...styles.link}
                href="https://facebook.github.io/react/community/conferences.html"
              >
                Conferences React
              </a>
            </p>
          </Item>
        </div>
      </div>
    );
  }
}

export default Footer;
