import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

import Card from './Card';
import Text from './Text';

const styles = {
  containerText: css({
    alignSelf: 'flex-end',
    background: '#FFFFFF',
    width: '100vw',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  container: css({
    background: '#FFFFFF',
    width: '100%',
    margin: '20px auto',
  }),
};

class Topics extends PureComponent {
  render() {
    return (
      <div {...styles.containerText}>
        <Text title="Tópicos" subtitle={Globals.topics.title}>
          <p>
            {Globals.topics.text}
          </p>
          <div {...styles.container}>
            <Card topic="REACT NATIVE" author="sibelius" votes="28+" />
            <Card topic="REACT + REDUX" author="Kirmayrtomaz" votes="25+" />
            <Card topic="CASES DE SUCESSO" author="phelippepuhle" votes="17+" />
            <Card topic="FIBER" author="sibelius" votes="15+" />
            <Card topic="SERVER SIDE RENDERING" author="dleitee" votes="13+" />
            <Card topic="RELAY" author="sibelius" votes="13+" />
            <Card topic="GraphQL + Apollo" author="sebas5384" votes="9+" />
            <Card
              topic="REACT NATIVE + FIREBASE"
              author="rodrigooler"
              votes="8+"
            />
            <Card
              topic="BEST PRATICES FOR REUSABLE UI COMPONENTS"
              author="rodrigooler"
              votes="11+"
            />
            <Card topic="TDD + REACT" author="she-dev" votes="10+" />
            <Card topic="PWA + REDUX" author="danvitoriano" votes="10+" />
            <Card topic="PWA + REACT" author="fdaciuk" votes="12+" />
            <Card
              topic="REACT NATIVE OFFLINE FIRST"
              author="soutot"
              votes="8+"
            />
            <Card topic="RELAY SUBSCRIPTIONS" author="sibelius" votes="9+" />
            <Card
              topic="PUSH NOTIFICATION + REACT NATIVE"
              author="felipedaraujo"
              votes="9+"
            />
          </div>
        </Text>
      </div>
    );
  }
}

export default Topics;
