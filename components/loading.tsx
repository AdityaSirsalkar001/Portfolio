"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground"
        >
          Loading portfolio...
        </motion.p>
      </div>
    </div>
  )
}
