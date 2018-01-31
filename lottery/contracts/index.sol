pragma solidity ^0.4.17;

contract Lottery {
  address public manager;
  address[] players;

  // MODIFIERS
  modifier managerAccess() {
    require(msg.sender == manager);
    _;
  }

  // CONSTRUCTOR
  function Lottery() public {
    manager = msg.sender;
  }

  // PUBLIC
  function enterLottery() public payable {
    require(msg.value > 0.01 ether);
    players.push(msg.sender);
  }

  function pickLottery() public managerAccess {
    uint index = random() % players.length;
    players[index].transfer(this.balance);
    players = new address[](0);
  }

  function getPlayers() public view returns (address[]) {
    return players;
  }

  // PRIVATE
  function random() private view returns(uint) {
    return uint(keccak256(block.difficulty, now, players));
  }
}
