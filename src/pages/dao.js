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

export default function Dao() {
  
  //----- Internal States -----
  const [name, setName] = useState(); // My account
  const [balance, setBalance] = useState(); // My account

  const [account, setAccount] = useState(); // My account
  const [storage, setStorage] = useState(); // simpleStorage

  const [tokenContract, setTokenContract] = useState(); // storage that the contract made
  const [governorContract, setGovernorContract] = useState(); // storage that the contract made

  const [value, setValue] = useState(); // The value that stored in the Storage
  const [num, setNum] = useState(); // Inputed value



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

  const postProposal = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
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

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      setStorage(new web3.eth.Contract(storage_abi, storage_address));
      setTokenContract(new web3.eth.Contract(token_abi, token_address));
      setGovernorContract(new web3.eth.Contract(governance_abi, governance_address));
    }
    load();
  }, []);

  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
  return (
    <div>
        <HStack marginBottom="10px">
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
            sx={{
              background: "linear-gradient(90deg, #A90608 0%, #000000 70.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            color='#5C0708'
          > One </Text>
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
          > Eye </Text>
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
            sx={{
              background: "linear-gradient(90deg, #000000 0%, #A90608 70.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            color='#5C0708'
          > Open </Text>
        <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
          > Dao </Text>
        </HStack>
        <br/><br/>


        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Button  colorScheme='blue'>Get</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        Balance : {balance} 
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button  colorScheme='blue'>Get</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        Name : {name} 
                    </Box>
                </Box>
            </Box>
                {/* <Feature
                title='Name'
                desc={name}
                />
                <Feature
                title='Balance'
                desc={balance}
                /> */}
        </Box>
        
        <br/><br/>

        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Button  colorScheme='blue'>Mint</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        Test ABI Post Mint
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button  colorScheme='blue'>Post</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        Test ABI Post Proposal
                    </Box>
                </Box>
            </Box>
                {/* <Feature
                title='Name'
                desc={name}
                />
                <Feature
                title='Balance'
                desc={balance}
                /> */}
        </Box>
    </div>
  );
}