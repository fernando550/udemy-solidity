import React, { Component } from 'react';
import creator from '../../ethereum/creator';
import Layout from '../../components/layout';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class Creator extends Component {
  state = {
    minContribution:'',
    errorMessage: ''
  }

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      await creator.methods
        .createKickstarter(this.state.minContribution)
        .send({from: accounts[0]});

      Router.pushRoute('/');
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
          <label>minimum contribution</label>
          <input
            value={this.state.minContribution}
            onChange={event => this.setState({minContribution: event.target.value})}
          />
          <button>Create</button>
        </form>
      </Layout>
    )
  }
}

export default Creator;
