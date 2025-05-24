"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import Footer from "@/components/footer"
import RouteTransition from "@/components/route-transition"
import ScrollReveal from "@/components/scroll-reveal"
import MagneticButton from "@/components/magnetic-button"
import AdvancedWebGL from "@/components/advanced-webgl"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shyamkaruparthi@gmail.com",
      href: "mailto:shyamkaruparthi@gmail.com",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8332929387",
      href: "tel:+918332929387",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SVPraveen1",
      href: "https://github.com/SVPraveen1/",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ksvpraveen",
      href: "https://www.linkedin.com/in/ksvpraveen/",
      color: "from-blue-500 to-blue-700",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                  className={`text-white hover:text-gray-400 transition-colors duration-500 relative group ${
                    item === "Contact" ? "text-gray-400" : ""
                  }`}
                >
                  <motion.span whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    {item}
                  </motion.span>
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gray-400 transition-all duration-500 ${
                      item === "Contact" ? "w-full" : "w-0"
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
            <ScrollReveal delay={0.2}>
              <div className="text-center mb-20">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  Get In{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-500">
                    Touch
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Ready to bring your ideas to life? Let's discuss your next project and create something amazing
                  together.
                </motion.p>
              </div>
            </ScrollReveal>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <ScrollReveal delay={0.4}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-xl"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-8">
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }}>
                        <MessageCircle className="w-8 h-8 text-gray-400 mr-3" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-white">Send a Message</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                            Your Name
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 transition-all duration-500"
                              placeholder="John Doe"
                            />
                          </motion.div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                            Email Address
                          </label>
                          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 transition-all duration-500"
                              placeholder="john@example.com"
                            />
                          </motion.div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                          Subject
                        </label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 transition-all duration-500"
                            placeholder="Project Discussion"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                          Message
                        </label>
                        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 resize-none transition-all duration-500"
                            placeholder="Tell me about your project..."
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                      >
                        <MagneticButton
                          className="w-full bg-white hover:bg-gray-300 text-gray-800 py-4 rounded-full text-lg font-semibold group"
                          onClick={handleSubmit}
                        >
                          <motion.div
                            className="flex items-center justify-center"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.4 }}
                          >
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </motion.div>
                        </MagneticButton>
                      </motion.div>
                    </form>
                  </CardContent>
                </motion.div>
              </ScrollReveal>

              {/* Contact Information */}
              <ScrollReveal delay={0.6}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-xl"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContent className="p-0">
                    <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-500 group"
                          whileHover={{ scale: 1.02, x: 10 }}
                          transition={{ duration: 0.4 }}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          style={{ transitionDelay: `${index * 0.1 + 0.8}s` }}
                        >
                          <motion.div
                            className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-500`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <p className="text-gray-400 text-sm">{info.label}</p>
                            <motion.p
                              className="text-white font-semibold"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.4 }}
                            >
                              {info.value}
                            </motion.p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </ScrollReveal>
            </div>

            {/* Bottom Grid - Availability and Ready to Start */}
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.8}>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm border-white/10 p-8 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
                    <div className="space-y-6">
                      {[
                        {
                          icon: Clock,
                          title: "Available for Projects",
                          desc: "Open to new opportunities",
                          color: "text-green-400",
                        },
                        {
                          icon: Calendar,
                          title: "Response Time",
                          desc: "Usually within 24 hours",
                          color: "text-blue-400",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex items-center"
                          whileHover={{ x: 8 }}
                          transition={{ duration: 0.4 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{ transitionDelay: `${index * 0.2 + 1.0}s` }}
                        >
                          <motion.div whileHover={{ rotate: 360, scale: 1.3 }} transition={{ duration: 0.8 }}>
                            <item.icon className={`w-6 h-6 ${item.color} mr-4`} />
                          </motion.div>
                          <div>
                            <p className="text-white font-semibold">{item.title}</p>
                            <p className="text-gray-400">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={1.0}>
                <motion.div
                  className="bg-gray-800 border border-gray-700 p-8 rounded-xl text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h3
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Ready to Start?
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    Let's turn your vision into reality with cutting-edge technology and innovative design.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  >
                    <MagneticButton className="bg-white hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold">
                      <a href="mailto:shyamkaruparthi@gmail.com" className="flex items-center">
                        <Mail className="w-5 h-5 mr-2" />
                        Email Me Directly
                      </a>
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </RouteTransition>
  )
}
