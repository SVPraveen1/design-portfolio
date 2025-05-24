"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Brain, DollarSign, Heart, Zap, Database } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import RouteTransition from "@/components/route-transition"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import AdvancedWebGL from "@/components/advanced-webgl"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Welth AI",
      subtitle: "AI Finance Platform",
      description:
        "A comprehensive personal finance management platform featuring automated monthly reports, budget alerts, and AI-powered OCR receipt scanning. Built with advanced background processing for recurring transactions.",
      longDescription:
        "Developed a sophisticated finance platform that revolutionizes personal money management through AI integration. Features include automated monthly financial reports, intelligent budget alerts, and cutting-edge OCR technology for receipt scanning that automatically categorizes and adds transactions.",
      tech: [
        "Next.js",
        "React",
        "JavaScript",
        "Inngest",
        "Arcjet",
        "Prisma",
        "TailwindCSS",
        "Resend",
        "React Email",
        "PostgreSQL",
      ],
      features: [
        "AI-powered OCR receipt scanning",
        "Automated monthly reports with Inngest",
        "Bot protection with Arcjet",
        "Email automation with Resend",
        "Real-time budget tracking",
      ],
      github: "https://github.com/SVPraveen1/Welth-Ai",
      live: "https://welth-ai-one.vercel.app/",
      icon: DollarSign,
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      bgPattern: "bg-gradient-to-br from-green-900/20 to-teal-900/20",
    },
    {
      title: "Sensai AI",
      subtitle: "AI-Powered Career Assistant",
      description:
        "An intelligent career guidance platform providing real-time industry insights, ATS-optimized resume building, and AI-driven interview preparation with personalized feedback and analytics.",
      longDescription:
        "Built a comprehensive AI-powered career assistant that provides real-time career insights including industry trends, salary data, and market analysis updated weekly. Features an intelligent resume builder and interview preparation system.",
      tech: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL"],
      features: [
        "Real-time industry trend analysis",
        "ATS-optimized resume builder",
        "AI interview preparation",
        "Salary data insights",
        "Career path recommendations",
      ],
      github: "https://github.com/SVPraveen1/sensei-ai",
      live: "https://sensai-ai-eta.vercel.app/",
      icon: Brain,
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      bgPattern: "bg-gradient-to-br from-purple-900/20 to-indigo-900/20",
    },
    {
      title: "Health-AI",
      subtitle: "AI Healthcare Assistant",
      description:
        "A comprehensive healthcare platform featuring disease prediction, symptom checking, and medication management. Powered by Gemini AI for real-time medical guidance and health insights.",
      longDescription:
        "Developed an advanced healthcare assistant that combines disease prediction algorithms with interactive symptom checking. Integrated with Gemini AI to provide real-time medical guidance and comprehensive medication management.",
      tech: ["React", "TypeScript", "PostgreSQL", "Supabase", "Gemini AI", "Tailwind CSS"],
      features: [
        "AI disease prediction system",
        "Interactive symptom checker",
        "Gemini AI health assistant",
        "Medication management",
        "Health tracking dashboard",
      ],
      github: "https://github.com/SVPraveen1/health-ai",
      live: "https://health-ai-three.vercel.app/",
      icon: Heart,
      gradient: "from-red-400 via-pink-500 to-rose-600",
      bgPattern: "bg-gradient-to-br from-red-900/20 to-pink-900/20",
    },
  ]

  return (
    <RouteTransition>
      <div className="min-h-screen bg-black">
        {/* Advanced WebGL Background */}
        <div className="absolute inset-0">
          <AdvancedWebGL />
        </div>

        {/* Navigation */}
        <motion.nav
          className="relative z-50 flex justify-between items-center p-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="text-xl font-bold text-white hover:text-gray-300 transition-colors tracking-wider">
            KSV<span className="text-gray-400">PRAVEEN</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-gray-300 hover:text-white transition-colors relative group text-sm tracking-wider ${
                    item === "Projects" ? "text-white" : ""
                  }`}
                >
                  <motion.span whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    {item}
                  </motion.span>
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all ${
                      item === "Projects" ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>

        <div className="relative z-10 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
                  My{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                    Projects
                  </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Innovative AI-powered applications that solve real-world problems with cutting-edge technology
                </p>
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="space-y-20">
              {projects.map((project, index) => (
                <ScrollReveal key={project.title} delay={0.2 + index * 0.1}>
                  <motion.div
                    className={`relative overflow-hidden rounded-3xl ${project.bgPattern} backdrop-blur-sm border border-gray-800`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    />

                    <div
                      className={`grid lg:grid-cols-2 gap-12 p-8 lg:p-12 relative z-10 ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      {/* Project Info */}
                      <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-4 rounded-2xl bg-gradient-to-r ${project.gradient}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <project.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <h2 className="text-4xl font-bold text-white">{project.title}</h2>
                            <p className="text-gray-400 text-lg font-semibold">{project.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">{project.longDescription}</p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-white flex items-center">
                            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                            </motion.div>
                            Key Features
                          </h3>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-center text-gray-300"
                                whileHover={{ x: 5, color: "#ffffff" }}
                                transition={{ duration: 0.3 }}
                              >
                                <motion.div whileHover={{ rotate: 90, scale: 1.2 }} transition={{ duration: 0.3 }}>
                                  <ArrowRight className="w-4 h-4 mr-3 text-gray-500" />
                                </motion.div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-white flex items-center">
                            <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                              <Database className="w-5 h-5 mr-2 text-blue-400" />
                            </motion.div>
                            Tech Stack
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm font-medium"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(75, 85, 99, 0.8)" }}
                                transition={{ duration: 0.2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 pt-4">
                          <MagneticButton
                            className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold group`}
                          >
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <ExternalLink className="w-5 h-5 mr-2" />
                              Live Demo
                            </a>
                          </MagneticButton>
                          <MagneticButton className="border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-6 py-3 rounded-full font-semibold">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Github className="w-5 h-5 mr-2" />
                              Source Code
                            </a>
                          </MagneticButton>
                        </div>
                      </div>

                      {/* Project Visual */}
                      <motion.div
                        className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} p-1`}>
                          <div className="w-full h-full bg-black rounded-xl flex items-center justify-center relative overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"
                              whileHover={{ opacity: 0.8 }}
                              transition={{ duration: 0.3 }}
                            />
                            <motion.div
                              className="text-6xl opacity-20"
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                              whileHover={{ scale: 1.2, opacity: 0.4 }}
                            >
                              <project.icon className="w-24 h-24 text-white" />
                            </motion.div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div className="flex items-center space-x-2 mb-2">
                                  {[{ color: "bg-red-400" }, { color: "bg-yellow-400" }, { color: "bg-green-400" }].map(
                                    (dot, dotIndex) => (
                                      <motion.div
                                        key={dotIndex}
                                        className={`w-3 h-3 ${dot.color} rounded-full`}
                                        whileHover={{ scale: 1.3 }}
                                        transition={{ duration: 0.2 }}
                                      />
                                    ),
                                  )}
                                </div>
                                <div className="space-y-2">
                                  {[0.75, 0.5, 0.67].map((width, barIndex) => (
                                    <div
                                      key={barIndex}
                                      className="h-2 bg-white/20 rounded"
                                      style={{ width: `${width * 100}%` }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Section */}
            <ScrollReveal delay={0.3}>
              <div className="text-center mt-20">
                <h2 className="text-4xl font-bold text-white mb-6">Interested in My Work?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  These projects represent my passion for creating innovative solutions. Let's discuss how we can work
                  together on your next project.
                </p>
                <MagneticButton className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg font-semibold">
                  <Link href="/contact">Start a Conversation</Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </RouteTransition>
  )
}
