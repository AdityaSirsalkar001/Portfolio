"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Swasthya-Setu — Integrated Hospital-Patient Bridge",
    role: "Full Stack Developer & AI Integration",
    period: "Group Project",
    location: "Remote",
    technologies: ["React.js", "Node.js", "Gemini API"],
    description: "Architected a centralized healthcare platform serving 3 user roles (Patients, Doctors, Hospitals), reducing manual appointment scheduling time by an estimated 40%.",
    achievements: [
      "Integrated Google Gemini AI to process symptom queries and summarize medical records, improving triage efficiency for 100+ simulated patient scenarios",
      "Authored comprehensive API documentation and facilitated cross-functional communication within a 6-member team, ensuring seamless Agile integration and reducing merge conflicts by 90%",
      "Architected multi-role dashboard system for Patients, Doctors, and Hospitals with appointment booking and medical record management"
    ],
    type: "project",
    projectUrl: "https://swasthya-setu-swhi-awaezga4s-anshdeep-singhs-projects-dbaa79e9.vercel.app/",
    githubUrl: "https://github.com/AdityaSirsalkar001/Swasthya_Setu"
  },
  {
    title: "High-Performance Pathfinding Visualizer",
    role: "Solo Developer",
    period: "Solo Project",
    location: "Remote",
    technologies: ["C++", "WebAssembly", "React", "TypeScript"],
    description: "Engineered a high-frequency visualizer using C++ and WebAssembly, achieving 10x faster execution (sub-50ms latency) for complex graphs compared to JS-only solutions.",
    achievements: [
      "Implemented 5+ algorithms (A*, Dijkstra, Bidirectional BFS) and visualized pathfinding across grids of up to 2,500 nodes with real-time performance benchmarking",
      "Designed a responsive UI with React and Vite, enabling users to generate 50+ random maze patterns",
      "Achieved 10x performance improvement through C++ and WebAssembly optimization"
    ],
    type: "project",
    projectUrl: "https://pathfinding-visualizer-phi-orpin.vercel.app/",
    githubUrl: "https://github.com/AdityaSirsalkar001/Pathfinding_Visualizer"
  },
  {
    title: "FocusFlow — Productivity Web App",
    role: "Developer",
    period: "Group Project",
    location: "Remote",
    technologies: ["React.js", "Tailwind CSS", "LocalStorage"],
    description: "Deployed a task management app handling 50+ concurrent tasks with zero latency by leveraging React Hooks and optimized LocalStorage caching.",
    achievements: [
      "Optimized application performance by implementing Lazy Loading and efficient state management, ensuring a seamless user experience across mobile and desktop devices",
      "Reduced task organization time by 30% through the implementation of an automated priority-sorting algorithm and deadline tracking system",
      "Handled 50+ concurrent tasks with zero latency through React Hooks optimization"
    ],
    type: "project",
    projectUrl: "https://project1-nine-phi.vercel.app/",
    githubUrl: "https://github.com/AdityaSirsalkar001/FocusFlow"
  },
  {
    title: "Chess Event Coordinator",
    role: "Student Community — IIIT Allahabad",
    period: "Aug 2025 – Present",
    location: "Prayagraj, India",
    technologies: ["Event Management", "Leadership", "Coordination"],
    description: "Orchestrated a hybrid chess tournament for 100+ online participants, designing a competitive qualifier format where the top 32 players advanced to the offline finals.",
    achievements: [
      "Directed 50+ rapid chess matches over 48 hours, mediating disputes and automating result compilation for the live leaderboard",
      "Managed logistics and coordination for both online and offline tournaments with 100+ participants"
    ],
    type: "community"
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
                          <ul className="space-y-2 mb-4">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1 flex-shrink-0">▸</span>
                                <span className="text-muted-foreground leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* View Project Button */}
                          {exp.projectUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="w-full border-primary/20 hover:border-primary/40"
                            >
                              <a href={exp.projectUrl} target="_blank" rel="noopener noreferrer">
                                View Project
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          )}
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
