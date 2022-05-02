import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { ethers } from 'ethers'
import { governance_abi, governance_address } from "../contracts/Governance";
import { storage_abi, storage_address } from "../contracts/storage";
import { token_address, token_abi } from "../contracts/VotingToken";
import { treasurer_abi, treasurer_address } from "../contracts/Treasurer";
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
    ButtonGroup,
    useColorModeValue,
    StackDivider,
    Flex
  } from "@chakra-ui/react";
  var fs = require('fs');

const Box1 = () => {
  return(
  <VStack
  zIndex="2"
  bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
  borderRadius="md"
  p="8"
  flex="1 0"
  alignItems="stretch"
  border="1px solid"
  borderColor={useColorModeValue('gray.400', 'gray.800')}        >
  <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
      Total Value Locked : 
  </Heading>
  <Box color={useColorModeValue('gray.500', 'gray.400')}>
    Current Proposals : 
  </Box>
  <Box fontSize="2xl" fontWeight="bold" py="4">
      Participators : 
  </Box>
  <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
      
  </VStack>
</VStack>
  );
}

  const PricingBox = ({ title, description, price, children, ...props }) => {
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
                {title}
            </Heading>
            <Box color={useColorModeValue('gray.500', 'gray.400')}>{description}</Box>
            <Box fontSize="2xl" fontWeight="bold" py="4">
                {price}
            </Box>
            <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
                {children}
            </VStack>
        </VStack>
    )
}

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

function Test(){
  return(
    <Stack>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <HStack margin='24px' spacing='24px'>
          <Box >
            <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
        </HStack>
        <HStack margin='24px' spacing='24px'>
          <Box >
            <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
        </HStack>
        <HStack margin='24px' spacing='24px'>
          <Box >
            <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
          <Box >
          <Box1 />
          </Box>
        </HStack>
        
      </VStack>
    </Stack>
  )
}


