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
    // from beforeEach, verify that the contract was deployed
    // and that both the creator and the newly created
    // kickstarter has an address
    assert.ok(creator.options.address);
    assert.ok(kickstarter.options.address);
  });
});
