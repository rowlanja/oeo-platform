import React, { useState, useEffect } from "react";
import Web3 from 'web3';
import { ethers } from 'ethers'
import { governance_abi, governance_address } from "../contracts/Governance";
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
  Textarea,
  useColorModeValue,
  StackDivider,
  Center,
} from "@chakra-ui/react";
import {
  ProposalSummaryActiveCount,
  ProposalSummaryDeadCount,
  ProposalSummaryActiveVoters,
  ProposalSummaryTotalVotes,
  ProposalSummaryFunds
} from '../components/dao/summary/summary'
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

function Header() {
  return (
    <Stack>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
      >
        <HStack margin='0px' spacing='24px'>
          <Box alignItems="stretch">
            <ProposalSummaryActiveCount activeProposalsCount='5' />
          </Box>
          <Box alignItems="stretch">
            <ProposalSummaryDeadCount activeProposalsCount='5' />
          </Box>
          <Box alignItems="stretch">
            <ProposalSummaryActiveVoters />
          </Box>
          <Box alignItems="stretch">
            <ProposalSummaryTotalVotes />
          </Box>
          <Box alignItems="stretch">
            <ProposalSummaryFunds />
          </Box>
        </HStack>
      </VStack>
    </Stack>
  )
}



export default function Dao() {

  function ProposolHistoryDashboard() {

    return (
      <Box w="80%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p='6'>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            margin='10px'
          >
            <Button onClick={getProposals} colorScheme='orange'>Retrieve Proposals</Button>
            {props.length != 0 ? props.map(proposal => (
              <ProposalContainer
                title={proposal.returnValues.description}
                description={proposal.returnValues.proposalId}
                address={proposal.address}
              />

            )) : <div />}
          </VStack>
        </Box>
      </Box>
    );
  }

  function ProposalCreationDashboard() {
    return (
      <Box w="100%" borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          margin='10px'
        >
            <Button onClick={govPostProposal} colorScheme='orange'>Post Proposal</Button>
            <HStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >

              <Box>
                <Text mb='8px'>Grant Amount: </Text>
                <Textarea
                  value={inputProposalGrantAmount}
                  onChange={handleSetInputProposalGrantAmount}
                  placeholder='Amount'
                  size='sm'
                />
              </Box>
              <Box>
                <Text mb='8px'>Recipient Address: </Text>
                <Textarea
                  value={inputProposalTeamAddress}
                  onChange={handleSetInputProposalTeamAddress}
                  placeholder='Address'
                  size='sm'
                />
              </Box>
              <Box>
                <Text mb='8px'>Proposal Title: {inputProposalText}</Text>
                <Textarea
                  value={inputProposalText}
                  onChange={handleSetInputProposalText}
                  placeholder='Placeholder Title'
                  size='sm'
                />
                {/* <Text>Proposal Response : {proposalResponse}</Text> */}
              </Box>
            </HStack>
        </VStack>
      </Box>
    )
  }

  function ProposalInteractionDashboard() {
    return (

      <VStack margin='10px' >
        <Box w="100%" borderWidth='2px' borderRadius='lg' overflow='hidden'>
          <VStack
              spacing={4}
              margin='10px'
              divider={<StackDivider borderColor='gray.200' />}
          >
            <Button onClick={govGetProposalVotes} colorScheme='orange'>Get Proposal Votes</Button>
            <Box display='flex' >
              <Text mb='8px'>Proposal ID : </Text>
              <Textarea
                value={inputProposalID}
                onChange={handleSetProposalID}
                placeholder='Amount'
                size='sm'
              />
            </Box>
          </VStack>
        </Box>
        {/* <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
          >
            <Button onClick={govSetVotingDelay} colorScheme='orange'>setVotingDelay</Button>
            <Box display='flex' alignItems='baseline'>
              <Text mb='8px'>Voting Delay: </Text>
              <Textarea
                value={inputSetProposalVotingDelay}
                onChange={handleSetInputProposalVotingDelay}
                placeholder='Amount'
                size='sm'
              />
            </Box>
          </VStack>
          <Box p='6' align='stretch' >
            <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
              <Button onClick={govSetVotingPeriod} colorScheme='orange'>setVotingPeriod</Button>
              <Box display='flex' alignItems='baseline'>
                <Text mb='8px'>Proposal Period: </Text>
                <Textarea
                  value={inputSetProposalVotingPeriod}
                  onChange={handleSetInputProposalVotingPeriod}
                  placeholder='Amount'
                  size='sm'
                />
              </Box>
            </VStack>
          </Box> */}
        <Box w="100%" borderWidth='2px' borderRadius='lg' overflow='hidden'>
          <VStack
              spacing={4}
              margin='10px'
              divider={<StackDivider borderColor='gray.200' />}
          >
            <Button onClick={govCastVote} colorScheme='orange'>castVote</Button>
            <HStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
            >
            <Box >
              <Text mb='8px'>Proposal ID: </Text>
              <Textarea
                value={inputSetCastVoteProposalID}
                onChange={handleSetVoteProposalID}
                placeholder='Amount'
                size='sm'
              />
            </Box>
            <Box >
              <Text mb='8px'>Votes to Cast: </Text>
              <Textarea
                value={inputSetCastVote}
                onChange={handleSetVote}
                placeholder='Amount'
                size='sm'
              />
            </Box>
            </HStack>
          </VStack>
        </Box>
        <Box w="100%" borderWidth='2px' borderRadius='lg' overflow='hidden'>

        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          verticalAlign='top'
          margin='10px' 
        >    
              <Button onClick={govState} colorScheme='orange'>get Prop State</Button>
              <Box>
                <Text mb='8px'>Proposal ID: </Text>
                <Textarea
                  value={inputSetCastStateProposalID}
                  onChange={handleSetStateProposalID}
                  placeholder='Amount'
                  size='sm'
                />
          </Box>
          </VStack>
        </Box>
      </VStack>
    )
  }


  const [currentBlock, setCurrentBlock] = useState(); // storage that the contract made

  const [props, setProps] = useState([]); // Setting default value

  const [proposalResponse, setProposalResponse] = useState();
  const [tokenContract, setTokenContract] = useState(); // storage that the contract made
  const [governorContract, setGovernorContract] = useState(); // storage that the contract made
  const [treasurerContract, setTreasurerContract] = useState(); // storage that the contract made

  const [value, setValue] = useState(); // The value that stored in the Storage
  const [num, setNum] = useState(); // Inputed value

  const [inputMintTokenAddress, setInputMintTokenAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");
  const [inputMintTokenAmount, setInputMintTokenAmount] = useState(10000);
  const [inputTokenVotesAddress, setInputTokenVotesAddress] = useState();

  const [inputTokenGetVotesAddress, setInputTokenGetVotesAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");

  const [inputTokenDelegateAddress, setInputTokenDelegateAddress] = useState("0xCaCb6865142B31dEe0d85456dC030F8B6580B541");

  const [inputProposalID, setInputProposalID] = useState();

  const [inputProposalTeamAddress, setInputProposalTeamAddress] = useState("0x90800f3Ac6957347c3f4BeC95Fd1CCccb1Cf91bE");
  const [inputProposalGrantAmount, setInputProposalGrantAmount] = useState(10000);
  const [inputProposalTransferCalldate, setInputProposalTransferCalldate] = useState();
  const [inputGetProposalVotesPropID, setInputGetProposalVotesPropID] = useState();
  const [inputProposalText, setInputProposalText] = useState();


  const [inputSetProposalMinVotingDelay, setInputSetProposalMinVotingDelay] = useState(1000);

  const [inputSetProposalVotingDelay, setInputSetProposalVotingDelay] = useState(1);

  const [inputSetProposalVotingPeriod, setInputSetProposalVotingPeriod] = useState(1);

  const [inputSetVotePropID, setInputSetVotePropID] = useState();
  const [inputSetCastVote, setInputSetCastVote] = useState(100);
  const [inputSetCastVoteProposalID, setInputSetCastVoteProposalID] = useState();

  const [inputSetCastStateProposalID, setInputSetCastStateProposalID] = useState();

  // Get Value From the Storage and Display on the Page
  //TOKEN OPERATIONS

  //GOVERNOR OPERATIONS


  let handleSetInputProposalGrantAmount = (e) => { setInputProposalGrantAmount(e.target.value) }
  let handleSetInputProposalTeamAddress = (e) => { setInputProposalTeamAddress(e.target.value) }
  let handleSetInputProposalText = (e) => { setInputProposalText(e.target.value) }

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
      inputProposalText,
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log(transaction)
    console.log(transaction['events']['ProposalCreated']['returnValues']['proposalId'])
    setProposalResponse(transaction['events']['ProposalCreated']['returnValues']['proposalId'])
  }

  let handleSetProposalID = (e) => { setInputProposalID(e.target.value) }

  const govGetProposalVotes = async () => {
    var val = await governorContract.methods.proposalVotes(
      inputGetProposalVotesPropID
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  const govGetMinDelay = async () => {
    var val = await governorContract.methods.getMinDelay(
      inputSetProposalMinVotingDelay
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  let handleSetInputProposalVotingDelay = (e) => { setInputSetProposalVotingDelay(e.target.value) }

  const govSetVotingDelay = async () => {
    var val = await governorContract.methods.setVotingDelay(
      inputSetProposalVotingDelay
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  let handleSetInputProposalVotingPeriod = (e) => { setInputSetProposalVotingPeriod(e.target.value) }

  const govSetVotingPeriod = async () => {
    var val = await governorContract.methods.setVotingPeriod(
      inputSetProposalVotingPeriod
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  let handleSetVote = (e) => { setInputSetCastVote(e.target.value) }
  let handleSetVoteProposalID = (e) => { setInputSetCastVoteProposalID(e.target.value) }

  const govCastVote = async () => {
    console.log(inputSetCastVoteProposalID)
    console.log(inputSetCastVote)
    var val = await governorContract.methods.castVote(
      inputSetCastVoteProposalID,
      inputSetCastVote,
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  let handleSetStateProposalID = (e) => { setInputSetCastStateProposalID(e.target.value) }

  const govState = async () => {
    console.log(inputSetCastStateProposalID)
    var val = await governorContract.methods.state(
      inputSetCastStateProposalID
    ).send({ gas: '500000', from: "0xCaCb6865142B31dEe0d85456dC030F8B6580B541" });
    console.log('got : ', val)
  }

  //TREASURER OPERATIONS


  // AUXILIARY OPERATIONS

  const getProposals = async () => {
    var proposals = []
    for (let i = 0; i < 15; i++) {
      await governorContract.getPastEvents('ProposalCreated',
        {
          filter: { from: '0xCaCb6865142B31dEe0d85456dC030F8B6580B541' },
          fromBlock: currentBlock - (2048 * (i + 1)),
          toBlock: currentBlock - (2048 * i),
        },
        (err, events) => {
          console.log()
          if (events.length !== 0) {
            events.forEach((item, index) => {
              proposals.push(item)
            });
          }
        });
    };
    console.log(proposals)
    setProps(proposals)
  }

  useEffect(() => {
    console.log(tokenContract)
    async function load() {
      const web3 = new Web3(Web3.givenProvider || ' https://api.avax-test.network/ext/bc/C/rpc');
      const accounts = await web3.eth.requestAccounts();
      const blocknum = await web3.eth.getBlockNumber();
      setTokenContract(new web3.eth.Contract(token_abi, token_address));
      setGovernorContract(new web3.eth.Contract(governance_abi, governance_address));
      setTreasurerContract(new web3.eth.Contract(treasurer_abi, treasurer_address));
      setCurrentBlock(blocknum)
      console.log(blocknum)
    }
    load();

  }, []);


  return (
    <Stack>
      <FallInPlace>
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
      </FallInPlace>
      <VStack
        spacing={4}
        align='stretch'
        margin='20px'
      >
        <Center p='6'>
          <FallInPlace>
            <Header />
          </FallInPlace>
        </Center>
        <Box p='6'>
          <HStack>
            <VStack>
              <Box>
              <ProposalCreationDashboard />
              <ProposalInteractionDashboard />
              </Box>
            </VStack>
            <ProposolHistoryDashboard />
          </HStack>
        </Box>
      </VStack>
    </Stack>
  );
}