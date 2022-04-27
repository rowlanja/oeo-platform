import React, { Fragment } from 'react'
import {
  Box,
  BoxProps,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
} from '@chakra-ui/layout'
import {
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
} from '@chakra-ui/react'
import SectionWrapper, { SectionProps } from '../section-wrapper'
import SectionTitle, { SectionTitleProps } from '../section-title'

import ScaleInView from '../../motion/scale-in-view'


export function Feature({
  title,
  description,
  icon,
  iconPosition,
  iconSize = 8,
  ip,
  variant,
}) {
  const styles = useMultiStyleConfig('Feature', { variant })

  const pos = iconPosition || ip
  const direction = pos === 'left' ? 'row' : 'column'

  return (
    <Stack sx={styles.container} direction={direction}>
      {icon && (
        <Circle sx={styles.icon}>
          <Icon as={icon} boxSize={iconSize} />
        </Circle>
      )}
      <Box>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.description}>{description}</Text>
      </Box>
    </Stack>
  )
}

export default function Features({
  title,
  description,
  features,
  columns = [1, 2, 3],
  spacing = 8,
  align = 'center',
  iconSize = 8,
  aside,
  reveal,
  ...props
}) {
  if (!!aside) {
    align = 'left'
  }
  const ip = align === 'left' ? 'left' : 'top'

  let Wrap = Box
  if (reveal === true) {
    Wrap = ScaleInView
  } else if (reveal) {
    Wrap = reveal
  }

  return (
    <SectionWrapper {...props}>
      <Stack direction="row" height="full" align="flex-start">
        <VStack flex="1" spacing={[4, null, 8]} alignItems="stretch">
          {(title || description) && (
            <Wrap>
              <SectionTitle
                title={title}
                description={description}
                align={align}
              />
            </Wrap>
          )}
          <SimpleGrid columns={columns} spacing={spacing}>
            {features.map((feature, i) => {
              return (
                <Wrap key={i} delay={feature.delay}>
                  <Feature iconSize={iconSize} {...feature} ip={ip} />
                </Wrap>
              )
            })}
          </SimpleGrid>
        </VStack>
        {aside && (
          <Box flex="1" p="8">
            {aside}
          </Box>
        )}
      </Stack>
    </SectionWrapper>
  )
}