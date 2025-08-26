"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  ReactIcon,
  JavaScriptIcon,
  PythonIcon,
  NodeIcon,
  MongoDBIcon,
  MySQLIcon,
  CppIcon,
  GitIcon,
  TailwindIcon,
  JavaIcon,
  HTMLIcon,
  CSSIcon
} from "@/components/tech-icons"

const techIcons = [
  { Icon: ReactIcon, color: "#61DAFB", size: 40 },
  { Icon: JavaScriptIcon, color: "#F7DF1E", size: 36 },
  { Icon: PythonIcon, color: "#3776ab", size: 42 },
  { Icon: NodeIcon, color: "#339933", size: 38 },
  { Icon: MongoDBIcon, color: "#47A248", size: 35 },
  { Icon: MySQLIcon, color: "#4479A1", size: 40 },
  { Icon: CppIcon, color: "#00599C", size: 37 },
  { Icon: GitIcon, color: "#F05032", size: 36 },
  { Icon: TailwindIcon, color: "#06B6D4", size: 39 },
  { Icon: JavaIcon, color: "#ED8B00", size: 34 },
  { Icon: HTMLIcon, color: "#E34F26", size: 38 },
  { Icon: CSSIcon, color: "#1572B6", size: 36 },
]

interface FloatingIconProps {
  icon: any
  delay: number
  duration: number
  x: string
  y: string
  size: number
  color: string
}

function FloatingIcon({ icon: Icon, delay, duration, x, y, size, color }: FloatingIconProps) {
  return (
    <motion.div
      className="absolute opacity-10 hover:opacity-30 transition-opacity duration-300"
      style={{
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.05, 0.15, 0.05],
        scale: [0.8, 1.1, 0.8],
        rotate: [0, 180, 360],
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size={size} style={{ color }} />
    </motion.div>
  )
}

export function FloatingTechIcons() {
  const positions = [
    { x: "10%", y: "20%" },
    { x: "85%", y: "15%" },
    { x: "15%", y: "70%" },
    { x: "80%", y: "75%" },
    { x: "5%", y: "45%" },
    { x: "90%", y: "40%" },
    { x: "25%", y: "10%" },
    { x: "70%", y: "85%" },
    { x: "45%", y: "5%" },
    { x: "30%", y: "90%" },
    { x: "60%", y: "25%" },
    { x: "40%", y: "65%" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech, index) => (
        <FloatingIcon
          key={index}
          icon={tech.Icon}
          delay={index * 0.5}
          duration={4 + Math.random() * 2}
          x={positions[index]?.x || "50%"}
          y={positions[index]?.y || "50%"}
          size={tech.size}
          color={tech.color}
        />
      ))}
    </div>
  )
}
