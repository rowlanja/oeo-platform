import React from 'react';

import { CheckIcon } from '@chakra-ui/icons'


import {
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiArrowRight,
  FiUserPlus,
  FiTwitter, 
  FiGithub,
} from 'react-icons/fi'
// import { FormDialog } from '@chakra-ui/react'
import { Field } from '@saas-ui/forms'
import { Card, CardBody } from '@saas-ui/card'

import { Box, SimpleGrid } from '@chakra-ui/layout'
import {
    // Banner,
    // BannerIcon,
    // BannerContent,
    // BannerTitle,
    // BannerDescription,
    // BannerActions,
    // BannerCloseButton,
    Container,
    Heading,
    Text,
    HStack,
    VStack,
    Stack,
    Link,
    Button,
    ButtonGroup,
    useColorModeValue,
    chakra,
    Avatar,
    VisuallyHidden,
    Img,
    Grid,
    GridItem,
    useDisclosure,
    Tabs,
    TabList,
    TabPanels,
    TabPanel,
    Tab,
    useClipboard,
    IconButton,
    useTheme,
    Tag,
    Wrap,
} from '@chakra-ui/react'

import { transparentize } from '@chakra-ui/theme-tools'
import Hero from '../components/marketing/hero'
import Features from '../components/marketing/features'
import CTA from '../components/marketing/cta'
import Section from '../components/marketing/section-wrapper'
import SectionTitle from '../components/marketing/section-title'

import SignupForm from '../components/signup-form/index'
import { Em, Br } from '../components/typography'
import { FallInPlace } from '../components/motion/fall-in-place'

import { ButtonLink } from '../components/link'
import OneEyeOpenLogo from "../components/logos/Logo.png";
import { ReactLogo } from '../components/logos/react'
import { ChakraLogo } from '../components/logos/chakra'

const Pricing = () => {
    return (
      <Section id="pricing" pos="relative">
        {/* <BackgroundGradient animate={false} height="100%" /> */}
        <Box zIndex="2" pos="relative">
          <SectionTitle
            title="Pricing for every stage"
            description="Pay once and get life-time access and free updates to our high quality components."
          ></SectionTitle>
  
          <SimpleGrid columns={[1, null, 3]} spacing={4}>
            <PricingBox
              title="Open Source"
              description="Basic components, perfect to get started."
              price="Free"
            >
              <PricingFeatures>
                <PricingFeature title="MIT License" />
                <PricingFeature title="Authentication (Clerk/Supabase/Magic)" />
                <PricingFeature title="Forms (react-hook-form)" />
                <PricingFeature title="Modals manager" />
                <PricingFeature title="Hotkeys" />
                <PricingFeature title="Web3 components" />
                <Text fontSize="sm">And much more...</Text>
              </PricingFeatures>
              {/* <ButtonLink href="/docs/introduction" variant="outline" mt="10">
                View documentation
              </ButtonLink> */}
            </PricingBox>
            <PricingBox
              title="Bootstrap"
              price={
                <HStack>
                  <Text
                    textDecoration="line-through"
                    fontSize="sm"
                    color="gray.400"
                  >
                    €199,-
                  </Text>
                  <Text>€99,-</Text>
                </HStack>
              }
              description="Complete frontend stack for bootstrappers and small teams."
              borderColor="primary.500"
              boxShadow="md"
            >
              <PricingFeatures>
                <PricingFeature title="One project" />
                <PricingFeature title="One developer" />
                <PricingFeature title="Advanced components" />
                <PricingFeature title="Multiple themes" />
                <PricingFeature title="Next.js and Electron boilerplates" />
                <PricingFeature title="Free updates" />
                 
                <PricingFeature
                  title="Private beta access"
                  iconColor="green.500"
                />
              </PricingFeatures>
              {/* <ButtonLink
                colorScheme="primary"
                href="https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license"
                className="gumroad-button" >
                 Pre-order 
              </ButtonLink>  */}
            </PricingBox>
            <PricingBox
              title="Startup"
              price={
                <HStack>
                  <Text
                    textDecoration="line-through"
                    fontSize="sm"
                    color="gray.400"
                  >
                    €999,-
                  </Text>
                  <Text>€499,-</Text>
                </HStack>
              }
              description="Unlimited license for growing teams."
            >
              <PricingFeatures>
                <PricingFeature title="Unlimited projects" />
                <PricingFeature title="Unlimited developers" />
                <PricingFeature title="Everything from Bootstrap" />
                 
                <PricingFeature
                  title="Private beta access"
                  iconColor="green.500"
                />
              </PricingFeatures>
              {/* <ButtonLink
                colorScheme="primary"
                href="https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Unlimited%20license"
                className="gumroad-button"
              >
                Pre-order
              </ButtonLink> */}
            </PricingBox>
          </SimpleGrid>
  
          <Text
            p="8"
            textAlign="center"
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            VAT may be applicable depending on your location.
          </Text>
        </Box>
      </Section>
    )
  }
  
