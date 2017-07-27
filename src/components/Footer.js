import React, { PureComponent } from 'react';
import { css, before } from 'glamor';

import Item from './Item';

const styles = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#ffffff',
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
          <Item title="#REACTCONFBR" subtitle="REACT BRASIL" color="white" />
          <Item title="SEJA UM PALESTRANTE">
            <p>
              <a {...styles.link} href="https://www.papercall.io/reactconfbr">
                Call For Papers
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
