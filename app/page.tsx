"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const team = [
  {
    name: "%temp%",
    role: "Owner (Lead Dev)",
    twitter: "https://x.com/thelocaltemp",
  },
]

export default function About() {
  const [showLawrence, setShowLawrence] = useState(false)

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-cool-200 to-cool-300 dark:from-cool-800 dark:to-cool-700"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cool-600 to-cool-400 dark:from-cool-300 dark:to-cool-100">
          About Us
        </h2>
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-md overflow-hidden bg-cool-100 dark:bg-cool-800 border-cool-300 dark:border-cool-600">
              <CardHeader className="pb-0">
                <CardTitle className="text-center text-2xl text-cool-700 dark:text-cool-200">
                  <a href={team[0].twitter} target="_blank" rel="noopener noreferrer">
                    {team[0].name}
                  </a>
                </CardTitle>
                <CardDescription className="text-center text-lg text-cool-600 dark:text-cool-300">
                  {team[0].role}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <Button
            variant="outline"
            size="lg"
            className="text-lg bg-cool-500 text-white hover:bg-cool-600 dark:bg-cool-600 dark:hover:bg-cool-500 transition-colors duration-300"
            onClick={() => setShowLawrence(true)}
          >
            any other devs 🤨
          </Button>

          <AnimatePresence>
            {showLawrence && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                <Card className="overflow-hidden bg-cool-100 dark:bg-cool-800 border-cool-300 dark:border-cool-600">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-center text-2xl text-cool-700 dark:text-cool-200">
                      <a href="https://x.com/lrsypen" target="_blank" rel="noopener noreferrer">
                        Lawrence/Larsy
                      </a>
                    </CardTitle>
                    <CardDescription className="text-center text-lg text-cool-600 dark:text-cool-300">
                      Developer (just a cat :3)
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
