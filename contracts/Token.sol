pragma solidity ^0.5.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "./Metadata.sol";

/**
 * The Token contract does this and that...
 */
contract Token is ERC721Full {
    Metadata metadata;
    constructor(string memory name, string memory symbol, Metadata _metadata) public
        ERC721Full(name, symbol)
    {
        metadata = _metadata;
    }

    function tokenURI(uint _tokenId) external view returns (string memory _infoUrl) {
        return metadata.tokenURI(_tokenId);
    }
}
