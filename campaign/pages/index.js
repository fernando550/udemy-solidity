import React, { Component } from 'react';
import creator from '../ethereum/creator';
import Layout from '../components/layout';

class Creator extends Component {
  static async getInitialProps() {
    const kickstarters = await creator.methods.viewAllKickstarters().call();
    return {kickstarters};
  }

  // renderKickstarters() {
  //   const items = this.props.kickstarters
  // }

  render() {
    const items = this.props.kickstarters

    return (
      <Layout>
        <h1> this is the body </h1>
        <p>{items}</p>
      </Layout>
    );
  }
}

export default Creator;
