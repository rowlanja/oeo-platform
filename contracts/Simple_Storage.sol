pragma solidity ^0.4.17;  
contract SimpleStorage {
   uint myVariable = 0;  
  
   function set(uint x) public {
     myVariable = x;   
   }
   function get() view public returns (uint) {
     return myVariable;   
   } 
}