const PricingFeatures = ({ children }) => {
return (
    <VStack
    align="stretch"
    justifyContent="stretch"
    spacing="4"
    mb="8"
    flex="1"
    >
    {children}
    </VStack>
)
}

const PricingFeature = ({ title, iconColor = 'primary.500' }) => {
return (
    <HStack>
    <CheckIcon color={iconColor} />{' '}
    <Text flex="1" fontSize="sm">
        {title}
    </Text>
    </HStack>
)
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

const FaqItem = ({ question, answer }) => {
return (
    <chakra.dl>
    <chakra.dt fontWeight="semibold">{question}</chakra.dt>
    <chakra.dd color={useColorModeValue('gray.500', 'gray.400')}>
        {answer}
    </chakra.dd>
    </chakra.dl>
)
}
    
const RequestAccess = () => {
return (
    <CTA
        id="request-access"
        title="Get early access"
        py="14"
        description={
            <p>
            Not ready to pre-order yet? No worries, we will notify you when we
            launch.
            </p>
        }
        variant="subtle"
    >
        <Container
        borderRadius="md"
        bg={useColorModeValue('white', 'gray.700')}
        borderWidth="1px"
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        p={8}
        width={['90vw', null, 'md']}
        >
        <SignupForm />
        </Container>
    </CTA> 
)
}

const BoilerplateCode = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
const fieldRef = React.useRef()
function example() {
    console.log('testing')
}
return (
    <Section innerWidth="container.xl">
    <Stack spacing="12" direction={['column', null, 'row']}>
        <Box py="10" flex="1">
        <Heading
            size="2xl"
            lineHeight="shorter"
            mb="8"
            fontWeight="extrabold"
        >
            Safety through Diversification.
        </Heading>
        <VStack spacing="4" alignItems="flex-start">
            <Text fontSize={['xl', null, '2xl']} color="muted">
            Through automated staking and investing across a number of diverse crypro assets we increase safety aswell potential returns. 
            </Text>
        </VStack>

        {/* <FormDialog
            title="Create project"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={async () => setTimeout(onClose, 1000)}
            initialFocusRef={fieldRef}
            defaultValues={{
            name: '',
            }}
        >
            <Field
            ref={fieldRef}
            name="name"
            label="Name"
            help="Choose a cool name for this project"
            rules={{ required: 'Please enter a name' }}
            />
        </FormDialog> */}
        </Box>
        <Box
        display="flex"
        flex="1"
        py="10"
        alignItems="center"
        justifyContent="center"
        bg="codeBackground"
        borderRadius="2xl"
        >
        <Box width="90%" overflowX="auto">
            {/* <CodePanel language="typescript">{codeExamples.form}</CodePanel> */}
        </Box>
        </Box>
    </Stack>
    </Section>
)
}

