import web3 from './web3';
import kickstarter from './build/Kickstarter.json';

export default address => {
  return new web3.eth.Contract(
    JSON.parse(kickstarter.interface),
    address
  );
};
