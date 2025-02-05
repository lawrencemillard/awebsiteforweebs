"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  speed?: number
}

export default function TypewriterEffect({ text, speed = 50 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const controls = useAnimation()

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
        controls.start({ opacity: 1 })
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, controls])

  return (
    <motion.span initial={{ opacity: 0 }} animate={controls}>
      {displayedText}
    </motion.span>
  )
}

