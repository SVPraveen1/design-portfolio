"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export default function AnimatedCard({ children, className = "", delay = 0, index = 0 }: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {}
      }
      transition={{
        delay: delay + index * 0.15, // Slower stagger
        duration: 1.2, // Slower duration
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  )
}
