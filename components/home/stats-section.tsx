import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

export default function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 rounded-lg p-8 md:p-12"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="neon-text-cyan">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of Discord servers powered by Homie Bot
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
