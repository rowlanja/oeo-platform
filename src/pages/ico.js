import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { ethers } from 'ethers'
import { governance_abi, governance_address } from "../contracts/Governance";
import { token_address, token_abi } from "../contracts/VotingToken";
import { treasurer_abi, treasurer_address } from "../contracts/Treasurer";

import { game_add, game_abi } from "../contracts/game";

import { ico_abi, ico_address } from "../contracts/ico";
import { icoCoin_abi, icoCoin_address } from "../contracts/ico-coin";

import Section from '../components/marketing/section-wrapper'
import SectionTitle from '../components/marketing/section-title'
import {
  VStack,
  Text,
  HStack,
  Heading,
  Box,
  Stack,
  Button,
  useColorModeValue,
  StackDivider,
  Center,
  Progress,
} from "@chakra-ui/react";

import { FallInPlace } from '../components/motion/fall-in-place'


const ProposalContainer = ({ title, description, address, ...props }) => {
  return (
    <VStack
      zIndex="2"
      bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor={useColorModeValue('gray.400', 'gray.800')}
      {...props}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        Proposal Title : {title}
      </Heading>
      <Box color={useColorModeValue('gray.500', 'gray.400')}>ID : {description}</Box>
      <Box color={useColorModeValue('gray.500', 'gray.400')}>Proposer : {address}</Box>

    </VStack>
  )
}



export default function Ico() {
  function TokenInteractionDashboard() {
    return (
      <Box w="40%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <VStack
          zIndex="2"
          bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
          borderRadius="md"
          p="8"
          flex="1 0"
          alignItems="stretch"
          border="2px solid"
          borderColor={useColorModeValue('gray.400', 'gray.800')}
        >
        <Box p='2' >
          <Center p='6'>
            <Heading size="2xl" mb="6" fontWeight="extrabold">
              Presale is now live
            </Heading>
          </Center>
          <Box p='1'w='100%'>
            <Text color="muted">
              Current Bonus : 30%
            </Text>
            <Text color="muted">
              Pre-Sale price 1 AVAX = 850 OEO
            </Text>
            <Progress value={20} size='lg' colorScheme='pink' />
          </Box>
        </Box>
        <Box >
          <Center>
            <Button onClick={tokenMint} colorScheme='orange' align="stretch" size='lg' width='95%'>Mint Tokens</Button>
          </Center>
          <Center m='2'>
            <Button onClick={getTransactions} colorScheme='orange' align="stretch" size='lg' width='95%'>Mint Tokens</Button>
          </Center>
          <Center m='2'>
            <Button onClick={exchange} colorScheme='orange' align="stretch" size='lg' width='95%'>Buy Tokens for 2 AVAX</Button>
          </Center>
        </Box>
        </VStack>
      </Box>
    );
  }

  const [transactions, setTransactions] = useState();
  const [currentBlock, setCurrentBlock] = useState(); // storage that the contract made
  const [tokenContract, setTokenContract] = useState(); // storage that the contract made
  const [icoContract, setIcoContract] = useState(); // storage that the contract made
  const [vendorContract, setVendorContract] = useState(); // storage that the contract made

  const [inputMintTokenAddress, setInputMintTokenAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");
  const [inputMintTokenAmount, setInputMintTokenAmount] = useState(10000);

  const [outputTokenBalance, setOutputTokenBalance] = useState();
  // Get Value From the Storage and Display on the Page
  //TOKEN EVENT OPERATIONS
  const getTransactions = async () => {
    var proposals = []
    for (let i = 0; i < 15; i++) {
      await tokenContract.getPastEvents('Transfer',
        {
          filter: { from: '0xCaCb6865142B31dEe0d85456dC030F8B6580B541' },
          fromBlock: currentBlock - (2048 * (i + 1)),
          toBlock: currentBlock - (2048 * i),
        },
        (err, events) => {
          console.log(events)
          if (events.length !== 0) {
            events.forEach((item, index) => {
              proposals.push(item)
            });
          }
        });
    };
    console.log(proposals)
    setTransactions(proposals)
  }

  const exchange = async () => {
    var result = vendorContract.methods.buyTokens().send({
      from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541",
      value: "2",
    });
    console.log(result)
  }
  //TOKEN CoONOPERATIONS
  const tokenGetBalance = async () => {
    var val = await tokenContract.methods.balanceOf("0xCaCb6865142B31dEe0d85456dC030F8B6580B541").call();
    console.log('got : ', val)
    setOutputTokenBalance(val);
  }
  const tokenMint = async () => {
    await tokenContract.methods.mint(inputMintTokenAddress, 100000000000000000000).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
  }
  //GOVERNOR OPERATIONS

  useEffect(() => {
    console.log(tokenContract)
    async function load() {
      const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
      const blocknum = await web3.eth.getBlockNumber();
      setTokenContract(new web3.eth.Contract(token_abi, token_address));
      setVendorContract(new web3.eth.Contract(icoCoin_abi, icoCoin_address));
      setCurrentBlock(blocknum)
      console.log(blocknum)
    }
    load();

  }, []);


  return (
    <Stack>
      <FallInPlace>

      </FallInPlace>
          <HStack>
              <Box w="50%" borderRadius='lg' overflow='hidden'>
                <Stack spacing="20" direction={['column', null, 'row']}>
                    <Box p='35'>
                      <Heading size="3xl" mb="8" fontWeight="extrabold">
                        OneEyeOpen Platform
                      </Heading>
                      <Text fontSize={['xl', null, '2xl']} color="muted">
                        The first platform offering powerful index tools.
                      </Text>
                    </Box>
                </Stack>
              </Box>
            <TokenInteractionDashboard />
            {/* <ProposolHistoryDashboard /> */}
          </HStack>
    </Stack>
  );
}