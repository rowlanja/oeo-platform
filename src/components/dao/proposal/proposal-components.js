const ProposalSummaryFunds = () => {
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
  
 export const ProposalBox = ({ title, description, address, ...props }) => {
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