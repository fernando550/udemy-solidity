import web3 from './web3';
import kickstarterCreator from './build/kickstarterCreator.json';

const contract = new web3.eth.Contract(
  JSON.parse(kickstarterCreator.interface),
  '0x2c742b04ca7409AaA5afF3B75270a1dF6896C02a'
);

export default contract;
