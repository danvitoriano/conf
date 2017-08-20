import React from 'react';
import { css } from 'glamor';

import Globals from '../utils/Globals';

const styles = {
  header: css({
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'left',
  }),
  title: css({
    color: Globals.colors.gray,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 4,
    // fontWeight: 'bold',
    marginLeft: 30,
    fontSize: 72,
  }),
  titleSpan: css({
    color: Globals.colors.main,
  }),
  hrContainer: css({
    width: 25,
    marginLeft: 30,
  }),
  hr: css({
    borderColor: Globals.colors.primary,
  }),
  subtitle: css({
    color: Globals.colors.primary,
    textTransform: 'uppercase',
    fontSize: 24,
    margin: 0,
    marginLeft: 30,
  }),
};

const Title = () =>
  <div {...styles.header}>
    <h1 {...styles.title}>
      React
      <span {...styles.titleSpan}>Conf</span>
    </h1>

    <p {...styles.subtitle}>
      {Globals.location.country} {Globals.date.year}
    </p>
  </div>;

export default Title;
