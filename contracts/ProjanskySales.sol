pragma solidity ^0.5.3;
import "./openzeppelin/token/ERC721/ERC721Full.sol";

contract ProjanskySales {
    event Received(address indexed payer, uint tokenId, uint256 amount, uint256 balance);

    mapping (uint256 => uint256) public firstSalePrices; // tokenId -> price mapping
    mapping (uint256 => uint256) public tokenPrices; // tokenId -> price mapping
    ERC721 public nftContract; // the address of the non-fungible token contract
    uint public royaltyPercentage;

    constructor(address _nftAddress, uint _royaltyPercentage) public {
        nftContract = ERC721(_nftAddress);
        royaltyPercentage = _royaltyPercentage;
    }

    function purchase(uint256 _tokenId) public payable {
        require(msg.sender != address(0) && msg.sender != address(this));
        require(msg.value >= tokenPrices[_tokenId]);
        // hello world

        address payable tokenSeller =
          address(uint160(nftContract.ownerOf(_tokenId)));

        if (tokenSeller != creator) {
          if(msg.value>initalPrice){
          uint amount = msg.value;
          uint royaltyFee = (msg.value-initalPrice)*(royaltyPercentage/100);
          amount = amount - royaltyFee;
          creator.transfer(royaltyFee);
          currentOwner.transfer(amount);
          owner= msg.sender;
        }
        else{
          
        }
        }

        if (!firstSalePrices[_tokenId]) {
          firstSalePrices[_tokenId] = msg.value
        }

        nftContract.safeTransferFrom(tokenSeller, msg.sender, _tokenId);
        tokenSeller.transfer(msg.value);
        emit Received(msg.sender, _tokenId, msg.value, address(this).balance);
    }

    function setTokenPrice(uint256 _tokenId, uint256 _price) public {
      require(_price > 0);
      address tokenOwner = nftContract.ownerOf(_tokenId);
      require(msg.sender == tokenOwner); // ensure only token owner can set
      tokenPrices[_tokenId] = _price;
    }
  }
