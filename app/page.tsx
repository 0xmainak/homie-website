"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Cpu, Music, Zap } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import FeatureCard from "@/components/home/feature-card"
import StatsSection from "@/components/home/stats-section"

export default function Home() {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI Powered",
      description: "Advanced AI capabilities for smart responses and interactions",
    },
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Music System",
      description: "High-quality music playback with playlist support",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Developer Tools",
      description: "Useful utilities for developers and server management",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "Fun Commands",
      description: "Entertaining commands to liven up your server",
    },
  ]

  const stats = [
    { value: "10K+", label: "Servers" },
    { value: "1M+", label: "Users" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <div className="grid-pattern">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Ultimate <span className="gradient-text">Discord</span> Companion
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Enhance your server with AI, music, fun tools, and much more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto">
                  Invite Bot <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Join Support Server
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Powerful <span className="neon-text-purple">Features</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Discover what makes our bot stand out from the rest
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/features">
                  View All Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary rounded-lg p-8 md:p-12 text-center neon-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="neon-text-cyan">Upgrade</span> Your Server?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of servers already using our bot to enhance their Discord experience
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg">
                Add to Discord <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

