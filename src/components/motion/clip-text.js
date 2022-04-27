import { useViewportScroll, useTransform } from 'framer-motion'
import MotionBox from './box'


const ClipText = ({
  children,
  bg,
  bgGradient,
  bgImg,
  bgSize = 'cover',
  animate,
}) => {
  let style

  const { scrollYProgress } = useViewportScroll()
  const pos = useTransform(scrollYProgress, [0, 0.1], ['0%', '100%'])

  if (animate) {
    style = {
      backgroundPositionY: pos,
      transition: 'all .2s ease-out',
    }
  }

  return (
    <MotionBox
      as="span"
      backgroundClip="text"
      bg={bg}
      bgGradient={bgGradient}
      bgImg={bgImg}
      bgSize={bgSize}
      style={style}
    >
      {children}
    </MotionBox>
  )
}

export default ClipText
