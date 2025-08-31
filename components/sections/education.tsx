"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react"

const educationData = [
  {
    institution: "Indian Institute of Information Technology, Allahabad (IIITA)",
    degree: "B.Tech in Information Technology",
    description: "Bachelor of Technology in CS/IT equivalent",
    period: "08/2024 – Present",
    location: "Prayagraj, India",
    status: "current",
    icon: GraduationCap,
    highlights: [
      "Premier technical institute for Information Technology",
      "Comprehensive curriculum in CS fundamentals",
      "Focus on practical application development"
    ]
  },
  {
    institution: "JEE (Main) — National Testing Agency",
    degree: "Percentile: 99.68 — All India Rank: 5183",
    description: "Joint Entrance Examination for Engineering",
    period: "04/2024",
    location: "India",
    status: "achievement",
    icon: Award,
    highlights: [
      "Top 0.32% performance nationally",
      "Demonstrates strong analytical and problem-solving skills",
      "Gateway to premier engineering institutes"
    ]
  },
  {
    institution: "Ace Academy — Class X",
    degree: "Percentage: 94%",
    description: "Secondary Education",
    period: "03/2022",
    location: "Chhatrapati Sambhajinagar, India",
    status: "completed",
    icon: GraduationCap,
    highlights: [
      "Excellent academic performance",
      "Strong foundation in core subjects",
      "Active participation in academic activities"
    ]
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

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Education</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Academic <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong educational foundation with consistent academic excellence
            </p>
          </motion.div>

          {/* Education grid */}
          <div className="grid gap-6 md:gap-8">
            {educationData.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card 
                    className={`border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                      edu.status === 'achievement' ? 'bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20' : ''
                    } ${
                      edu.status === 'current' ? 'ring-2 ring-primary/20' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`p-3 rounded-lg ${
                            edu.status === 'achievement' ? 'bg-primary/20' : 
                            edu.status === 'current' ? 'bg-primary/10' : 'bg-muted'
                          }`}>
                            <Icon className={`w-6 h-6 ${
                              edu.status === 'achievement' ? 'text-primary' :
                              edu.status === 'current' ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{edu.institution}</CardTitle>
                              {edu.status === 'current' && (
                                <Badge variant="default" className="text-xs">
                                  <Star className="w-3 h-3 mr-1" />
                                  Current
                                </Badge>
                              )}
                              {edu.status === 'achievement' && (
                                <Badge variant="default" className="text-xs bg-gradient-to-r from-primary to-blue-600">
                                  <Award className="w-3 h-3 mr-1" />
                                  Top 0.32%
                                </Badge>
                              )}
                            </div>
                            
                            <CardDescription className="text-lg font-medium text-primary mb-1">
                              {edu.degree}
                            </CardDescription>
                            <CardDescription className="mb-3">
                              {edu.description}
                            </CardDescription>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{edu.period}</span>
                              </div>
                              <span className="hidden sm:inline">•</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{edu.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1 flex-shrink-0">▸</span>
                            <span className="text-muted-foreground leading-relaxed">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Academic achievements summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-center">Academic Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">99.68%</div>
                    <div className="text-sm text-muted-foreground">JEE Main Percentile</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5183</div>
                    <div className="text-sm text-muted-foreground">All India Rank</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">IIITA</div>
                    <div className="text-sm text-muted-foreground">Premier Institute</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
