import React, { Component } from 'react';
import creator from '../../ethereum/creator';
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { Form, Button, Input, Message } from 'semantic-ui-react';

class Creator extends Component {
  state = {
    minContribution:'',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await creator.methods
        .createKickstarter(this.state.minContribution)
        .send({from: accounts[0]});

      Router.pushRoute('/');
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading: false});
  }

  render() {
    return (
      <Layout>
        <h3>Create a Kickstarter</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>minimum contribution</label>
            <Input
              label='Wei'
              labelPosition='right'
              value={this.state.minContribution}
              onChange={event => this.setState({minContribution: event.target.value})}
            />
          </Form.Field>
          <Message error header='Oops!' content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Create</Button>
        </Form>
      </Layout>
    )
  }
}

export default Creator;
