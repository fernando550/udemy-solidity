import React, { Component } from 'react';
import creator from '../ethereum/creator';
import Layout from '../components/layout';
import { Card, Button } from 'semantic-ui-react';
import { Link } from '../routes';

class HomePage extends Component {
  static async getInitialProps() {
    const kickstarters = await creator.methods.viewAllKickstarters().call();
    return {kickstarters};
  }

  renderKickstarters() {
    const items = this.props.kickstarters.map(address => {
      return {
        header: address,
        description: <Link route={`/kickstarters/${address}`}><a>View</a></Link>,
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
        <Link route='/kickstarters/new'>
          <a>
            <Button
              content='Create Kickstarter'
              icon='add circle'
              primary
            />
          </a>
        </Link>
        <hr/>
        <div>{this.renderKickstarters()}</div>
      </Layout>
    );
  }
}

export default HomePage;
