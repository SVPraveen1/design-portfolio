"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AdvancedWebGL() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / width,
        y: e.clientY / height,
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Advanced particle system
    class AdvancedParticle {
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      life: number
      maxLife: number
      color: { r: number; g: number; b: number }
      trail: { x: number; y: number; alpha: number }[]

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.z = Math.random() * 1000
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.vz = Math.random() * 2 + 0.5
        this.size = Math.random() * 2 + 0.5
        this.life = 0
        this.maxLife = Math.random() * 300 + 200
        this.color = {
          r: Math.random() * 50 + 200,
          g: Math.random() * 50 + 200,
          b: Math.random() * 50 + 200,
        }
        this.trail = []
      }

      update() {
        // Mouse interaction
        const mouseInfluence = 100
        const dx = mouseRef.current.x * width - this.x
        const dy = mouseRef.current.y * height - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence
          this.vx += (dx / distance) * force * 0.01
          this.vy += (dy / distance) * force * 0.01
        }

        this.x += this.vx
        this.y += this.vy
        this.z -= this.vz
        this.life++

        // Add to trail
        this.trail.push({ x: this.x, y: this.y, alpha: 1 })
        if (this.trail.length > 10) {
          this.trail.shift()
        }

        // Update trail alpha
        this.trail.forEach((point, index) => {
          point.alpha = index / this.trail.length
        })

        // Reset particle
        if (
          this.z <= 0 ||
          this.life > this.maxLife ||
          this.x < -50 ||
          this.x > width + 50 ||
          this.y < -50 ||
          this.y > height + 50
        ) {
          this.x = Math.random() * width
          this.y = Math.random() * height
          this.z = 1000
          this.life = 0
          this.trail = []
        }
      }

      draw() {
        const scale = 1000 / (1000 + this.z)
        const x2d = this.x * scale + (width / 2) * (1 - scale)
        const y2d = this.y * scale + (height / 2) * (1 - scale)
        const size2d = this.size * scale

        const alpha = (1 - this.life / this.maxLife) * 0.8

        // Draw trail
        this.trail.forEach((point, index) => {
          if (index > 0) {
            const prevPoint = this.trail[index - 1]
            ctx.globalAlpha = point.alpha * alpha * 0.3
            ctx.strokeStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(prevPoint.x, prevPoint.y)
            ctx.lineTo(point.x, point.y)
            ctx.stroke()
          }
        })

        // Draw particle
        ctx.globalAlpha = alpha
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * 2)
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`)
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Neural network visualization
    class NeuralNode {
      x: number
      y: number
      connections: NeuralNode[]
      activity: number
      targetActivity: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.connections = []
        this.activity = 0
        this.targetActivity = Math.random()
      }

      update() {
        this.activity += (this.targetActivity - this.activity) * 0.02
        if (Math.random() < 0.005) {
          this.targetActivity = Math.random()
        }
      }

      draw() {
        // Draw connections
        this.connections.forEach((node) => {
          const alpha = (this.activity + node.activity) * 0.3
          ctx.globalAlpha = alpha
          ctx.strokeStyle = `rgba(100, 100, 100, 1)`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(node.x, node.y)
          ctx.stroke()

          // Pulse effect
          const pulseProgress = (Date.now() * 0.001) % 1
          const pulseX = this.x + (node.x - this.x) * pulseProgress
          const pulseY = this.y + (node.y - this.y) * pulseProgress

          ctx.globalAlpha = alpha * (1 - pulseProgress)
          ctx.fillStyle = `rgba(200, 200, 200, 1)`
          ctx.beginPath()
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2)
          ctx.fill()
        })

        // Draw node
        ctx.globalAlpha = 0.6 + this.activity * 0.4
        ctx.fillStyle = `rgba(150, 150, 150, 1)`
        ctx.beginPath()
        ctx.arc(this.x, this.y, 3 + this.activity * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles and neural network
    const particles: AdvancedParticle[] = []
    const nodes: NeuralNode[] = []

    for (let i = 0; i < 200; i++) {
      particles.push(new AdvancedParticle())
    }

    // Create neural network grid
    const nodeSpacing = 150
    for (let x = nodeSpacing; x < width; x += nodeSpacing) {
      for (let y = nodeSpacing; y < height; y += nodeSpacing) {
        nodes.push(new NeuralNode(x, y))
      }
    }

    // Connect nearby nodes
    nodes.forEach((node) => {
      nodes.forEach((otherNode) => {
        if (node !== otherNode) {
          const distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2)
          if (distance < nodeSpacing * 1.5 && Math.random() < 0.3) {
            node.connections.push(otherNode)
          }
        }
      })
    })

    let time = 0

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, width, height)

      time += 0.016

      // Update and draw neural network
      nodes.forEach((node) => {
        node.update()
        node.draw()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Add floating geometric shapes with complex animations
      ctx.globalAlpha = 0.1
      for (let i = 0; i < 3; i++) {
        const x = Math.sin(time * 0.3 + i * 2) * 200 + width / 2
        const y = Math.cos(time * 0.2 + i * 2) * 150 + height / 2
        const rotation = time * 0.5 + i
        const size = 30 + Math.sin(time + i) * 10

        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(rotation)
        ctx.strokeStyle = `rgba(100, 100, 100, 1)`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.rect(-size / 2, -size / 2, size, size)
        ctx.stroke()
        ctx.restore()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

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
