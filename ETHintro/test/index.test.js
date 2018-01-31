const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let inbox;
let initMessage = 'Deployed!';
let newMessage ='Message Changed!';

beforeEach(async () => {
  // get list of all accounts
  accounts = await web3.eth.getAccounts();
  // use an account to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: [initMessage]})
    .send({from: accounts[0], gas: '1000000'});
  // set provider network
  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys contract', () => {
    assert.ok(inbox.options.address);
  });

  it('initializes default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, initMessage);
  });

  it('changes message', async () => {
    await inbox.methods.setMessage(newMessage).send({from: accounts[0]});
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});
