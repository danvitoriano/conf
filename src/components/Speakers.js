import React, { PureComponent } from 'react';
import { css } from 'glamor';
import Globals from '../utils/Globals';

import Text from './Text';

import sibeliusImg from '../media/images/speakers/sibelius-pb.jpg';
import daciukImg from '../media/images/speakers/daciuk-pb.jpg';
import marsiglioImg from '../media/images/speakers/marsiglio-pb.jpg';
import amorimImg from '../media/images/speakers/amorim-pb.jpg';

const styles = {
  container: css({
    background: Globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  name: css({
    fontSize: 48,
    color: Globals.colors.primary,
    margin: 0,
    marginTop: 10,
    lineHeight: 1,
    // padding: '20px 0px',
  }),
  locale: css({
    fontSize: 14,
    margin: 0,
  }),
  theme: css({
    fontSize: 36,
    color: Globals.colors.secondary,
    margin: 0,
  }),
  card: css({
    width: 300,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: Globals.colors.white,
    borderRadius: 0,
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
    theme: 'Relay Modern',
    origin: 'São Paulo, Brazil',
    github: '',
    avatar: sibeliusImg,
  },
  {
    id: 2,
    name: 'Matheus Marsiglio',
    theme: 'Isomorphic React + Redux App',
    origin: 'São Paulo, Brazil',
    github: '',
    avatar: marsiglioImg,
  },
  {
    id: 3,
    name: 'Raphael Amorim',
    theme: 'Scratching React Fiber',
    origin: 'Rio de Janeiro, Brazil',
    github: '',
    avatar: amorimImg,
  },
  {
    id: 4,
    name: 'Fernando Daciuk',
    theme: 'The Magic World of Tests with Jest',
    origin: 'Curitiba, Brazil',
    github: '',
    avatar: daciukImg,
  },
];

class TextSpeakers extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Speakers" reverse />
        <div {...styles.cards}>
          {Speakers.map(speaker => {
            return (
              <div key={speaker.id} {...styles.card}>
                <div
                  {...css({
                    backgroundImage: `url('${speaker.avatar}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 300,
                  })}
                />
                <h4 {...styles.name}>
                  {speaker.name}
                </h4>
                <span {...styles.locale}>
                  {speaker.origin}
                </span>
                <h5 {...styles.theme}>
                  {speaker.theme}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TextSpeakers;
