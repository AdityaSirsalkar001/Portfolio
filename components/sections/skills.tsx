"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Palette,
  Server,
  Database,
  Settings,
  Brain,
  Trophy,
  ExternalLink,
  Star
} from "lucide-react"
import {
  skillIcons,
  CIcon,
  CppIcon,
  JavaScriptIcon,
  PythonIcon,
  JavaIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  TailwindIcon,
  NodeIcon,
  ExpressIcon,
  MySQLIcon,
  MongoDBIcon,
  GitIcon,
  VercelIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
  type SkillName
} from "@/components/tech-icons"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    description: "Core programming languages and markup",
    skills: [
      { name: "C", icon: CIcon, hasIcon: true },
      { name: "C++", icon: CppIcon, hasIcon: true },
      { name: "JavaScript", icon: JavaScriptIcon, hasIcon: true },
      { name: "Python", icon: PythonIcon, hasIcon: true },
      { name: "Java", icon: JavaIcon, hasIcon: true },
      { name: "HTML", icon: HTMLIcon, hasIcon: true },
      { name: "CSS", icon: CSSIcon, hasIcon: true }
    ],
    color: "text-blue-500"
  },
  {
    title: "Frontend",
    icon: Palette,
    description: "User interface and experience technologies",
    skills: [
      { name: "React.js", icon: ReactIcon, hasIcon: true },
      { name: "Next.js", hasIcon: false },
      { name: "Tailwind CSS", icon: TailwindIcon, hasIcon: true },
      { name: "Material UI", hasIcon: false },
      { name: "Responsive Design", hasIcon: false }
    ],
    color: "text-purple-500"
  },
  {
    title: "Backend",
    icon: Server,
    description: "Server-side development and APIs",
    skills: [
      { name: "Node.js", icon: NodeIcon, hasIcon: true },
      { name: "Express.js", icon: ExpressIcon, hasIcon: true },
      { name: "REST APIs", hasIcon: false }
    ],
    color: "text-green-500"
  },
  {
    title: "Databases",
    icon: Database,
    description: "Data storage and management",
    skills: [
      { name: "MySQL", icon: MySQLIcon, hasIcon: true },
      { name: "MongoDB", icon: MongoDBIcon, hasIcon: true },
      { name: "CRUD", hasIcon: false },
      { name: "Indexing", hasIcon: false }
    ],
    color: "text-orange-500"
  },
  {
    title: "Developer Tools",
    icon: Settings,
    description: "Development workflow and deployment",
    skills: [
      { name: "Git", icon: GitIcon, hasIcon: true },
      { name: "GitHub", hasIcon: false },
      { name: "VS Code", hasIcon: false },
      { name: "Postman", hasIcon: false },
      { name: "Vercel", icon: VercelIcon, hasIcon: true },
      { name: "Google Maps API", hasIcon: false }
    ],
    color: "text-gray-500"
  },
  {
    title: "Core Areas",
    icon: Brain,
    description: "Computer science fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", hasIcon: false },
      { name: "Operating Systems", hasIcon: false },
      { name: "Computer Organization & Architecture", hasIcon: false },
      { name: "Object-Oriented Programming", hasIcon: false }
    ],
    color: "text-red-500"
  }
]

const codingProfiles = [
  {
    platform: "LeetCode",
    score: "1850+",
    description: "Knight Badge (Top 5% globally)",
    icon: LeetCodeIcon,
    color: "from-orange-400 to-orange-600",
    link: "https://leetcode.com/u/AdityaSirsalkar/",
    bg: "bg-[#fff7e6]",
    ring: "ring-[#FFA116]/30"
  },
  {
    platform: "Codeforces",
    score: "1400+",
    description: "Specialist rating through competitive contests",
    icon: CodeforcesIcon,
    color: "from-blue-400 to-blue-600",
    link: "https://codeforces.com/profile/AdityaSirsalkar",
    bg: "bg-[#e8f1f8]",
    ring: "ring-[#1F71AC]/30"
  },
  {
    platform: "CodeChef",
    score: "1600+",
    description: "3-Star rating achieved through contests",
    icon: CodeChefIcon,
    color: "from-purple-400 to-purple-600",
    link: "https://www.codechef.com/users/amaze_iiita_76",
    bg: "bg-[#f3ece7]",
    ring: "ring-[#6A4C3A]/30"
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

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Technical Skills</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning full-stack development and computer science fundamentals
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              const isSelected = selectedCategory === category.title
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card 
                    className={`h-full cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'ring-2 ring-primary border-primary/50 shadow-lg' 
                        : 'border-border/50 hover:border-primary/30 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedCategory(isSelected ? null : category.title)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-muted rounded-lg">
                          <Icon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <motion.div
                        initial={false}
                        animate={{ height: isSelected ? "auto" : "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => {
                            const SkillIcon = skill.hasIcon ? skill.icon : null
                            return (
                              <motion.div
                                key={skillIndex}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant={isSelected ? "default" : "secondary"}
                                  className="text-xs cursor-pointer transition-all duration-200 flex items-center gap-2 px-3 py-2 h-auto"
                                >
                                  {SkillIcon && (
                                    <SkillIcon
                                      size={16}
                                      className={skill.name === "Express.js" ? "text-foreground" : ""}
                                    />
                                  )}
                                  <span>{skill.name}</span>
                                </Badge>
                              </motion.div>
                            )
                          })}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Coding profiles */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Coding Profiles</h3>
              <p className="text-muted-foreground">
                Consistent practice and competitive programming achievements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {codingProfiles.map((profile, index) => {
                const Icon = profile.icon
                const content = (
                  <Card className="h-full text-center border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                    <CardHeader>
                      <div className="flex flex-col items-center">
                        <div className={`mb-2 p-3 rounded-full shadow ring-1 ${profile.bg || 'bg-white'} ${profile.ring || 'ring-border'}`}>
                          <Icon size={32} />
                        </div>
                        <CardTitle className="text-xl">{profile.platform}</CardTitle>
                        <div className="text-2xl font-bold text-primary mt-2">
                          {profile.score}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <CardDescription className="text-center">
                        {profile.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    {profile.link ? (
                      <a className="block h-full" href={profile.link} target="_blank" rel="noopener noreferrer" aria-label={`${profile.platform} profile`}>
                        {content}
                      </a>
                    ) : content}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Problem-solving achievement */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Trophy className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl text-center">800+ Problems Solved</CardTitle>
                </div>
                <CardDescription className="text-center text-lg">
                  Solved across LeetCode, Codeforces, and CodeChef platforms while maintaining
                  multi-week streaks and balancing academics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary">800+</div>
                    <div className="text-sm text-muted-foreground">Total Problems</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Platforms</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">Multi-week</div>
                    <div className="text-sm text-muted-foreground">Streaks</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary">Daily</div>
                    <div className="text-sm text-muted-foreground">Practice</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Ready to put these skills to work on your next project?
            </p>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Start a Conversation
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
