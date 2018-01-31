const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let lottery;

beforeEach(async () => {
  // get list of all accounts
  accounts = await web3.eth.getAccounts();
  // use an account to deploy contract
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '1000000'});
  // set provider network
  lottery.setProvider(provider);
});

describe('Lottery', () => {
  it('deploy contract', () => {
    assert.ok(lottery.options.address);
  });

  it('enter 1 player', async () => {
    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it('enter X players', async () => {
    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: web3.utils.toWei('0.02', 'ether')
    });

    await lottery.methods.enterLottery().send({
      from: accounts[1],
      value: web3.utils.toWei('0.02', 'ether')
    });

    await lottery.methods.enterLottery().send({
      from: accounts[2],
      value: web3.utils.toWei('0.02', 'ether')
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });

    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });

  it('reject insufficient entry bid', async () => {
    try {
      await lottery.methods.enterLottery().send({
        from: accounts[0],
        value: 0
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('reject non-manager lottery initialization', async () =>{
    try {
      await lottery.methods.pickLottery().send({
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('end-to-end test', async () => {
    await lottery.methods.enterLottery().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });

    const initBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickLottery().send({from: accounts[0]});
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initBalance;
    
    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
});
