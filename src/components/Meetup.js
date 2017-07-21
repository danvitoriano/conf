import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Text from './Text';
import mapImage from '../media/images/mapImage.png';

const Cities = [
  {
    id: 1,
    name: 'Meetup São Paulo/SP',
    href: 'http://www.meetup.com/ReactJS-SP/',
  },
  {
    id: 2,
    name: 'Meetup Campinas/SP',
    href: 'https://www.meetup.com/React-Campinas',
  },
  {
    id: 3,
    name: 'Meetup Blumenau/SC',
    href: 'https://www.meetup.com/React-Blumenau/',
  },
  {
    id: 4,
    name: 'Meetup Florianópolis/SC',
    href: 'http://www.meetup.com/ReactJS-Floripa/',
  },
  {
    id: 5,
    name: 'Meetup Curitiba/PR',
    href: 'https://www.meetup.com/ReactJS-CWB/',
  },
];

const styles = {
  container: css({
    alignSelf: 'flex-end',
    background: Globals.colors.primary,
    width: '100vw',
    display: 'flex',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#06324F',
    fontWeight: 'bold',
  }),
  image: css({
    maxWidth: '100%',
  }),
  cities: css({
    display: 'flex',
    justifyContent: 'space-around',
    '@media(max-width: 720px)': {
      flexDirection: 'column',
    },
  }),
};

class TextMeetup extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text reverse title="MEETUPS" subtitle="ENCONTROS AO REDOR DO BRASIL">
          <br />
          <img src={mapImage} alt="" {...styles.image} />
          <div {...styles.cities}>
            {Cities.map(city => {
              return (
                <span key={city.id}>
                  <a {...styles.link} href={city.href} target="_blank">
                    {city.name}
                  </a>
                </span>
              );
            })}
          </div>
        </Text>
      </div>
    );
  }
}

export default TextMeetup;
