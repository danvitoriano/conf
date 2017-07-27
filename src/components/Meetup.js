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

class TextMeetup extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="MEETUPS" subtitle="ENCONTROS AO REDOR DO BRASIL">
          <br />
          <span>
            <a
              {...styles.link}
              href="http://www.meetup.com/ReactJS-SP/"
              target="_blank"
            >
              Meetup São Paulo/SP
            </a>
          </span>
          <span>
            <a
              {...styles.link}
              href="https://www.meetup.com/React-Campinas"
              target="_blank"
            >
              Meetup Campinas/SP
            </a>
          </span>
          <span>
            <a
              {...styles.link}
              href="https://www.meetup.com/React-Blumenau/"
              target="_blank"
            >
              Meetup Blumenau/SC
            </a>
          </span>
          <span>
            <a
              {...styles.link}
              href="http://www.meetup.com/ReactJS-Floripa/"
              target="_blank"
            >
              Meetup Florianópolis/SC
            </a>
          </span>
          <span>
            <a
              {...styles.link}
              href="https://www.meetup.com/ReactJS-CWB/"
              target="_blank"
            >
              Meetup Curitiba/PR
            </a>
          </span>
        </Text>
      </div>
    );
  }
}

export default TextMeetup;
