pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract VotingToken is ERC20 {

    uint256 private tokenTotalSupply = 100000000;

    constructor() ERC20("OeODao", "Oeo") {
        _mint(msg.sender, tokenTotalSupply * 10 ** ERC20.decimals());
    }

}