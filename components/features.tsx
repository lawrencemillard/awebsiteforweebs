import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
  {
    title: "Craneberry",
    description: "The awesomesauce tool that lets you investigate like it's a speedrun!",
  },
  {
    title: "Lightning Fast",
    description: "Our tools are optimized for speed and efficiency.",
  },
  {
    title: "Developer Friendly",
    description: "Built by developers, for developers.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

