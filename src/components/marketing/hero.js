import { Container, Flex } from '@chakra-ui/layout'
import { HTMLChakraProps, ThemingProps } from '@chakra-ui/react'
import PageTitle from './page-title'

export default function Hero({
  title,
  description,
  children,
  ...rest
}) {
  return (
    <Flex py="20" alignItems="center" {...rest}>
      <Container>
        <PageTitle title={title} description={description} />
        {children}
      </Container>
    </Flex>
  )
}