import React, { useState } from "react";
import { ethers } from "ethers";
import {
  VStack,
  Button,
  Text,
  HStack,
  Box,
  Heading,
  Stack
} from "@chakra-ui/react";
import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";

export default function Wallet() {
  
  const [data, setdata] = useState({
    address: null,
    Balance: null,
  });

  const [active, setActive] = useState(false);
  
  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
    setActive(true)
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        console.log(balance, ethers.utils.formatEther(balance))
        setdata({
          address: address,
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {getbalance(account);};

  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

  return (

    <div className="App">
      <VStack justifyContent="center" alignItems="center" h="100vh">
        <HStack marginBottom="10px">
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
          >
            Let's connect to 
          </Text>
          <Text
            margin="0"
            lineHeight="1.15"
            fontSize={["1.5em", "2em", "3em", "4em"]}
            fontWeight="600"
            sx={{
              background: "linear-gradient(90deg, #F67C06 0%, #743E0A 70.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            color='tomato'
          >
            MetaMask
          </Text>
        </HStack>
        <HStack>

          <Button onClick={btnhandler} variant="primary">Connect to wallet</Button>

        </HStack>
        <VStack justifyContent="center" alignItems="center" padding="10px 0">
          <HStack>
            <Text>{`Connection Status: `}</Text>
            {active ? (
              <CheckCircleIcon color="green" />
            ) : (
              <WarningIcon color="#cd5700" />
            )}
          </HStack>
        </VStack>
      </VStack>

      <Stack spacing={8} direction='row'>
        <Feature
          title='Address'
          desc={data.address}
        />
        <Feature
          title='Balance'
          desc={data.Balance}
        />
      </Stack>

    </div>
  );
}