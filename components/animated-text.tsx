"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export default function AnimatedText({ text, className = "", delay = 0, stagger = 0.03 }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <span ref={ref} className={`inline-block ${className}`} style={{ overflow: "visible" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            display: "inline-block",
            minWidth: char === " " ? "0.3em" : "auto",
          }}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }
              : {}
          }
          transition={{
            delay: delay + index * stagger,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}
