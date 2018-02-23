import React, { Component } from 'react';
import Layout from '../../components/layout';
import Kickstarter from '../../ethereum/kickstarter';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';

class ShowKickstarterPage extends Component {
  static async getInitialProps(props) {
    const kickstarter = Kickstarter(props.query.address);
    const summary = await kickstarter.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      projectOwner: summary[4]
    };
  }

  renderKickstarter() {
    const items = [
      {
        header: this.props.projectOwner,
        meta: 'Address of Project Owner',
        description: 'Administrator and creator of the kickstarter',
        style: {overflowWrap: 'break-word'}
      },

      {
        header: this.props.minimumContribution,
        meta: 'Minimum Contribution (Wei)',
        description: 'Minimum donation amount that is accepted'
      },

      {
        header: web3.utils.fromWei(this.props.balance, 'ether'),
        meta: 'Amount Raised (ether)',
        description: 'Current amount raised for the kickstarter campaign'
      },

      {
        header: this.props.approversCount,
        meta: 'Number of Donators',
        description: 'Number of contributors on this project'
      },

      {
        header: this.props.requestsCount,
        meta: 'Number of Requests',
        description: 'Current requests open under this project'
      }
    ]

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>show page</h3>
        <Grid>
          <Grid.Column width={10}>
            {this.renderKickstarter()}
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address}/>
          </Grid.Column>
        </Grid>
      </Layout>
    )
  }
}

export default ShowKickstarterPage;
