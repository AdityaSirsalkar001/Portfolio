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
    description: "All India Rank: 5183 (Top 0.32%)"
  },
  {
    icon: GraduationCap,
    number: "Knight",
    label: "LeetCode Badge",
    description: "Top 5% globally (Max Rating: 1877)"
  },
  {
    icon: Target,
    number: "3",
    label: "Major Projects",
    description: "Swasthya-Setu, Pathfinding Visualizer, FocusFlow"
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
                  I'm a B.Tech student in Information Technology at IIITA with a passion for building
                  responsive web applications and solving complex problems. I specialize in frontend development
                  using React.js, Next.js, and Tailwind CSS, with strong backend knowledge in Node.js and Express.js.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have hands-on experience with <strong>MongoDB and MySQL</strong> for database design
                  and CRUD operations. My approach emphasizes writing clean, maintainable code and collaborating
                  effectively in team environments. I've led development teams, managed Git repositories, and
                  resolved production issues.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in Data Structures & Algorithms and Operating Systems,
                  I've solved <strong>800+ coding problems</strong> across LeetCode, Codeforces, and CodeChef
                  while maintaining consistent practice and academic excellence.
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
