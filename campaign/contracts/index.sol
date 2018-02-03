pragma solidity ^0.4.17;

contract Campaign {
  struct Request {
    string reqDescription;
    uint reqCost;
    address reqVender;
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

  function Campaign(uint minValue) public {
    manager = msg.sender;
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
