import { forwardRef } from '@chakra-ui/react'

import { Button, ButtonProps } from '@saas-ui/react'

import Link from 'next/link'


const NavLink = forwardRef((props, ref) => {
  const { href, type, isActive, ...rest } = props

  return (
    <Link href={href} passHref>
      <Button
        as="a"
        variant="nav-link"
        lineHeight="2rem"
        isActive={isActive}
        fontWeight="medium"
        {...rest}
      />
    </Link>
  )
})

NavLink.displayName = 'NavLink'

export default NavLink
