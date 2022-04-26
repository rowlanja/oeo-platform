import React from "react";
import Account from "./contract_interactions/account"
import DaoMinter from "./contract_interactions/dao_minter"
import NavMenu from "./components/sidebar/sidebar"

import Dao from "./pages/dao";
import Home from "./pages/home";
import Wallet from "./pages/wallet";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
  
  return (

    <div className="App">
    <NavMenu/>
    {/* <Route exact path="/dao" component={Dao}></Route>
    <Route path="/home" component={Home}></Route>
    <Route exact path="/wallet" component={Wallet}></Route> */}
    {/* 
    <Account/>
    <walletConnector />
    <Minter/> 
    <DaoMinter/> 
    */}
    </div>
  );
}
  
export default App;