"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Code2, Sparkles, Download } from "lucide-react"
import {
  ReactIcon,
  JavaScriptIcon,
  PythonIcon,
  NodeIcon,
  MongoDBIcon,
  MySQLIcon,
  CppIcon,
  GitIcon,
  TailwindIcon
} from "@/components/tech-icons"
import { FloatingTechIcons } from "@/components/floating-tech-icons"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Floating tech icons */}
      <FloatingTechIcons />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 pt-10"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Aditya Sirsalkar</span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
              B.Tech Student at IIITA | Full-Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Building responsive and interactive web applications with React, Next.js, and Tailwind CSS.
              Strong CS fundamentals in Data Structures & Algorithms, Operating Systems, DBMS, and OOP.
              Passionate about clean code and solving challenging problems.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4" />
                <span>Tech Stack</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <ReactIcon size={32} className="text-[#61DAFB]" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <JavaScriptIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <PythonIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <CppIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <NodeIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <MongoDBIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <MySQLIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <TailwindIcon size={32} />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 bg-muted/50 backdrop-blur-sm rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <GitIcon size={32} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">800+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.68</div>
              <div className="text-sm text-muted-foreground">JEE Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Prayagraj, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:adityasirsalkar33@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                adityasirsalkar33@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a 
                href="tel:+918380918769" 
                className="hover:text-primary transition-colors"
              >
                +91 8380918769
              </a>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              onClick={() => handleScrollToSection("contact")}
              className="min-w-[150px] bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollToSection("experience")}
              className="min-w-[150px] border-primary/20 hover:border-primary/40"
            >
              View Projects
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="min-w-[150px] hover:bg-primary/5"
            >
              <a href="/api/resume" aria-label="Download Resume">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/adityasirsalkar/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://github.com/AdityaSirsalkar001" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleScrollToSection("about")}
                className="rounded-full"
              >
                <ArrowDown className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
