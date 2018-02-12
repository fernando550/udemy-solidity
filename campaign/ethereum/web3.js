import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // in browser with metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  // in server OR no metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/HskAjyeKcnLSV8fsPMfQ'
  );

  web3 = new Web3(provider);
}

export default web3;
