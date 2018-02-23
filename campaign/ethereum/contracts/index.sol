pragma solidity ^0.4.17;

// KICKSTARTER CREATOR
contract kickstarterCreator {
  address[] public kickstarters;

  function createKickstarter(uint minContribution) public {
    address newKickstarter = new Kickstarter(minContribution, msg.sender);
    kickstarters.push(newKickstarter);
  }

  function viewAllKickstarters() public view returns (address[]) {
    return kickstarters;
  }
}

// KICKSTARTER INSTANCE
contract Kickstarter {
  struct Request {
    string reqDescription;
    uint reqCost;
    address reqVendor;
    bool reqCompletion;
    uint approvalCount;
    mapping(address => bool) reqApprovals;
  }

  Request[] public requests;
  address public projectOwner;
  uint public minContribution;
  mapping(address => bool) public approvers;
  uint public approversCount;

  modifier restricted() {
    require(msg.sender == projectOwner);
    _;
  }

  function Kickstarter(uint minValue, address creator) public {
    projectOwner = creator;
    minContribution = minValue;
  }

  function contribute() public payable {
    require(msg.value > minContribution);

    if (!approvers[msg.sender]) {
      approvers[msg.sender] = true;
      approversCount++;
    }
  }

  function createRequest(string description, uint cost, address vendor)
  public restricted {
    Request memory newRequest = Request({
        reqDescription: description,
        reqCost: cost,
        reqVendor: vendor,
        reqCompletion: false,
        approvalCount: 0
      });

    requests.push(newRequest);
  }

  function approveRequest(uint index) public {
    Request storage myRequest = requests[index];

    require(approvers[msg.sender] == true);
    require(!myRequest.reqApprovals[msg.sender]);

    myRequest.reqApprovals[msg.sender] = true;
    myRequest.approvalCount++;
  }

  function finalizeRequest(uint index)
  public
  payable
  restricted {
    Request storage myRequest = requests[index];

    require(myRequest.approvalCount > (approversCount/2));
    require(!myRequest.reqCompletion);

    myRequest.reqVendor.transfer(myRequest.reqCost);
    myRequest.reqCompletion = true;
  }

  function getSummary() public view returns (uint, uint, uint, uint, address) {
    return (
        minContribution,
        this.balance,
        requests.length,
        approversCount,
        projectOwner
    );
  }

  function getRequestCount() public view returns (uint) {
    return requests.length;
  }
}
