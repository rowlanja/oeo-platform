import {
    VStack,
    Box,
    useColorModeValue,
} from "@chakra-ui/react";

export const ProposalSummaryActiveCount = () => {
    return (
      <VStack
        zIndex="2"
        bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
        borderRadius="md"
        p="8"
        flex="1 0"
        alignItems="stretch"
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.800')}        >
        <Box color={useColorModeValue('gray.500', 'gray.400')}>
          Number of Active Proposals : --
        </Box>
      </VStack>
    );
  }
  
 export const ProposalSummaryDeadCount = () => {
    return (
      <VStack
        zIndex="2"
        bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
        borderRadius="md"
        p="8"
        flex="1 0"
        alignItems="stretch"
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.800')}        >
        <Box color={useColorModeValue('gray.500', 'gray.400')}>
          Number of Completed Proposals : --
        </Box>
      </VStack>
    );
  }
  
 export const ProposalSummaryActiveVoters = () => {
    return (
      <VStack
        zIndex="2"
        bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
        borderRadius="md"
        p="8"
        flex="1 0"
        alignItems="stretch"
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.800')}        >
        <Box color={useColorModeValue('gray.500', 'gray.400')}>
          Number of Active Voters : --
        </Box>
      </VStack>
    );
  }
  
 export const ProposalSummaryTotalVotes = () => {
    return (
      <VStack
        zIndex="2"
        bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
        borderRadius="md"
        p="8"
        flex="1 0"
        alignItems="stretch"
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.800')}        >
        <Box color={useColorModeValue('gray.500', 'gray.400')}>
          Number of Total Votes : --
        </Box>
      </VStack>
    );
  }
  
  export const ProposalSummaryFunds = () => {
    return (
      <VStack
        zIndex="2"
        bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.300')}
        borderRadius="md"
        p="8"
        flex="1 0"
        alignItems="stretch"
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.800')}        >
        <Box color={useColorModeValue('gray.500', 'gray.400')}>
          Size of Transfered Funds : --
        </Box>
      </VStack>
    );
  }
  