import React, { Component } from 'react';
import creator from '../ethereum/creator';

class Creator extends Component {
  static async getInitialProps() {
    const kickstarters = await creator.methods.viewAllKickstarters().call();
    return {kickstarters};
  }

  render() {
    return <div>{this.props.kickstarters[0]}</div>
  }
}

export default Creator;
