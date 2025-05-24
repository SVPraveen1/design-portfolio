"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Heart, Code, Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SVPraveen1/",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ksvpraveen/",
      label: "LinkedIn",
      color: "hover:text-gray-400",
    },
    {
      icon: Mail,
      href: "mailto:shyamkaruparthi@gmail.com",
      label: "Email",
      color: "hover:text-gray-400",
    },
    {
      icon: Phone,
      href: "tel:+918332929387",
      label: "Phone",
      color: "hover:text-gray-400",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const projects = [
    { name: "Welth AI", href: "https://welth-ai-one.vercel.app/" },
    { name: "Sensai AI", href: "https://sensai-ai-eta.vercel.app/" },
    { name: "Health AI", href: "https://health-ai-three.vercel.app/" },
  ]

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-600/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200,
            }}
            animate={{
              y: [null, -50, 250],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              KSV<span className="text-gray-400">Praveen</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating AI-powered applications that solve real-world problems.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Made with</span>
              <motion.div
                className="mx-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>and</span>
              <Code className="w-4 h-4 ml-2 text-gray-400" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-gray-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Featured Projects</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <motion.li
                  key={project.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
                    {project.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                  whileHover={{ y: -5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Available for freelance opportunities and exciting projects.</p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} KSV Praveen. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Built with Next.js & TypeScript</span>
            <span>•</span>
            <span>Deployed on Vercel</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
