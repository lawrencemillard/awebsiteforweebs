"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import TypewriterEffect from "@/components/typewriter-effect"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-cool-200 to-cool-300 dark:from-cool-800 dark:to-cool-900 backdrop-blur supports-[backdrop-filter]:bg-opacity-80"
    >
      <div className="container flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-cool-600 to-cool-400 dark:from-cool-300 dark:to-cool-100"
          >
            <TypewriterEffect text="VeryCoolSoftware :3" />
          </motion.div>
        </Link>
      </div>
    </motion.header>
  )
}

