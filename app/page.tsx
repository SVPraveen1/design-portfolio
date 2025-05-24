"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Code2,
  ExternalLink,
  DollarSign,
  Brain,
  Heart,
} from "lucide-react"
import Link from "next/link"
import AdvancedWebGL from "@/components/advanced-webgl"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/loading-screen"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import { useState } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Advanced WebGL Background */}
      <div className="absolute inset-0">
        <AdvancedWebGL />
      </div>

      {/* Navigation */}
      <motion.nav
        className="relative z-50 flex justify-between items-center p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="text-xl font-bold text-white tracking-wider"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          KSV<span className="text-gray-400">PRAVEEN</span>
        </motion.div>
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group text-sm tracking-wider"
              >
                <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                  {item}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-px bg-white"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <MagneticButton className="border border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider px-6 py-2 rounded-full">
            <Link href="/contact">Get in Touch</Link>
          </MagneticButton>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[85vh] px-6">
        <div className="text-center max-w-6xl">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "#4B5563" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Code2 className="w-4 h-4 text-gray-400 mr-2" />
              </motion.div>
              <span className="text-gray-400 text-sm tracking-wider">Digital Experience Studio</span>
            </motion.div>
          </motion.div>

          <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>I craft </span>
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                animate={{
                  rotateX: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                AI driven
              </motion.span>
              <br />
              <span>automation full stack</span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                applications.
              </motion.span>
            </motion.div>
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Specializing in <span className="text-gray-200 font-medium">Next.js</span>,{" "}
            <span className="text-gray-200 font-medium">React</span>, and{" "}
            <span className="text-gray-200 font-medium">TypeScript</span> to build intelligent solutions that solve
            real-world problems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-base font-medium group transition-all duration-300">
              <Link href="/projects" className="flex items-center">
                View Work
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </MagneticButton>
            <MagneticButton className="border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300">
              <Link href="/contact" className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              { icon: Github, href: "https://github.com/SVPraveen1/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ksvpraveen/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shyamkaruparthi@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+918332929387", label: "Phone" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.1 + 1.8, duration: 0.8 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Icon className="w-5 h-5" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <ScrollReveal delay={0.5}>
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal delay={0.8}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-wide">
                Featured Projects
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Welth AI",
                  description: "AI Finance Platform with automated reports and OCR receipt scanning",
                  tech: ["Next.js", "PostgreSQL", "AI/OCR"],
                  href: "https://welth-ai-one.vercel.app/",
                  icon: DollarSign,
                  gradient: "from-green-400 to-emerald-600",
                },
                {
                  title: "Sensai AI",
                  description: "AI-Powered Career Assistant with resume builder and interview prep",
                  tech: ["React", "TypeScript", "Prisma"],
                  href: "https://sensai-ai-eta.vercel.app/",
                  icon: Brain,
                  gradient: "from-purple-400 to-violet-600",
                },
                {
                  title: "Health-AI",
                  description: "Healthcare Assistant with disease prediction and symptom checker",
                  tech: ["React", "Gemini AI", "Supabase"],
                  href: "https://health-ai-three.vercel.app/",
                  icon: Heart,
                  gradient: "from-red-400 to-pink-600",
                },
              ].map((project, index) => (
                <ScrollReveal key={project.title} delay={1.2 + index * 0.3}>
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 hover:bg-gray-800/50 transition-all duration-500 group cursor-pointer rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
                      {/* Project Visual with Icon */}
                      <motion.div
                        className="w-full h-48 rounded-lg mb-4 relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                          whileHover={{ opacity: 0.8 }}
                          transition={{ duration: 0.6 }}
                        />

                        {/* Project Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <project.icon className="w-10 h-10 text-white" />
                          </motion.div>
                        </div>

                        {/* Browser-style header */}
                        <div className="absolute top-4 left-4 right-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                                <ExternalLink className="w-4 h-4 text-white/60" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Project Info */}
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
                            whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                            transition={{ duration: 0.3 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.a>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </div>
  )
}
