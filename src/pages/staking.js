import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { ethers } from 'ethers'
import { governance_abi, governance_address } from "../contracts/Governance";
import { storage_abi, storage_address } from "../contracts/storage";
import { token_address, token_abi } from "../contracts/VotingToken";
import {
    VStack,
    Text,
    HStack,
    Heading,
    Box,
    Stack,
    Button, 
    ButtonGroup
  } from "@chakra-ui/react";

export default function Staking() {
  
  //----- Internal States -----
//   const [name, setName] = useState(); // My account
//   const [balance, setBalance] = useState(); // My account

//   const [account, setAccount] = useState(); // My account
//   const [storage, setStorage] = useState(); // simpleStorage

//   const [tokenContract, setTokenContract] = useState(); // storage that the contract made
//   const [governorContract, setGovernorContract] = useState(); // storage that the contract made

//   const [value, setValue] = useState(); // The value that stored in the Storage
//   const [num, setNum] = useState(); // Inputed value
  
  return (
    <div>
        
    </div>
  );
}