// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RR is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("Grayff", "gyf") {}

    string uri = "https://gateway.pinata.cloud/ipfs/QmVndiuGahVnqhEbes7X2iQTkGzqcXH8BMzrnadpJxMAy2";

    string prompt = "Second Division Commander of Whitebeard's ship";

    function Minting(address to) public onlyOwner returns(uint256 ){
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        return tokenId;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}