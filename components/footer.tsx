"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600"
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
    hoverColor: "hover:text-gray-800 dark:hover:text-gray-200"
  },
  {
    icon: Mail,
    href: "mailto:adityasirsalkar33@gmail.com",
    label: "Email",
    hoverColor: "hover:text-red-600"
  }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Aditya Sirsalkar
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Junior Software Developer passionate about building responsive UIs and 
              practical web applications. Always eager to learn and tackle new challenges.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full transition-colors ${social.hoverColor}`}
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Prayagraj, Uttar Pradesh</p>
              <p>India</p>
              <a 
                href="mailto:adityasirsalkar33@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                adityasirsalkar33@gmail.com
              </a>
              <a 
                href="tel:+918380918769"
                className="block hover:text-primary transition-colors"
              >
                +91 8380918769
              </a>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; 2024 Aditya Sirsalkar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