const Themable = () => {
return (
    <Section innerWidth="container.xl">
    <Box py="10" flex="1" width={['full', null, '50%']}>
        <Heading size="2xl" mb="8" fontWeight="extrabold">
        Leverage Your Power.
        </Heading>
        <VStack spacing="4" alignItems="flex-start">
        <Text fontSize={['xl', null, '2xl']} color="muted">
            Through the OneEyeOpen Dao you can leverage your investment automatically for a say in new services, operations or decisions made on across the OneEyeOpen platform.
        </Text>
        </VStack>
    </Box>
    <Stack spacing="12" direction={{ base: 'column', xl: 'row' }}>
        <Box
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="center"
        bg="codeBackground"
        borderRadius="2xl"
        >
        <Tabs width="100%" colorScheme="white">
            <TabList borderColor="whiteAlpha.200" color="white">
            <Tab>Style props</Tab>
            <Tab>Theme</Tab>
            </TabList>
            <TabPanels>
            <TabPanel>
                {/* <CodePanel language="typescript" height="280px">
                {codeExamples.styleProps}
                </CodePanel> */}
            </TabPanel>
            <TabPanel>
                {/* <CodePanel language="typescript" height="280px">
                {codeExamples.theme}
                </CodePanel> */}
            </TabPanel>
            </TabPanels>
        </Tabs>
        </Box>
        <Box
        display="flex"
        flex="1"
        p={[0, null, 10]}
        alignItems="center"
        justifyContent="center"
        borderRadius="2xl"
        >
        {/* <Banner
            display="flex"
            bg={useColorModeValue('white', 'gray.900')}
            colorScheme="purple"
            backgroundClip="padding-box"
            borderRadius="full"
            borderWidth="2px"
            borderColor="transparent"
            position="relative"
            py="2"
            px="3"
            overflow="visible"
            transitionProperty="common"
            transitionDuration="normal"
            boxShadow="lg"
            _before={{
            content: `""`,
            position: 'absolute',
            zIndex: -1,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: 'inherit',
            margin: '-2px',
            bgGradient: 'linear(to-r, purple.500, cyan.500)',
            }}
            _hover={{
            boxShadow: 'sm',
            }}
        >
            <BannerIcon boxSize="14px" />
            <BannerContent fontSize="sm">
            <BannerTitle>Pre-order Saas UI Pro now!</BannerTitle>
            <BannerDescription display={{ base: 'none', md: 'block' }}>
                50% discount for early adopters.
            </BannerDescription>
            </BannerContent>
            <BannerCloseButton position="absolute" top="2" right="4" />
        </Banner> */}
        </Box>
    </Stack>
    </Section>
)
}

const HighlightBox = (props) => {
const { children, ...rest } = props
return (
    <VStack
    bgColor={useColorModeValue('gray.100', 'gray.800')}
    borderRadius="md"
    p="8"
    flex="1 0"
    alignItems="flex-start"
    spacing="8"
    overflow="hidden"
    position="relative"
    {...rest}
    >
    {children}
    </VStack>
)
}

