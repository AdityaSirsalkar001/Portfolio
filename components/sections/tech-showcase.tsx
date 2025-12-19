"use client"

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ReactIcon,
  JavaScriptIcon,
  PythonIcon,
  NodeIcon,
  MongoDBIcon,
  MySQLIcon,
  CppIcon,
  TailwindIcon,
  TypeScriptIcon,
  FigmaIcon
} from "@/components/tech-icons"

const featuredTech = [
  {
    name: "React",
    icon: ReactIcon,
    description: "Modern UI development",
    color: "#61DAFB",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    description: "Dynamic web development",
    color: "#F7DF1E",
    category: "Programming"
  },
  {
    name: "Python",
    icon: PythonIcon,
    description: "Data & backend development",
    color: "#3776ab",
    category: "Programming"
  },
  {
    name: "Node.js",
    icon: NodeIcon,
    description: "Server-side JavaScript",
    color: "#339933",
    category: "Backend"
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
    description: "NoSQL database",
    color: "#47A248",
    category: "Database"
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
    description: "Relational database",
    color: "#4479A1",
    category: "Database"
  },
  {
    name: "C++",
    icon: CppIcon,
    description: "System programming",
    color: "#00599C",
    category: "Programming"
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
    description: "Utility-first CSS",
    color: "#06B6D4",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    description: "Type-safe JavaScript",
    color: "#3178c6",
    category: "Programming"
  },
  {
    name: "Figma",
    icon: FigmaIcon,
    description: "UI/UX Design tool",
    color: "#F24E1E",
    category: "Design"
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function TechShowcaseSection() {
  const [stack, setStack] = React.useState<any[] | null>(null)

  React.useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/stack')
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length > 0) setStack(data)
        }
      } catch {}
    }
    load()
  }, [])

  const list = stack || featuredTech

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Featured Technologies</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              My <span className="text-gradient">Tech Arsenal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I use to build modern, scalable applications
            </p>
          </motion.div>

          {/* Tech grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch">
            {list.map((tech: any, index) => {
              const Icon = (tech.icon || {}).render ? tech.icon : (tech.name === 'React' ? ReactIcon : tech.name === 'JavaScript' ? JavaScriptIcon : tech.name === 'Python' ? PythonIcon : tech.name === 'Node.js' ? NodeIcon : tech.name === 'MongoDB' ? MongoDBIcon : tech.name === 'MySQL' ? MySQLIcon : tech.name === 'C++' ? CppIcon : tech.name === 'Tailwind CSS' ? TailwindIcon : tech.name === 'TypeScript' ? TypeScriptIcon : tech.name === 'Figma' ? FigmaIcon : ReactIcon)
              const color = tech.color || '#3b82f6'
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="h-full"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="h-full p-4 md:p-6 text-center border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex flex-col items-center justify-between h-full space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg group-hover:bg-muted/80 transition-colors">
                        <Icon size={32} style={{ color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm md:text-base">{tech.name}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                          {tech.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="mt-2 text-xs"
                          style={{ borderColor: color + "30", color }}
                        >
                          {tech.category || 'Tech'}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see these technologies in action?
            </p>
            <motion.button
              className="text-primary hover:text-primary/80 font-medium transition-colors"
              onClick={() => {
                const element = document.getElementById("experience")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Projects →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
