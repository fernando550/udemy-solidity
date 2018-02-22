import React, { Component } from 'react';
import creator from '../ethereum/creator';
import Layout from '../components/layout';
import { Card, Button } from 'semantic-ui-react';

class Creator extends Component {
  static async getInitialProps() {
    const kickstarters = await creator.methods.viewAllKickstarters().call();
    return {kickstarters};
  }

  renderKickstarters() {
    const items = this.props.kickstarters.map(address => {
      return {
        header: address,
        description: <a>View</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />
  }

  render() {
    const items = this.props.kickstarters

    return (
      <Layout>
        <h3>All Campaigns</h3>
        <Button
          content='Create Kickstarter'
          icon='add circle'
          primary
        />
        <hr/>
        <div>{this.renderKickstarters()}</div>
      </Layout>
    );
  }
}

export default Creator;
