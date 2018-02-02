import web3 from './web3';

const address = '0x91d3C629f982530E9e157b5b8b0feE7A16689574'
const abi = [
  {"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[],"name":"pickLottery","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[],"name":"enterLottery","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},
  {"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}
]

export default new web3.eth.Contract(abi, address);
