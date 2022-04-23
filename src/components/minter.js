import React, { useState } from "react";
import { ethers } from "ethers";
import { Button, Card } from "react-bootstrap";
  
export default function Minter() {
  
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: null,
    Balance: null,
  });
  
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
  
  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    console.log(account)

    // Setting a balance
    getbalance(account);
  };
  
  return (

    <div className="App">
      {/* Calling all values which we 
       have stored in usestate */}
  
      <Card className="text-center">
        <Card.Header>
          <strong>Info: </strong>
          {data.address}
        </Card.Header>
        <Card.Body>

          <Button onClick={btnhandler} variant="primary">
            Interact with contract address
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}