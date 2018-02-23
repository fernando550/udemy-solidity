import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import Kickstarter from '../ethereum/kickstarter';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
  state = {
    value: ''
  };

  onSubmit = (event) => {
    event.preventDefault();
    const kickstarter = Kickstarter(this.props.address);

    try {
      const accounts = await kickstarter.methods.getAccounts();
      await kickstarter.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
    } catch (err) {

    }

  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label></label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
            label='ether'
            labelPosition='right'
          />
        </Form.Field>
        <Button primary>Contribute</Button>
      </Form>
    )
  }
}

export default ContributeForm;
