pragma solidity ^0.5.3;

contract ProjanskyContract{
    uint public price;
    uint public initalPrice;
    uint public royaltyPercentage;
    address payable public  creator ;
    address payable owner;
    constructor(uint _price, uint _royaltyPercentage,address payable _creator) public {
        //require(msg.sender == (TokenContract address))
        price = _price;
        initalPrice = _price;
        royaltyPercentage= _royaltyPercentage;
        creator = _creator;
        owner = _creator;
    }

    function purchase(address payable  currentOwner) public payable{
        require(msg.value==price);
        if(owner==creator){

        creator.transfer(msg.value);
        owner= msg.sender;
        }

        else{
        uint amount = msg.value;
        uint royaltyFee = (msg.value-initalPrice)*(royaltyPercentage/100);
        amount = amount - royaltyFee;
        creator.transfer(royaltyFee);
        currentOwner.transfer(amount);
        owner= msg.sender;
        }

    }
  }
