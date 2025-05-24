"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is mounted on client side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    // Check if we're in the browser environment and component is mounted
    if (typeof window === 'undefined' || !isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (typeof window === 'undefined') return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    class Particle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      color: string
      life: number
      maxLife: number
      width: number
      height: number

      constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.x = Math.random() * this.width
        this.y = Math.random() * this.height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.vz = Math.random() * 2 + 1
        this.size = Math.random() * 3 + 1
        this.color = `hsl(${180 + Math.random() * 60}, 70%, ${50 + Math.random() * 30}%)`
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.z -= this.vz
        this.life++

        // Reset particle when it goes off screen or dies
        if (
          this.z <= 0 ||
          this.life > this.maxLife ||
          this.x < 0 ||
          this.x > this.width ||
          this.y < 0 ||
          this.y > this.height
        ) {
          this.x = Math.random() * this.width
          this.y = Math.random() * this.height
          this.z = 1000
          this.life = 0
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 1000 / (1000 + this.z)
        const x2d = this.x * scale + (this.width / 2) * (1 - scale)
        const y2d = this.y * scale + (this.height / 2) * (1 - scale)
        const size2d = this.size * scale

        const alpha = 1 - this.life / this.maxLife
        ctx.globalAlpha = alpha * 0.8
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 20
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Neural network connections
    class Connection {
      x1: number
      y1: number
      x2: number
      y2: number
      opacity: number
      pulseSpeed: number
      pulseOffset: number

      constructor(width: number, height: number) {
        this.x1 = Math.random() * width
        this.y1 = Math.random() * height
        this.x2 = Math.random() * width
        this.y2 = Math.random() * height
        this.opacity = 0
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update(time: number) {
        this.opacity = (Math.sin(time * this.pulseSpeed + this.pulseOffset) + 1) * 0.3
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(this.x1, this.y1, this.x2, this.y2)
        gradient.addColorStop(0, `rgba(6, 182, 212, ${this.opacity})`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(6, 182, 212, ${this.opacity})`)

        ctx.globalAlpha = this.opacity
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.x2, this.y2)
        ctx.stroke()
      }
    }

    // Create particles and connections
    const particles: Particle[] = []
    const connections: Connection[] = []

    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    for (let i = 0; i < 20; i++) {
      connections.push(new Connection(canvas.width, canvas.height))
    }

    let time = 0

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.016

      // Update and draw connections
      connections.forEach((connection) => {
        connection.update(time)
        connection.draw(ctx)
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      // Add floating geometric shapes
      ctx.globalAlpha = 0.1
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time * 0.5 + i) * 200 + canvas.width / 2
        const y = Math.cos(time * 0.3 + i) * 150 + canvas.height / 2
        const size = 50 + Math.sin(time + i) * 20

        ctx.strokeStyle = `hsl(${180 + i * 30}, 70%, 50%)`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.rect(x - size / 2, y - size / 2, size, size)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", resizeCanvas)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