const Highlights = () => {
const theme = useTheme()
const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')
return (
    <Section innerWidth="container.xl" position="relative" overflow="hidden">
    <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        position="relative"
    >
        <GridItem colSpan={[1, null, 2]} as={HighlightBox}>
        <Heading fontSize="1.4em">The Proof is in the Pudding</Heading>
        <Text color="muted" fontSize="xl">
            Claims are useless. Actual proof is what users deserve before choosing OneEyeOpen as their platform. For a deeper
            dive on the powerful fundamentals that drive our platform click below! 
        </Text>
        <Button
            colorScheme="black"
            variant="link"
            as={Link}
            href="/docs/introduction"
            rightIcon={<FiArrowRight />}
        >
            Read fundamentals
        </Button>
        <HStack spacing="12">
            <HStack
            py="1"
            px="1"
            borderRadius="full"
            bg="codeBackground"
            borderWidth="1px"
            >
            {/* <CodePanel language="bash">{value}</CodePanel> */}
            <IconButton
                icon={hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="copy"
                onClick={onCopy}
                variant="ghost"
                borderRadius="full"
                color="white"
            />
            </HStack>
        </HStack>
        </GridItem>
        <GridItem as={HighlightBox}>
        <Heading fontSize="1.4em">Solid foundations</Heading>
        <Text color="muted" fontSize="lg">
            We don&apos;t like to re-invent the wheel, neither should you. We
            selected the most productive and established tools in the cryptography and finance
            scene to build our platform.  
            
        </Text>
        </GridItem>
        <GridItem
        
        as={HighlightBox}
        bgGradient={`linear(to-r, ${transparentize(
            'purple.500',
            0.3
        )(theme)}, ${transparentize('cyan.500', 0.3)(theme)})`}
        justifyContent="center"
        >
        <Heading fontSize="1.4em">
            Active Team & Community
        </Heading>
        <Card
            avatar={
            <Avatar name="Tien Tienth" src="/testimonials/turbothinh.png" />
            }
            title="Tien Thinh"
            subtitle="@turbothinh"
            border="0"
            bg="transparent"
            boxShadow="none"
            sx={{
            '& p': {
                color: useColorModeValue('blackAlpha.600', 'whiteAlpha.500'),
            },
            }}
        >
            <CardBody>
            Saas UI is the ONLY template out there that does the code
            structure that I think can scale 😄
            </CardBody>
        </Card>
        <Button
            colorScheme="black"
            variant="link"
            as={Link}
            href="/docs/introduction"
            rightIcon={<FiTwitter />}
        >
            Check Twitter
        </Button>
        <Button
            colorScheme="black"
            variant="link"
            as={Link}
            href="/docs/introduction"
            rightIcon={<FiGithub />}
        >
            Check Github
        </Button>
        </GridItem>
        <GridItem colSpan={[1, null, 2]} as={HighlightBox}>
        <Heading fontSize="1.4em">
            Start your next idea two steps ahead
        </Heading>
        <Text color="muted" fontSize="lg">
            There are a million things to think about when you start your SaaS.
            We take care of all your basic frontend needs, so you can start
            building functionality that makes your product unique.
        </Text>
        <Wrap>
            {[
            'authentication',
            'navigation',
            'crud',
            'settings',
            'multi-tenancy',
            'layouts',
            'page layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'theming',
            'upselling',
            'unit testing',
            'responsiveness',
            ].map((value) => (
            <Tag key={value} variant="subtle" colorScheme="purple">
                {value}
            </Tag>
            ))}
        </Wrap>
        </GridItem>
    </Grid>
    </Section>
)
}

function Home() {
return (
    <Box>
        {/* <BackgroundGradient animate={false} /> */}
        <Box mb={8} w="full" position="relative" overflow="hidden">
        <Box pos="relative">
            <Container maxW="container.xl" py="40">
            <Stack direction={['column', 'row']}>
                <Hero
                id="home"
                justifyContent="flex-start"
                px="0"
                title={
                    <FallInPlace>
                    OneEyeOpen Console for all
                    </FallInPlace>
                }
                description={
                    <FallInPlace delay={0.4} fontWeight="medium">
                    Advanced console for Index ICO launches, Index NFT funds & Index staking platform
                    </FallInPlace>
                }
                >
                <FallInPlace delay={0.8}>
                    <HStack pt="4" pb="12" spacing="8">
                    <FallInPlace delay={1}>
                        <img  width={250} height={250} src={OneEyeOpenLogo}/>
                    </FallInPlace>

                    </HStack>

                    <ButtonGroup
                    flexDirection={['column', null, 'row']}
                    spacing={[0, null, 8]}
                    alignItems="center"
                    >
                    <Button
                        colorScheme="primary"
                        size="lg"
                        mb={[8, null, 0]}
                        onClick={() => {
                        document
                            .getElementById('pricing')
                            .scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Get early access
                    </Button>
                    <Button
                        colorScheme="black"
                        variant="link"
                        as={Link}
                        href="/docs/introduction"
                        rightIcon={<FiArrowRight />}
                    >
                        Read documentation
                    </Button>
                    </ButtonGroup>
                </FallInPlace>
                </Hero>
                <Box
                height="600px"
                position="absolute"
                display={{ base: 'none', lg: 'block' }}
                left={{ lg: '60%', xl: '55%' }}
                width="80vw"
                maxW="1100px"
                margin="0 auto"
                >

                </Box>
            </Stack>
            </Container>
            <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={4}
            innerWidth="container.xl"
            pt="20"
            features={[
                {
                title: 'Accessible',
                icon: FiSmile,
                description:
                    'Full Index protocols accesible through Phone and Web console ',
                iconPosition: 'left',
                delay: 0.6,
                },
                {
                title: 'Intuitive',
                icon: FiSliders,
                description:
                    'Cryptocurrency Finance products that are accessible and make sense',
                iconPosition: 'left',
                delay: 0.8,
                },
                {
                title: 'Composable',
                icon: FiGrid,
                description:
                    'Compose and interact with products that to fit your needs',
                iconPosition: 'left',
                delay: 1,
                },
                {
                title: 'Productive',
                icon: FiThumbsUp,
                description:
                    'Iteratively compounding your funds in a safe and aduitable manner',
                iconPosition: 'left',
                delay: 1.1,
                },
            ]}
            reveal={FallInPlace}
            />
        </Box>

        {/* <ComponentShowcase /> */}

        <Box id="features">
            <BoilerplateCode />

            <Themable />

            <Highlights />
        </Box>

        <Section
            innerWidth={['100%', null, 'container.xl']}
            position="relative"
            overflow="hidden"
        >
            <Box position="relative">
            <Heading
                fontWeight="bold"
                fontSize={['2xl', null, '4xl']}
                lineHeight="lg"
                color={useColorModeValue('black', 'white')}
                width={{ base: 'full', lg: '50%' }}
                mb="8"
            >
                Building SaaS products requires you to be a generalist on many
                fronts. However many developers aren&apos;t very design savvy and
                vice versa.
            </Heading>

            <Stack
                fontSize="lg"
                spacing="16"
                alignItems="flex-start"
                color="muted"
                direction={{ base: 'column', lg: 'row' }}
            >
                <VStack spacing="8" alignItems="flex-start">
                <Text fontSize={['xl', null, '2xl']}>
                    SaaS UI tries to fill this gap by giving developers an
                    extensive set of beautifully crafted components build on{' '}
                    <Em>best in class tools</Em>. While on the same time serve as
                    a <Em>great foundation</Em> for designers to create their
                    brand.
                </Text>
                </VStack>
                <VStack spacing="8" alignItems="flex-start">
                <Text fontSize={['xl', null, '2xl']}>
                    With SaaS UI you&apos;ll <Em>save hundreds of hours</Em>{' '}
                    building essential functionaly for your product. Time that you
                    can use to validate new ideas, find your perfect product
                    market fit and build functionality that makes your product
                    unique.
                </Text>
                <Stack direction="row" align="center">
                    <Avatar src="/eelco128.jpg" mr="2" size="md" />
                    <VStack align="flex-start" spacing="0">
                    <Em>Eelco Wiersma</Em>
                    <Text fontSize="sm">Founder Saas UI</Text>
                    </VStack>
                </Stack>
                </VStack>
            </Stack>
            </Box>
        </Section>

        <ProFeatures />

        <Section>
            <SectionTitle
            title="Plays well with others"
            description={
                <>
                Saas UI is backend agnostic and works with the framework
                    or starter pack that you love.
                </>
            }
            />

            <SimpleGrid
            columns={[2, null, 4]}
            columnGap={8}
            sx={{
                svg: {
                width: '80%',
                height: 'auto',
                maxHeight: '40px',
                },
            }}
            >
            <Link
                href="https://redwoodjs.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                path: {
                    fill: useColorModeValue('#000', '#fff'),
                },
                }}
            >
                {/* <RedwoodJS alt="RedwoodJS logo" /> */}
                <VisuallyHidden>RedwoodJS</VisuallyHidden>
            </Link>

            <Link
                href="https://nextjs.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                path: {
                    fill: useColorModeValue('#000', '#fff'),
                },
                }}
            >
                {/* <NextJS alt="Next.JS logo" /> */}
                <VisuallyHidden>Next.js</VisuallyHidden>
            </Link>

            <Link href="https://blitzjs.com" p="8" h="100%" d="flex">
                {/* <Blitz alt="Blitz.js logo" /> */}
                <VisuallyHidden>Blitz.js</VisuallyHidden>
            </Link>

            <Link
                href="https://supabase.com"
                p="8"
                h="100%"
                d="flex"
                sx={{
                'path.supabase_svg__wordmark': {
                    fill: useColorModeValue('#1F1F1F', '#FFF'),
                },
                }}
            >
                {/* <Supabase
                alt="Supabase logo"
                viewBox="0 0 581 113" // somehow this gets removed when importing
                /> */}
                <VisuallyHidden>Supabase</VisuallyHidden>
            </Link>
            </SimpleGrid>

            <Text
            fontSize="sm"
            opacity="0.4"
            width={['100%', null, '50%']}
            m="0 auto"
            mt="10"
            >
            Technologies included: Next.js, Electron, React, Chakra UI,
            Typescript, Styled Components, Emotion, React Hook Form, React
            Query, Turborepo, Prettier, Storybook, Jest, Testing Library and
            more...
            </Text>
        </Section>

        <Pricing />

        <RequestAccess />

        <Section id="faq">
            <SectionTitle title="Frequently asked questions" />

            <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <FaqItem
                question="How many products can I use Saas UI Pro for?"
                answer={
                <>
                    The single license can be used for one commercial application
                    or SaaS product and unlimited internal tools. You can buy as
                    many licenses as you need.   The unlimited license does
                    not have any restrictions.
                </>
                }
            />
            <FaqItem
                question="Can I use Saas UI Pro for client work?"
                answer="Yes, that's totally up to you, as long as it fits the license you purchase."
            />
            <FaqItem
                question="Can I use Saas UI Pro for Open Source projects?"
                answer="No currently not. A large part of Saas UI is already released under MIT license. We try to give back to the community as much as possible."
            />
            <FaqItem
                question="Does Saas UI include Figma, Sketch or other design files?"
                answer="No, Saas UI does not include any design assets. Maintaining design resources costs a lot of extra effort. We believe small teams can move much faster by designing directly in code, with help of Storybooks."
            />
            <FaqItem
                question="Does Saas UI have a Javascript version?"
                answer="No, we believe Typescript is the way to go in order to produce highly productive and qualitative code that scales."
            />
            <FaqItem
                question="What does 'lifetime access' mean?"
                answer="Saas UI Pro is a one-time purchase, with no recurring subscription. You will have access to all assets of the Saas UI library forever."
            />
            <FaqItem
                question="What does 'free updates' include?"
                answer={
                <>
                    We&apos;ll add new components and improvements to the library
                    as we get new ideas and feedback, these updates will always be
                    free for all customers that sign-up for the early access.{' '}
                    
                    
                    We might release different stacks, for example for Vue and
                    backends, these will be sold seperately.
                </>
                }
            />
            <FaqItem
                question="I'm not satisfied, can I get my money back?"
                answer="Yeah, no hard feelings. Saas UI is opinionated and might not suit your style, let us know within 14 days of your purchase and we'll refund your money."
            />
            <FaqItem
                question="Do you offer technical support?"
                answer={
                <>
                    Once you sign up you get access to our Discord community,
                    where you can ask questions, report bugs or feature requests
                    and get help from other customers.  
                    
                    If you require more specialised support or consultancy contact
                    us at{' '}
                    <Link href="mailto:hello@saas-ui.dev">hello@saas-ui.dev</Link>
                </>
                }
            />
            </SimpleGrid>
        </Section>
        </Box>
    </Box>
    )
}

    
    
    
   
    
const codeExamples = {
      form: `import * as React from 'react'
    import { FormDialog, Field } from '@saas-ui/react'
    interface CreateProjectInputs {
      name: string
    }
    export const CreateProject = (props) => {
      return (
        <FormDialog<CreateProjectInputs>
          title="Create project"
          defaultValues={{
            name: '',
          }}
          {...props}
        >
            <Field
              name="name"
              label="Name"
              help="Choose a cool name for this project"
              rules={{ required: 'Please enter a name' }}
            />
        </FormDialog>
      )
    }`,
      styleProps: `<Banner
      bg={useColorModeValue('white', 'gray.900')}
      colorScheme="purple"
      backgroundClip="padding-box"
      borderRadius="full"
      border="2px solid transparent"
      position="relative"
      py="2"
      px="3"
      cursor="pointer"
      overflow="visible"
      transitionProperty="common"
      transitionDuration="normal"
      boxShadow="lg"
      _before={{
        content: \`""\`,
        position: 'absolute',
        zIndex: -1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
        margin: '-2px',
        bgGradient: 'linear(to-r, purple.500, cyan.500)',
      }}
      _hover={{
        boxShadow: 'sm',
      }}
    >
      <BannerIcon boxSize="1" />
      <BannerContent fontSize="sm">
        <BannerTitle>Pre-order Saas UI Pro now!</BannerTitle>
        <BannerDescription display={{ base: 'none', md: 'block' }}>
          50% discount for early adopters.
        </BannerDescription>
      </BannerContent>
      <BannerCloseButton position="absolute" top="2" right="4" />
    </Banner>`,
      theme: `export default {
      variants: {
        gradient: (props) => {
          return {
            container: {
              background: mode('white', 'gray.900')(props),
              backgroundClip: 'padding-box',
              borderRadius: 'full',
              border: '2px solid transparent',
              position: 'relative',
              py: 2,
              px: 2,
              cursor: 'pointer',
              overflow: 'visible',
              transitionProperty: 'common',
              transitionDuration: 'normal',
              boxShadow: 'lg'
              _before: {
                content: '""',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: 'inherit',
                margin: '-2px',
                bgGradient: 'linear(to-r, purple.500, cyan.500)'
              }
              _hover: {
                boxShadow: 'sm'
              }
            },
            icon: {
              boxSize: '1'
            },
            content: {
              fontSize: 'sm'
            },
            description: {
              display: { base: 'none', md: 'block' }
            },
            close: {
              position: 'absolute',
              top: 2,
              right: 4
            }
          }
        }
      }
    }`,
}
    
