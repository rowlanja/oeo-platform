import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { token_address, token_abi } from "../contracts/VotingToken";
import { ico_abi, ico_address } from "../contracts/ico";
import { icoToken_abi, icoToken_address } from "../contracts/ico_coin";

import {
  VStack,
  Text,
  HStack,
  Heading,
  Box,
  Stack,
  Button,
  useColorModeValue,
  Center,
  Progress,
} from "@chakra-ui/react";

import { FallInPlace } from '../components/motion/fall-in-place'

const TokenInteractionDashboard = ({ exchange}) => {
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
            Pre-Sale price 1 AVAX = 100 OEO
          </Text>
          <Progress value={20} size='lg' colorScheme='pink' />
        </Box>
      </Box>
      <Box >
        <Center m='2'>
          <Button onClick={exchange} colorScheme='orange' align="stretch" size='lg' width='95%'>Buy Tokens for 2 AVAX</Button>
        </Center>
      </Box>
      </VStack>
    </Box>
  );
}

const ICOPurchaseContainer = ({ title, ethSpent, tokensRecieved, ...props }) => {
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
        Buyer : {title}
      </Heading>
      <Box color={useColorModeValue('gray.500', 'gray.400')}>AVAX Amount : {ethSpent}</Box>
      <Box color={useColorModeValue('gray.500', 'gray.400')}>Token Amount : {tokensRecieved}</Box>

    </VStack>
  )
}

export default function Ico() {

  const [purchases, setPurchases] = useState([]);
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
    console.log(currentBlock)
    var proposals = []
    for (let i = 0; i < 15; i++) {
      await vendorContract.getPastEvents('BuyTokens',
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
              console.log(item.returnValues.amountOfETH)
              console.log(item.returnValues.amountOfTokens)
            });
          }
        });
    };
    console.log(proposals)
    setPurchases(proposals)
  }

  const exchange = async () => {
    var avax_amount='2'
    var wei_amount= Web3.utils.toWei(avax_amount, 'ether')
    await tokenContract.methods.approve(ico_address, wei_amount).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    await vendorContract.methods.buyTokens().send({
      from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541",
      value: wei_amount,
    });
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
  const getBlockNum = async (web3) => {
    setCurrentBlock(await web3.eth.getBlockNumber())
  }

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
    getBlockNum(web3)
    setTokenContract(new web3.eth.Contract(token_abi, token_address));
    setVendorContract(new web3.eth.Contract(ico_abi, ico_address))
    getTransactions()
  }, [currentBlock]);


  return (
    <Stack>
      <FallInPlace>

      </FallInPlace>
      <VStack       
        p="8">   
        <Box p='8'>    
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
            <TokenInteractionDashboard exchange={exchange}/>
            {/* <ProposolHistoryDashboard /> */}
          </HStack>
        </Box>
          {purchases.length != 0 ? purchases.map(purchase => (
            <Box p='2'>
              <ICOPurchaseContainer
                title={purchase.address}
                ethSpent={Web3.utils.fromWei(purchase.returnValues.amountOfETH, 'ether')}
                tokensRecieved={Web3.utils.fromWei(purchase.returnValues.amountOfTokens, 'ether')}
              />
            </Box>
            )) : <div />}
      </VStack>
    </Stack>
  );
}