import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Text from './Text';

const styles = {
  container: css({
    background: '#00DBFF',
    width: '100vw',
    alignItems: 'center',
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
  card: css({
    width: 275,
    maxWidth: '100%',
    padding: '6px 11px',
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 10,
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
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
    avatar: 'https://avatars0.githubusercontent.com/u/5414299?v=4&s=460',
  },
  {
    id: 3,
    name: 'Raphael Amorim',
    theme: 'SCRATCHING REACT FIBER',
    origin: 'Rio de Janeiro, Brasil',
    github: '',
    avatar: 'https://avatars0.githubusercontent.com/u/3630346?v=4&s=460',
  },
  {
    id: 4,
    name: 'Fernando Daciuk',
    theme: 'DIVULGAÇÃO EM BREVE',
    origin: 'Curitiba, Brasil',
    github: '',
    avatar: 'https://avatars2.githubusercontent.com/u/487669?v=4&s=460',
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="APRESENTAÇÕES CONFIRMADAS" reverse />
        <div {...styles.cards}>
          {Speakers.map(speaker => {
            return (
              <div key={speaker.id} {...styles.card}>
                <div
                  {...css({
                    backgroundImage: `url('${speaker.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 220,
                  })}
                />
                <p>
                  <strong {...styles.theme}>
                    {speaker.theme}
                  </strong>
                </p>
                <p>
                  <b>{speaker.name} </b> {speaker.origin}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSpeakers;
