const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
// compiled file reference
const compiledCreator = require('../ethereum/build/kickstarterCreator.json');
const compiledKickstarter = require('../ethereum/build/Kickstarter.json');

let accounts;
let creator;
let kickstarterAddress;
let kickstarter;

beforeEach(async () => {
  // retrieve accounts
  accounts = await web3.eth.getAccounts();
  // deploy contract
  creator = await new web3.eth.Contract(JSON.parse(compiledCreator.interface))
    .deploy({data: compiledCreator.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  creator.setProvider(provider);
  // create a kickstarter from the deployed contract
  await creator.methods.createKickstarter('100')
    .send({from: accounts[0], gas: '1000000'});
  // view all kickstarters and select the first one
  [kickstarterAddress] = await creator.methods.viewAllKickstarters().call();
  kickstarter = await new web3.eth.Contract(
    JSON.parse(compiledKickstarter.interface),
    kickstarterAddress
  );
});

describe('kickstarters', () => {
  it('deploys creator and kickstarter contract', () => {
    // verify creator and kickstarter were created
    assert.ok(creator.options.address);
    assert.ok(kickstarter.options.address);
  });

  it('marks caller as the campaign manager', async () => {
    const projectOwner = await kickstarter.methods.projectOwner().call();
    assert.equal(accounts[0], projectOwner);
  });

  it('allows contributions and marks contributers as approvers', async () => {
    await kickstarter.methods.contribute().send({
      from: accounts[1],
      value: '200'
    });

    const isContributer = await kickstarter.methods.approvers(accounts[1]).call();
    assert(isContributer);
  });

  it('requires minimum contribution', async () => {
    try {
      await kickstarter.methods.contribute()
        .send({from: accounts[1], value: '5'});

      assert(false);
    } catch (err) {
      assert(err);
    };
  });

  it('allows a manager to make a payment request', async () => {
    await kickstarter.methods.createRequest('Buy batteries', '100', accounts[1])
      .send({from: accounts[0], gas: '1000000'});

    const request = await kickstarter.methods.requests(0).call();
    assert.equal('Buy batteries', request.reqDescription);
  });

  it('processes requests', async () => {
    await kickstarter.methods.contribute()
      .send({from: accounts[0], value: web3.utils.toWei('10', 'ether')});

    await kickstarter.methods.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({from: accounts[0], gas: '1000000'});

    await kickstarter.method.approveRequest(0)
      .send({from: accounts[0], gas: '1000000'});

    await kickstarter.method.finalizeRequest(0)
      .send({from: accounts[0], gas: '1000000'});

    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, 'ether');
    balance = parseFloat(balance);
    assert(balance > 104);
  });
});
