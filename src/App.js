import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import Minter from "./components/minter"
import Account from "./components/account"
function App() {
  
  
  return (

    <div className="App">
     <Account/>
     <Minter/>
    </div>
  );
}
  
export default App;