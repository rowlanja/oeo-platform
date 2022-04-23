import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { address, abi } from "../contracts/coin";
import { storage_abi, storage_address } from "../contracts/storage";
import detectEthereumProvider from '@metamask/detect-provider'


export default function Minter() {
  
  //----- Internal States -----
  const [account, setAccount] = useState(); // My account
  const [storage, setStorage] = useState(); // storage that the contract made
  const [earn, setEarn] = useState();
  const [evb, setEvb] = useState();
  const [value, setValue] = useState(); // The value that stored in the Storage
  const [num, setNum] = useState(); // Inputed value


  //----- Custom Functions -----
  // Set Inputed Value To the Storage
  const setValueToStorage = async () => {
    console.log('setting')
    await storage.methods.set(num).send({from: account});
  }

  // Get Value From the Storage and Display on the Page
  const getValueFromStorage = async () => {
    console.log('getting')
    var val = await storage.methods.get().call();
    console.log('got : ', val)
    setValue(val);
  }
  // Automatically Add Custom Tokens To Meta Mask
  const addToMM = async () => {
    const tokenAddress = await evb.methods.getPrintToken1().call();
    const tokenSymbol = 'EVB';
    const tokenDecimals = 18;
    const tokenImage = 'http://placekitten.com/200/300';

    const provider = await detectEthereumProvider();
    provider.sendAsync({
      method: 'metamask_watchAsset',
      params: {
        "type": "ERC20",
        "options": {
          "address": tokenAddress,
          "symbol": tokenSymbol,
          "decimals": tokenDecimals,
          "image": tokenImage,
        },
      },
      id: Math.round(Math.random() * 100000),
    }, (err, added) => {
      console.log('provider returned', err, added)
      if (err || 'error' in added) {
        console.log('ERROR : There was a problem adding the token.')
        return
      }
      console.log('Token Added.');
    })
  }

  const claim = () => {
    console.log('testing')
  }

   //----- Lifecycle Events -----
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
      setEarn(new web3.eth.Contract(abi, address));
      setEvb(new web3.eth.Contract(abi, address));
    }

    load();
  }, []);


  
  return (
    <div>
      <hr/>
      <br/><br/>
      <input type='number' placeholder='number' onChange={(e) => setNum(e.target.value)} />

      <button  onClick={setValueToStorage}>SET</button>
      <h4> The Value is : {value} </h4>
      <button  onClick={getValueFromStorage}>GET</button>
      <br/><br/>
      <h4> Your account is: {account} </h4>
      <h2> Token Contract </h2>
      <input type='number' placeholder='number' onChange={(e) => setNum(e.target.value)} />
      <br/><br/>
      <button  onClick={claim}>CLAIM</button>
    </div>
  );
}