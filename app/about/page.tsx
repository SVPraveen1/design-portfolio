"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Zap, Award, Users, Calendar, MapPin, Brain, Shield, Cloud } from "lucide-react"
import Link from "next/link"
import { CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import RouteTransition from "@/components/route-transition"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const AdvancedWebGL = dynamic(() => import('@/components/advanced-webgl'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
})

export default function AboutPage() {
  const skills = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "React/Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 85, color: "from-green-400 to-emerald-600" },
    { name: "Python", level: 80, color: "from-purple-400 to-violet-600" },
    { name: "PostgreSQL", level: 85, color: "from-indigo-400 to-purple-500" },
  ]

  const experiences = [
    {
      title: "Training and Placement Cell Coordinator",
      company: "IIITDM Kancheepuram",
      period: "Aug 2023 – Present",
      location: "Chennai, TN",
      description:
        "Coordinated campus recruitment drives and conducted student workshops on resume building and interview skills.",
      icon: Users,
      color: "from-emerald-400 to-teal-500",
    },
  ]

  const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "IIITDM Kancheepuram",
    period: "Nov 2022 – May 2026",
    location: "Chennai, Tamil Nadu",
    color: "from-blue-400 to-indigo-500",
  }

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      icon: Award,
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      icon: Cloud,
      color: "from-sky-400 to-blue-500",
    },
    {
      title: "Joy of Computing in Python",
      provider: "NPTEL",
      icon: Brain,
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Ethical Hacking",
      provider: "NPTEL",
      icon: Shield,
      color: "from-red-400 to-pink-500",
    },
  ]

  return (
    <RouteTransition>
      <div className="min-h-screen bg-black">
        {/* Advanced WebGL Background */}
        <div className="absolute inset-0">
          <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
            <AdvancedWebGL />
          </Suspense>
        </div>

        {/* Navigation */}
        <motion.nav
          className="relative z-50 flex justify-between items-center p-6"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-400 transition-colors duration-500">
            KSV<span className="text-gray-400">Praveen</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`text-white hover:text-cyan-400 transition-colors duration-500 relative group ${
                    item === "About" ? "text-cyan-400" : ""
                  }`}
                >
                  <motion.span whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    {item}
                  </motion.span>
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ${
                      item === "About" ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>

        <div className="relative z-10 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  About{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Me
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Passionate full-stack developer specializing in AI-powered applications and modern web technologies
                </motion.p>
              </div>
            </ScrollReveal>

            {/* Profile Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              <ScrollReveal delay={0.2}>
                <motion.div
                  className="bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 p-8 rounded-xl"
                  whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.4)" }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContent className="p-0">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                      Who I Am
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      I'm a passionate AI Full Stack Developer currently pursuing B.Tech in Computer Science at IIITDM
                      Kancheepuram. I specialize in building powerful, elegant, and scalable applications that combine
                      AI with real-world utility.
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      My recent work includes AI finance platforms, career assistance tools, and healthcare
                      applications, all designed with real-time intelligence and modern UI/UX principles.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Code, text: "Full Stack Developer", color: "text-yellow-400" },
                        { icon: Database, text: "AI Enthusiast", color: "text-green-400" },
                        { icon: Palette, text: "UI/UX Designer", color: "text-pink-400" },
                        { icon: Zap, text: "Problem Solver", color: "text-purple-400" },
                      ].map((item, index) => (
                        <motion.div
                          key={item.text}
                          className="flex items-center text-gray-400"
                          whileHover={{ x: 5, color: "#ffffff" }}
                          transition={{ duration: 0.3 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}
                        >
                          <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                            <item.icon className={`w-5 h-5 mr-2 ${item.color}`} />
                          </motion.div>
                          <span>{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  className="bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-blue-900/20 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-xl"
                  whileHover={{ scale: 1.02, borderColor: "rgba(16, 185, 129, 0.4)" }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContent className="p-0">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6">
                      Education
                    </h2>
                    <div className="space-y-6">
                      <motion.div
                        className={`border-l-4 border-gradient-to-b from-blue-400 to-indigo-500 pl-6 border-blue-400`}
                        whileHover={{ x: 10, borderColor: "#60a5fa" }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h3 className="text-xl font-semibold text-white" whileHover={{ scale: 1.05 }}>
                          {education.degree}
                        </motion.h3>
                        <p className="text-blue-300 font-medium">{education.institution}</p>
                        <div className="flex items-center text-gray-300 mt-2">
                          <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center text-gray-300 mt-1">
                          <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                          <span>{education.location}</span>
                        </div>
                      </motion.div>
                    </div>

                    <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-6 mt-8">
                      Experience
                    </h2>
                    <div className="space-y-6">
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="border-l-4 border-emerald-400 pl-6"
                          whileHover={{ x: 10, borderColor: "#34d399" }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.h3 className="text-xl font-semibold text-white" whileHover={{ scale: 1.05 }}>
                            {exp.title}
                          </motion.h3>
                          <p className="text-emerald-300 font-medium">{exp.company}</p>
                          <div className="flex items-center text-gray-300 mt-2">
                            <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-300 mt-1">
                            <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-gray-300 mt-3">{exp.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Skills Section */}
            <ScrollReveal delay={0.1}>
              <div className="mb-20">
                <motion.h2
                  className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  Technical Skills
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <ScrollReveal key={skill.name} delay={0.2 + index * 0.05}>
                      <motion.div
                        className="space-y-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between items-center">
                          <motion.span
                            className="text-white font-semibold text-lg"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {skill.name}
                          </motion.span>
                          <span className="text-gray-400 font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                          <motion.div
                            className={`h-4 rounded-full bg-gradient-to-r ${skill.color} relative shadow-lg`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal delay={0.2}>
              <div className="mb-20">
                <motion.h2
                  className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  Certifications
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {certifications.map((cert, index) => (
                    <ScrollReveal key={cert.title} delay={0.3 + index * 0.1}>
                      <motion.div
                        className={`bg-gradient-to-br ${cert.color}/10 backdrop-blur-sm border border-white/10 p-6 hover:border-white/30 transition-all duration-500 rounded-xl`}
                        whileHover={{ scale: 1.03, y: -8 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardContent className="p-0 flex items-center">
                          <motion.div
                            className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} mr-6`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                          >
                            <cert.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3
                              className="text-xl font-semibold text-white mb-1"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              {cert.title}
                            </motion.h3>
                            <p className={`bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-medium`}>
                              {cert.provider}
                            </p>
                          </div>
                        </CardContent>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <motion.h2
                  className="text-3xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  Let's Work Together
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.8 }}
                >
                  I'm always excited to take on new challenges and collaborate on innovative projects. Let's create
                  something amazing together!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 1.0 }}
                >
                  <MagneticButton className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                    <Link href="/contact">Get In Touch</Link>
                  </MagneticButton>
                </motion.div>
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