const ProFeatures = () => {
    return (
    <Features
        id="pro-features"
        title={
        <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            textAlign="left"
            as="p"
        >
            Not your standard
            dashboard template.
        </Heading>
        }
        description={
        <Text fontSize={['xl', null, '2xl']}>
            Saas UI Pro includes everything you need to build frontends that
            scale.
            
            Use it as a template for your next product or foundation for your
            design system.
        </Text>
        }
        align="left"
        variant="alternate"
        columns={[1, 2, 3]}
        iconSize={4}
        features={[
        {
            title: 'Components.',
            icon: FiBox,
            description:
            'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
            variant: 'inline',
        },
        {
            title: 'Starterkits.',
            icon: FiLock,
            description:
            'Example apps in Next.JS, Electron and Vite. Including authentication, billing, example pages, everything you need to get started FAST.',
            variant: 'inline',
        },
        {
            title: 'Documentation.',
            icon: FiSearch,
            description:
            'Extensively documented, including storybooks, best practices, use-cases and examples.',
            variant: 'inline',
        },
        {
            title: 'Onboarding.',
            icon: FiUserPlus,
            description:
            'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
            variant: 'inline',
        },
        {
            title: 'Feature flags.',
            icon: FiFlag,
            description:
            "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
            variant: 'inline',
        },
        {
            title: 'Upselling.',
            icon: FiTrendingUp,
            description:
            'Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
            variant: 'inline',
        },
        {
            title: 'Themes.',
            icon: FiToggleLeft,
            description:
            'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
            variant: 'inline',
        },
        {
            title: 'Generators.',
            icon: FiTerminal,
            description:
            'Extend your design system while maintaininig code quality and consistency with build-in generators.',
            variant: 'inline',
        },
        {
            title: 'Monorepo.',
            icon: FiCode,
            description: (
            <>
                All code is available as packages in a high-performance{' '}
                <Link href="https://turborepo.com">Turborepo</Link>, you have full
                control to modify and adjust it to your workflow.
            </>
            ),
            variant: 'inline',
        },
        ]}
    />
    )

}
    
export default Home
