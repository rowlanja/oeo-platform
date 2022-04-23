// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Controller {

    ERC20 private token; 
    address private executors;

    constructor(ERC20 _token, address _executors) {
        token = _token;
        executors = _executors;
    }

    function isExecutable(uint256 _completeDate) internal view returns(bool){
        if(block.timestamp > (_completeDate + 1 weeks)) return true;
        else return false;
    }

    function canExecute(address _callAddress) internal view returns(bool){
        if(_callAddress == executors) return true;
        else return false;
    }

    function canVote(address _participient) internal view returns(bool){
        if(token.balanceOf(_participient) > (100 * 10**token.decimals()) ) return true;
        else return false;
    }

    function canPropose(address _participient) internal view returns(bool){
        if(token.balanceOf(_participient) > (1000 * 10**token.decimals()) ) return true;
        else return false;
    }
    
}