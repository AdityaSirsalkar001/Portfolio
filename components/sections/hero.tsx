"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 dark:from-primary/5 dark:to-blue-500/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Aditya Sirsalkar</span>
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
              Junior Software Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proficient in{" "}
              <span className="text-primary font-semibold">C, C++, JavaScript, Python and React</span>,
              with strong foundations in Data Structures & Algorithms, Operating Systems, 
              DBMS, and Object-Oriented Programming.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">550+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">99.68</div>
              <div className="text-sm text-muted-foreground">JEE Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">4+</div>
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
              className="min-w-[150px]"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => handleScrollToSection("experience")}
              className="min-w-[150px]"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="LinkedIn Profile">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="#" aria-label="GitHub Profile">
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
