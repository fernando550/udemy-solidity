import web3 from './web3';
import kickstarterCreator from './build/kickstarterCreator.json';

const contract = new web3.eth.Contract(
  JSON.parse(kickstarterCreator.interface),
  '0xF729A84e7C8056Feb15cbF0BDB19C72a4675bAB1'
);

export default contract;
