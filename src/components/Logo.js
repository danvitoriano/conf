import { Component } from 'react';

import logoPaths from '../utils/logoPaths';

class Logo extends Component {
  state = {
    logoNumber: 0,
  };

  componentDidMount() {
    this.animateIcon();
  };

  animateIcon = () => {
    setInterval(() => {
      this.setState(({ logoNumber }) => ({
        logoNumber: logoNumber === (logoPaths.length - 1) ? 0 : logoNumber + 1,
      }));
    }, 400);
  };

  renderLogo = () => logoPaths[this.state.logoNumber];

  render() {
    return (
      this.renderLogo()
    );
  }
}

export default Logo;
