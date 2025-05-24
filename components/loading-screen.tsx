"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500)
    const timer2 = setTimeout(() => setStage(2), 1500)
    const timer3 = setTimeout(() => setStage(3), 2500)
    const timer4 = setTimeout(() => onComplete(), 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"
              style={{ left: `${(i + 1) * 5}%` }}
              initial={{ scaleY: 0 }}
              animate={stage >= 1 ? { scaleY: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.8 }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
              style={{ top: `${(i + 1) * 6.67}%` }}
              initial={{ scaleX: 0 }}
              animate={stage >= 1 ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.03, duration: 0.6 }}
            />
          ))}
        </div>

        {/* Main text animation */}
        <div className="relative z-10 text-center">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold tracking-wider"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {"KSV PRAVEEN".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-gray-100 via-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    textShadow: "0 0 30px rgba(255,255,255,0.5)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {stage >= 2 && (
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-gray-400 text-lg tracking-widest">FULL STACK DEVELOPER</div>
              <motion.div
                className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          )}

          {stage >= 3 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: Math.random() * 1,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Loading progress */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-64 h-px bg-gray-800 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-gray-300"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            className="text-gray-500 text-sm mt-4 text-center tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            LOADING EXPERIENCE
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
