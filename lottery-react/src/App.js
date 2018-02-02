import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
    state = {
      manager: '',
      players: [],
      balance: '',
      value: ''
    };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    this.setState({manager, players, balance})
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'please wait for your transaction to process...'});

    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      this.setState({message: 'You have entered the lottery!'});
    } catch (err) {
      console.log(err);
    };

  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  };

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    this.setState({message: 'please wait for your transaction to process...'})

    try {
      await lottery.methods.pickLottery().send({
        from: accounts[0]
      });
      this.setState({message: 'A winner has been selected, check your wallets!'});
    } catch (err) {
      console.log(err);
    };
  };

  render() {
    return (
      <div className="App">
        <h2>Lottery</h2>
        <p>This contract is managed by {this.state.manager}</p>
        <p>There are currently {this.state.players.length} people entered!</p>
        <p>The prize pool is currently: {web3.utils.fromWei(this.state.balance, 'ether')} ether!</p>
        <form onSubmit={this.onSubmit}>
          <p>Amount of ether to enter</p>
          <input
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>Enter Lottery</button>
        </form>
        <p> Ready to Pick a Winner?
          <button onClick={this.onClick}>state</button>
        </p>
        <p>
          <button onClick={()=>{console.log(this.state)}}>state</button>
        </p>
      </div>
    );
  };
};

export default App;
