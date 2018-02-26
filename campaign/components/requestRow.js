import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3';
import Kickstarter from '../ethereum/kickstarter';

class RequestRow extends Component {
  onApprove = async () => {
    const accounts = await web3.eth.getAccounts();

    const kickstarter = Kickstarter(this.props.address);
    await kickstarter.methods.approveRequest(this.props.id)
      .send({from: accounts[0]});
  };

  onFinalize = async () => {
    const accounts = await web3.eth.getAccounts();

    const kickstarter = Kickstarter(this.props.address);
    await kickstarter.methods.finalizeRequest(this.props.id)
      .send({from: accounts[0]});
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;

    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.reqDescription}</Cell>
        <Cell>{web3.utils.fromWei(request.reqCost, 'ether')}</Cell>
        <Cell>{request.reqVendor}</Cell>
        <Cell>{request.approvalCount}/{approversCount}</Cell>
        <Cell>
          <Button basic color='green' onClick={this.onApprove}>
            Approve
          </Button>
          <Button basic color='red' onClick={this.onApprove}>
            Approve
          </Button>
        </Cell>

      </Row>
    )
  }
}

export default RequestRow;
