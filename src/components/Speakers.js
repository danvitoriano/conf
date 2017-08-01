import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: '#f0f0f0',
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  theme: css({
    fontSize: 26,
    color: 'rgb(97, 218, 251)',
    padding: '20px 0px',
  }),
};

const Speakers = [
  {
    id: 1,
    name: 'Sibelius Seraphini',
    theme: 'RELAY MODERN',
    origin: 'São Paulo, Brasil',
    github: '',
    avatar: 'https://avatars3.githubusercontent.com/u/2005841?v=4&s=460',
  },
  {
    id: 2,
    name: 'Matheus Marsiglio',
    theme: 'ISOMORPHIC REACT + REDUX APP',
    origin: 'São Paulo, Brasil',
    github: '',
    avatar: 'https://avatars3.githubusercontent.com/u/2005841?v=4&s=460',
  },
  {
    id: 3,
    name: 'Raphael Amorim ',
    theme: 'SCRATCHING REACT FIBER',
    origin: 'Rio de Janeiro, Brasil',
    github: '',
    avatar: 'https://avatars3.githubusercontent.com/u/2005841?v=4&s=460',
  },
  {
    id: 4,
    name: 'Fernando Daciuk',
    theme: 'DIVULGAÇÃO EM BREVE',
    origin: 'Curitiba, Brasil',
    github: '',
    avatar: 'https://avatars3.githubusercontent.com/u/2005841?v=4&s=460',
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="APRESENTAÇÕES CONFIRMADAS" subtitle="PALESTRANTES">
          {Speakers.map(speaker => {
            return (
              <p key={speaker.id}>
                <strong {...styles.theme}>{speaker.theme}</strong>
                <br />
                <b>{speaker.name}</b> {speaker.origin}
                <img src={speaker.avatar} alt={speaker.name} />
              </p>
            );
          })}
        </Text>
      </div>
    );
  }
}

export default TextSpeakers;
