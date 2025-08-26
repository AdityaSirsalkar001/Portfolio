"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "FocusFlow — Productivity Web App",
    role: "Junior Software Developer",
    period: "06/2024 – 08/2024",
    location: "Remote",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Built a comprehensive task management application with advanced features",
    achievements: [
      "Implemented task management with priorities, reminders, and deadline tracking; improved task entry-to-save flow by 35% fewer clicks",
      "Built fully responsive layout (mobile-first) and optimized DOM updates to reduce interaction latency",
      "Deployed as a static site; integrated GitHub Actions for lint checks on pull requests"
    ],
    type: "project"
  },
  {
    title: "Event Promotion App — UI/UX",
    role: "UI/UX Designer",
    period: "07/2024 – 09/2024",
    location: "Remote",
    technologies: ["Figma"],
    description: "Designed comprehensive mobile application for event discovery and promotion",
    achievements: [
      "Designed end-to-end mobile flows for event discovery with category filters and search, improving navigation depth by 40% in user testing (peer reviews)",
      "Created reusable component library (buttons, cards, tabs) ensuring consistent spacing, type scale, and color tokens"
    ],
    type: "design"
  },
  {
    title: "Portfolio Website",
    role: "Frontend Developer",
    period: "08/2024 – Present",
    location: "Remote",
    technologies: ["React", "HTML", "CSS"],
    description: "Developed personal portfolio website to showcase projects and skills",
    achievements: [
      "Developed a responsive personal site to showcase projects, coding profiles, and achievements; integrated Open Graph metadata for rich link previews",
      "Automated deployment with Vercel; added analytics to track visits and project link clicks"
    ],
    type: "project"
  },
  {
    title: "Coding Practice Tracker (Mini App)",
    role: "Junior Software Developer",
    period: "02/2025 – 05/2025",
    location: "Remote",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    description: "Built comprehensive dashboard for tracking coding practice and progress",
    achievements: [
      "Built a dashboard to log solved problems (platform, tag, difficulty); implemented CRUD APIs and JWT-protected routes",
      "Added sorting/filters and basic charts for weekly streaks; exported summaries as CSV for review"
    ],
    type: "project"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building practical applications and gaining real-world development experience
            </p>
          </motion.div>

          {/* Experience timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary border-4 border-background rounded-full z-10" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div>
                              <CardTitle className="text-lg mb-1">{exp.title}</CardTitle>
                              <CardDescription className="text-primary font-medium">
                                {exp.role}
                              </CardDescription>
                            </div>
                            <div className="flex flex-col sm:items-end gap-1">
                              <Badge variant="outline" className="w-fit">
                                <Calendar className="w-3 h-3 mr-1" />
                                {exp.period}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="w-3 h-3 mr-1" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* Achievements */}
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1 flex-shrink-0">▸</span>
                                <span className="text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in working together or learning more about my projects?
            </p>
            <Button onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}>
              Get In Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
