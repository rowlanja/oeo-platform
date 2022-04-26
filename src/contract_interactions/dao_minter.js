import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { ethers } from 'ethers'
import { governance_abi, governance_address } from "../contracts/Governance";
import { storage_abi, storage_address } from "../contracts/storage";
import { token_address, token_abi } from "../contracts/VotingToken";
import { treasurer_address, treasurer_abi } from "../contracts/Treasurer";
export default function DaoMinter() {
  
  //----- Internal States -----
  const [name, setName] = useState(); // My account
  const [balance, setBalance] = useState(); // My account

  const [account, setAccount] = useState(); // My account
  const [storage, setStorage] = useState(); // simpleStorage

  const [tokenContract, setTokenContract] = useState(); // storage that the contract made
  const [governorContract, setGovernorContract] = useState(); // storage that the contract made
  const [treasurerContract, setTreasurerContract] = useState(); // storage that the contract made

  const [earn, setEarn] = useState();
  const [evb, setEvb] = useState();
  const [value, setValue] = useState(); // The value that stored in the Storage
  const [num, setNum] = useState(); // Inputed value
  const [name2, setNameValue, proposals] = useState()

  const  requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }


  //----- Custom Functions -----
  // Set Inputed Value To the Storage
  const setValueToStorage = async () => {
    console.log('setting')
    await storage.methods.set(num).send({from: account});
  }

  // Get Value From the Storage and Display on the Page
  const getBalance = async () => {
    var val = await tokenContract.methods.balanceOf("0xCaCb6865142B31dEe0d85456dC030F8B6580B541").call();
    console.log('got : ', val)
    setValue(val);
  }

  const getName = async () => {
    var val = await tokenContract.methods.name().call();
    console.log('got : ', val)
    setName(val);
  }
  
  const postMint = async () => {
    await tokenContract.methods.mint("0xCaCb6865142B31dEe0d85456dC030F8B6580B541", 150).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
  }

  // call the smart contract, read current proposals
  const fetchProposals = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(governance_address, governance_abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  const postProposal = async () => {
    const descriptionHash = ethers.utils.id("funding account 2");

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const governor = new ethers.Contract(governance_address, governance_abi, signer)
    const token = new ethers.Contract(token_address, token_abi, signer);

    const teamAddress = '0x90800f3Ac6957347c3f4BeC95Fd1CCccb1Cf91bE';
    const grantAmount = 10;
    const transferCalldata = token.interface.encodeFunctionData('transfer', [teamAddress, grantAmount]);

    const transaction = await governorContract.methods.propose(
      [token_address],
      [1],
      [transferCalldata],
      "Prosal A: give grant to team",
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});;
      console.log(transaction)
  }

  const getProposals = async () => {
    var val = await tokenContract.methods.name().call();
    console.log('got : ', val)
    setName(val);
  }
  //----- Lifecycle Events -----
  useEffect(() => {
    // Web3.js initiate
    async function load() {
      const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
      /// const web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/v3/e5f6b05589544b1bb8526dc3c034c63e');
      // const web3 = new Web3(Web3.givenProvider || 'https://rinkeby.infura.io/v3/11d2dfe1e20648a7a459f4ef5e57aa2f');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      // Instantiate smart contracts using ABI and address.
      setStorage(new web3.eth.Contract(storage_abi, storage_address));

      setTokenContract(new web3.eth.Contract(token_abi, token_address));
      setGovernorContract(new web3.eth.Contract(governance_abi, governance_address));
      setTreasurerContract(new web3.eth.Contract(treasurer_abi, treasurer_address));
    }
    load();
  }, []);


  
  return (
    <div>
        <hr/>
        <br/><br/>
        <input type='number' placeholder='number' onChange={(e) => setNum(e.target.value)} />

        {/* <button  onClick={setValueToStorage}>SET</button> */}
        <h4> The Value is : {name} </h4> 
        <button  onClick={getName}>Test ABI Get Name</button>
        <hr/>
        
        <button  onClick={getBalance}>Test ABI Get Balance</button>
        <p> The Balance is : {balance} </p> 
        <hr/>
        <h4> Mint </h4> 
        <button  onClick={postMint}>Test ABI Post Mint</button>
        <hr/>
        Proposals
        <button  onClick={getProposals}>Test ABI Get Proposals</button>
        <br/>
        Create Proposal 
        <button  onClick={postProposal}>Test ABI Post Proposal</button>
        <hr/>
        {/* <input type='number' placeholder='number' onChange={(e) => setNum(e.target.value)} />
        <br/><br/>
        <button  onClick={claim}>CLAIM</button> */}
    </div>
  );
}