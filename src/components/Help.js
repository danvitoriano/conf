import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    alignItems: 'center',
    // background: '#F0F0F0',
    flexDirection: 'column',
    width: '100%',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  avatar: css({
    width: 250,
  }),
  wrap: css({
    // maxWidth: 350,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }),
};

class Help extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <div {...styles.wrap}>
          <Text reverse title="AJUDE O LÉO A VENCAR O CÂNCER" />
          <img
            {...styles.avatar}
            src="https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/11693998_846853015397041_97338119441874214_n.jpg?oh=812f24f0ee63d8d8a0b4756b90078e3a&oe=5A371CBE"
            alt=""
          />
          <br />
          <span>
            <a
              {...styles.link}
              href="http://leokz.com/campanha/"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              Clique e se envolva com esta causa
            </a>
          </span>
          <span>
            <a
              {...styles.link}
              href="https://www.facebook.com/groups/ajudeleokz/"
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              Página do Facebook
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Help;
