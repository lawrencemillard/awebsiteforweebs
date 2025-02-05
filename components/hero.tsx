import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <motion.h1
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cool-600 to-cool-400 dark:from-cool-300 dark:to-cool-100"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          Welcome to VeryCoolSoftware
        </motion.h1>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-cool-800 dark:text-cool-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We create awesome tools for developers, like craneberry - the ultimate speedrun investigation tool!
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <Button size="lg" className="bg-cool-500 hover:bg-cool-600 text-white transition-colors duration-300">
            Explore Our Projects
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cool-300 to-cool-500 dark:from-cool-700 dark:to-cool-500 opacity-30" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
      </motion.div>
    </section>
  )
}

