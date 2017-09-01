import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.main,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: Globals.colors.background,
    display: 'block',
    margin: '1em',
    textDecoration: 'none',
  }),
};

class TextMeetup extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Comunidade React Brasil">
          <br />

          <a
            {...styles.link}
            href="http://www.meetup.com/ReactJS-SP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup São Paulo/SP
          </a>

          <a
            {...styles.link}
            href="https://www.meetup.com/React-Campinas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup Campinas/SP
          </a>

          <a
            {...styles.link}
            href="https://www.meetup.com/React-Blumenau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup Blumenau/SC
          </a>

          <a
            {...styles.link}
            href="http://www.meetup.com/ReactJS-Floripa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup Florianópolis/SC
          </a>

          <a
            {...styles.link}
            href="https://www.meetup.com/ReactJS-CWB/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup Curitiba/PR
          </a>

          <a
            {...styles.link}
            href="https://www.meetup.com/pt-BR/React-Rio-de-Janeiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meetup Rio de Janeiro/RJ
          </a>
        </Text>
      </div>
    );
  }
}

export default TextMeetup;
