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
    color: Globals.colors.white,
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontWeight: 'bold',
    marginLeft: 30,
  }),
  titleSpan: css({
    color: Globals.colors.primaryLight,
  }),
  hrContainer: css({
    width: 25,
    marginLeft: 30,
  }),
  hr: css({
    borderColor: Globals.colors.primaryLight,
  }),
  subtitle: css({
    color: Globals.colors.primaryLight,
    textTransform: 'uppercase',
    fontSize: 17,
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
    <div {...styles.hrContainer}>
      <hr {...styles.hr} />
    </div>

    <h5 {...styles.subtitle}>
      {Globals.location.country} {Globals.date.year}
    </h5>
  </div>;

export default Title;
