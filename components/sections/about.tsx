"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GraduationCap, Trophy, Target } from "lucide-react"

const achievements = [
  {
    icon: Code,
    number: "800+",
    label: "Coding Problems Solved",
    description: "Across LeetCode, Codeforces, and CodeChef platforms"
  },
  {
    icon: Trophy,
    number: "99.68",
    label: "JEE Main Percentile",
    description: "All India Rank: 5183"
  },
  {
    icon: GraduationCap,
    number: "IIITA",
    label: "B.Tech Information Technology",
    description: "Currently pursuing at a premier institute"
  },
  {
    icon: Target,
    number: "3",
    label: "Major Projects",
    description: "Swasthya-Setu, FocusFlow, Portfolio Website"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate About <span className="text-gradient">Clean Code</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building responsive UIs and practical web applications with modern technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm an aspiring Software Developer currently pursuing B.Tech in Information
                  Technology at IIITA. I build responsive UIs and practical web
                  applications using React and Tailwind, with solid CS fundamentals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm comfortable with <strong>Node.js, Express.js</strong> and integrating 
                  <strong> MySQL/MongoDB</strong> for CRUD workflows. My approach emphasizes 
                  clean code, thorough testing, and effective collaboration in agile teams.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Detail-oriented and enthusiastic about technology, I've solved 
                  <strong> 550+ coding problems</strong> across platforms while maintaining 
                  multi-week streaks and balancing academics.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-6 rounded-lg border border-primary/10">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  What Drives Me
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-lg">💻</span>
                    <span>Writing clean, maintainable, and efficient code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">��</span>
                    <span>Continuous learning and staying updated with latest technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">🤝</span>
                    <span>Collaborating in agile teams and delivering quality solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">🧠</span>
                    <span>Problem-solving through data structures and algorithms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg">🧩</span>
                    <span>Refactoring legacy JavaScript to reduce complexity and improve maintainability</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Achievements grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{achievement.number}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <h4 className="font-medium mb-1">{achievement.label}</h4>
                          <CardDescription className="text-sm">
                            {achievement.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
