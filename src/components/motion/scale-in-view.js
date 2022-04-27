import { useEffect, useCallback, useRef, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'



export default function ScaleInView({ children }) {
  const ref = useRef()

  const [innerHeight, setInnerHeight] = useState(0)

  const handleResize = useCallback(() => {
    setInnerHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    setInnerHeight(window.innerHeight)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const height = (ref.current?.offsetHeight ) || 0
  const offset = (ref.current?.offsetTop ) || 0
  const start = offset - innerHeight
  const end = start + height

  const { scrollY } = useViewportScroll()
  const scale = useTransform(scrollY, [start, end], [0.8, 1])
  const opacity = useTransform(scrollY, [start, end], [0.25, 1])

  return (
    <motion.div
      ref={(node) => (ref.current = node)}
      style={{
        scale,
        opacity,
      }}
    >
      {children}
    </motion.div>
  )
}
