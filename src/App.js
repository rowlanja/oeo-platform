import React from "react";
import Account from "./interactions/account"
import DaoMinter from "./interactions/dao_minter"
import NavMenu from "./components/sidebar/sidebar"
function App() {
  
  
  return (

    <div className="App">
    <NavMenu/>
    <Account/>
    <walletConnector />
    {/* <Minter/> */}
     <DaoMinter/>
    </div>
  );
}
  
export default App;