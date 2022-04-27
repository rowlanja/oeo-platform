import { mode } from '@chakra-ui/theme-tools'


export default {
  variants: {
    'nav-link': (props) => {
      const { isActive } = props

      const hoverColor = mode('gray.900', 'white')(props)
      return {
        outline: 'none',
        fontWeight: '500',
        color: isActive
          ? hoverColor
          : mode('gray.700', 'whiteAlpha.700')(props),
        transition: 'color .2s ease-in',
        _hover: {
          textDecoration: 'none',
          color: hoverColor,
        },
      }
    },
  },
}
