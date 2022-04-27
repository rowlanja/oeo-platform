import { cx } from '@chakra-ui/utils'
import {
  chakra,
  useStyleConfig,
  omitThemingProps,
  Container,
  ThemingProps,
  StyleProps,
  HTMLChakraProps,
} from '@chakra-ui/react'

export default function Section({
  children,
  innerWidth,
  className,
  variant,
  ...props
}) {
  const styles = useStyleConfig('Section', {variant})

  const ownProps = omitThemingProps(props)

  return (
    <chakra.div
      __css={styles}
      className={cx('section', className)}
      {...ownProps}
    >
      <Container height="full" maxW={innerWidth}>
        {children}
      </Container>
    </chakra.div>
  )
}