pragma solidity ^0.4.17;

// KICKSTARTER CREATOR
contract kickstarterCreator {
  address[] public kickstarters;

  function createKickstarter(uint minContribution) public {
    address newCampaign = new Campaign(minContribution, msg.sender);
    kickstarters.push(newCampaign);
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
    require(msg.sender == manager);
    _;
  }

  function Kickstarter(uint minValue, address creator) public {
    manager = creator;
    minContribution = minValue;
  }

  function contribute() public payable {
    require(msg.value > minContribution);
    approvers[msg.sender] == true;
    approversCount++;
  }

  function createRequest(string description, uint cost, address vendor)
  public restricted {
    Request memory newRequest = Request({
        description,
        cost,
        vendor,
        false
      });

    requests.push(newRequest);
  }

  function approveRequest(uint index) public {
    Request storage myRequest = requests[index];

    require(approvers[msg.sender] == true);
    require(!myRequest.Approvals[msg.sender]);

    myRequest.reqApprovals[msg.sender] = true;
    myRequest.approvalCount++;
  }

  function finalizeRequest(uint index)
  public restricted {
    Request storage myRequest = requests[index];

    requre(!myRequest[index].complete);
    require((myRequest.approvalCount/approversCount) > 0.5)
    myRequest.vendor.transfer(myRequest.value)
    myRequest[index].complete = true;
  }
}
