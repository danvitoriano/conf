import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
};

class Help extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="A LUTA AINDA NÃO ACABOU" subtitle="CONTINUE AJUDANDO O LEO A VENCER O CÂNCER">
          <br />
          <span>
            <a {...styles.link} href="http://leokz.com/campanha/" target="_blank">
              Clique e se envolva com esta causa
            </a>
          </span>
          <span>
            <a {...styles.link} href="https://www.facebook.com/groups/ajudeleokz/" target="_blank">
              Página do Facebook
            </a>
          </span>
        </Text>
      </div>
    );
  }
}

export default Help;