export default function Dao() {


  const [tokenContract, setTokenContract] = useState(); // storage that the contract made
  const [governorContract, setGovernorContract] = useState(); // storage that the contract made
  const [treasurerContract, setTreasurerContract] = useState(); // storage that the contract made

  const [value, setValue] = useState(); // The value that stored in the Storage
  const [num, setNum] = useState(); // Inputed value

  const [inputMintTokenAddress, setInputMintTokenAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");
  const [inputMintTokenAmount, setInputMintTokenAmount] = useState(10000);

  const [outputMintTokenName, setOutputMintTokenName] = useState();

  const [outputTokenBalance, setOutputTokenBalance] = useState();
  
  const [outputTokenSymbol, setOutputTokenSymbol] = useState();

  const [inputTokenVotesAddress, setInputTokenVotesAddress] = useState();

  const [inputTokenGetVotesAddress, setInputTokenGetVotesAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");

  const [inputTokenDelegateAddress, setInputTokenDelegateAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");

  const [inputProposalTeamAddress, setInputProposalTeamAddress] = useState("0x90800f3Ac6957347c3f4BeC95Fd1CCccb1Cf91bE");
  const [inputProposalGrantAmount, setInputProposalGrantAmount] = useState(10000);
  const [inputProposalTransferCalldate, setInputProposalTransferCalldate] = useState();

  const [inputGetProposalVotesPropID, setInputGetProposalVotesPropID]  = useState("74486561760899968869385784074455550386604209723171923696131142196376942517660");

  const [inputSetProposalMinVotingDelay, setInputSetProposalMinVotingDelay]  = useState(1000);

  const [inputSetProposalVotingDelay, setInputSetProposalVotingDelay]  = useState(1);

  const [inputSetProposalVotingPeriod, setInputSetProposalVotingPeriod]  = useState(1);

  const [inputSetVotePropID, setInputSetVotePropID]  = useState("74486561760899968869385784074455550386604209723171923696131142196376942517660");
  const [inputSetCastVote, setInputSetCastVote]  = useState(100);

  // Get Value From the Storage and Display on the Page
  //TOKEN OPERATIONS
  const tokenGetName = async () => {
    var val = await tokenContract.methods.name().call();
    console.log('got : ', val)
    setOutputMintTokenName(val);
  }
  const tokenGetBalance = async () => {
    var val = await tokenContract.methods.balanceOf("0xCaCb6865142B31dEe0d85456dC030F8B6580B541").call();
    console.log('got : ', val)
    setOutputTokenBalance(val);
  }

  const tokenGetSymbol = async () => {
    var val = await tokenContract.methods.symbol().call();
    console.log('got : ', val)
    setOutputTokenSymbol(val);
  }

  const tokenMint = async () => {
    await tokenContract.methods.mint(inputMintTokenAddress, inputMintTokenAmount).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
  }

  const tokenGetVotes = async () => {
    await tokenContract.methods.getVotes(inputTokenGetVotesAddress).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
  }

  const tokenDelegate = async () => {
    await tokenContract.methods.delegate(inputTokenDelegateAddress).send({ gas: '1000000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
  }
  //GOVERNOR OPERATIONS
  const govPostProposal = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const token = new ethers.Contract(token_address, token_abi, signer);

    const teamAddress = '0x90800f3Ac6957347c3f4BeC95Fd1CCccb1Cf91bE';
    const grantAmount = 10;
    const transferCalldata = token.interface.encodeFunctionData('transfer', [inputProposalTeamAddress, grantAmount]);

    const transaction = await governorContract.methods.propose(
      [token_address],
      [1],
      [transferCalldata],
      "Prosal C: give grant to team",
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log(transaction)
    console.log(transaction['events']['ProposalCreated']['returnValues']['proposalId'])
  }

  const govGetProposalVotes = async () => {
    var val = await governorContract.methods.proposalVotes(
      inputGetProposalVotesPropID
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log('got : ', val)
  }

  const govGetMinDelay = async () => {
    var val = await governorContract.methods.getMinDelay(
      inputSetProposalMinVotingDelay
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log('got : ', val)
  }

  const govSetVotingDelay = async () => {
    var val = await governorContract.methods.setVotingDelay(
      inputSetProposalVotingDelay
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log('got : ', val)
  }

  const govSetVotingPeriod = async () => {
    var val = await governorContract.methods.setVotingPeriod(
      inputSetProposalVotingPeriod
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log('got : ', val)
  }

  const govCastVote = async () => {
    var val = await governorContract.methods.castVote(
      inputSetVotePropID,
      inputSetCastVote,
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541"});
    console.log('got : ', val)
  }


  //TREASURER OPERATIONS

    
  // AUXILIARY OPERATIONS
  const handleSaveToPC = jsonData => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'filename.json';
    link.href = url;
    link.click();
  }



  useEffect(() => {
    console.log(tokenContract)
    async function load() {
      const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
      const accounts = await web3.eth.requestAccounts();
      setTokenContract(new web3.eth.Contract(token_abi, token_address));
      setGovernorContract(new web3.eth.Contract(governance_abi, governance_address));
      setTreasurerContract(new web3.eth.Contract(treasurer_abi, treasurer_address));
      console.log(tokenContract)
    }
    load();
    
  }, []);


  return (
    <Stack>
        <HStack marginBottom="10px">
          {/* <Text
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
          > Dao </Text> */}
          <Section>
              <SectionTitle
                title="OneEyeOpen Dao Console"
                id="pro-features"
                description={
                    <>
                    </>
                }
            />
            </Section>
        </HStack>
        <br/><br/>
        <Flex>
        <Box w="20%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Button onClick={tokenDelegate} colorScheme='orange'>Token Delegate</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Balance : {balance}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={tokenGetName} colorScheme='orange'>Get Token Name</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Balance : {balance}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={tokenGetVotes} colorScheme='orange'>Get Token Votes</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Balance : {balance}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={tokenGetBalance} colorScheme='orange'>Get Token Balance</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Balance : {balance}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={tokenMint} colorScheme='orange'>Mint Tokens</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Balance : {balance}  */}
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box w="20%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Button onClick={govPostProposal} colorScheme='orange'>Post Proposal</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Name : {name}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={govGetProposalVotes} colorScheme='orange'>Get Proposal Votes</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Name : {name}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={govSetVotingDelay} colorScheme='orange'>setVotingDelay</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Name : {name}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={govSetVotingPeriod} colorScheme='orange'>setVotingPeriod</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Name : {name}  */}
                    </Box>
                </Box>
            </Box>
            <Box p='6'>
                <Button onClick={govCastVote} colorScheme='orange'>castVote</Button>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {/* Name : {name}  */}
                    </Box>
                </Box>
            </Box>
        </Box>
        <Test />
        </ Flex>
                {/* <Feature
                title='Name'
                desc={name}
                />
                <Feature
                title='Balance'
                desc={balance}
                /> */}
        
        <br/><br/>

        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            {/* <Box p='6'>
                <Button  colorScheme='orange'>Mint</Button>
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
                <Button  colorScheme='borangelue'>Post</Button>
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
            </Box> */}
                {/* <Feature
                title='Name'
                desc={name}
                />
                <Feature
                title='Balance'
                desc={balance}
                /> */}
        </Box>
    </Stack>
  );
}