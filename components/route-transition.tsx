"use client"

import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface RouteTransitionProps {
  children: React.ReactNode
}

// WebGL Loading Animation Component
function LoadingWebGL() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const animationRef = React.useRef<number>()

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class LoadingParticle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 1
        this.vy = (Math.random() - 0.5) * 1
        this.size = Math.random() * 2 + 1
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life++

        if (this.life > this.maxLife || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.life = 0
        }
      }

      draw() {
        const alpha = 1 - this.life / this.maxLife
        ctx.globalAlpha = alpha * 0.6
        ctx.fillStyle = `rgba(200, 200, 200, 1)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles: LoadingParticle[] = []
    for (let i = 0; i < 100; i++) {
      particles.push(new LoadingParticle())
    }

    let time = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      // Draw connecting lines
      ctx.globalAlpha = 0.2
      ctx.strokeStyle = "rgba(150, 150, 150, 1)"
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw geometric shapes
      ctx.globalAlpha = 0.1
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time * 0.5 + i) * 100 + canvas.width / 2
        const y = Math.cos(time * 0.3 + i) * 80 + canvas.height / 2
        const size = 30 + Math.sin(time + i) * 10

        ctx.strokeStyle = "rgba(120, 120, 120, 1)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.rect(x - size / 2, y - size / 2, size, size)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    // Hide content immediately when route changes
    setShowContent(false)
    setIsLoading(true)
    setLoadingProgress(0)

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Wait a bit more before showing content
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => setShowContent(true), 100)
          }, 800)
          return 100
        }
        return prev + Math.random() * 12 // Slower increment
      })
    }, 150) // Slower interval

    return () => {
      clearInterval(progressInterval)
    }
  }, [pathname])

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "HOME"
      case "/about":
        return "ABOUT"
      case "/projects":
        return "PROJECTS"
      case "/contact":
        return "CONTACT"
      default:
        return "LOADING"
    }
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="route-loading"
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* WebGL Background */}
            <LoadingWebGL />

            {/* Animated grid background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-px h-full bg-gradient-to-b from-transparent via-gray-600/40 to-transparent"
                  style={{ left: `${(i + 1) * 6.67}%` }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 1.5 }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"
                  style={{ top: `${(i + 1) * 10}%` }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 1.2 }}
                />
              ))}
            </div>

            {/* Loading content */}
            <div className="relative z-10 text-center">
              {/* Page title */}
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-widest"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {getPageTitle()
                  .split("")
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 30, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{
                        delay: 1.2 + index * 0.12,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.h2>

              {/* Progress bar */}
              <motion.div
                className="w-96 h-px bg-gray-800 relative mx-auto mb-8"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.8, duration: 1.5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-gray-300 to-white"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent to-white/60"
                  animate={{ x: ["-64px", "384px"] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Loading percentage */}
              <motion.p
                className="text-gray-400 text-lg tracking-wider mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 1.0 }}
              >
                {Math.round(loadingProgress)}%
              </motion.p>

              {/* Loading text */}
              <motion.p
                className="text-gray-500 text-sm tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6, duration: 1.0 }}
              >
                LOADING EXPERIENCE
              </motion.p>
            </div>

            {/* Enhanced floating particles */}
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4,
                  delay: Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
