"use client"

import { motion } from "framer-motion"
import { Bot, HelpCircle, MessageCircle, Zap } from "lucide-react"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InvitePage() {
  const faqs = [
    {
      question: "How do I add the bot to my server?",
      answer:
        "Click the 'Add to Discord' button above, select your server from the dropdown, and authorize the bot with the requested permissions.",
    },
    {
      question: "What permissions does the bot need?",
      answer:
        "The bot requires permissions to read and send messages, manage messages, embed links, attach files, and connect to voice channels for music features.",
    },
    {
      question: "Is the bot free to use?",
      answer:
        "Yes, the bot is completely free to use with all core features. We may offer premium features in the future.",
    },
    {
      question: "How do I get help with the bot?",
      answer:
        "You can join our support server by clicking the 'Join Support Server' button above, or use the /help command in Discord.",
    },
    {
      question: "Can I customize the bot for my server?",
      answer:
        "Yes, many features can be customized using the /settings command. You can change prefixes, enable/disable commands, and more.",
    },
    {
      question: "How often is the bot updated?",
      answer: "We release updates regularly, typically every 2-4 weeks with new features and bug fixes.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <div className="grid-pattern">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Add the bot to your server or join our support community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto">
                  Add to Discord <Bot className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Join Support Server <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Add Our <span className="neon-text-purple">Bot</span>?
            </h2>
            <p className="text-muted-foreground">Enhance your Discord server with these amazing features</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="h-12 w-12 text-primary" />,
                title: "Powerful Features",
                description: "Access to over 50+ commands across multiple categories",
              },
              {
                icon: <Bot className="h-12 w-12 text-primary" />,
                title: "AI Integration",
                description: "Smart AI capabilities for engaging conversations and content generation",
              },
              {
                icon: <HelpCircle className="h-12 w-12 text-primary" />,
                title: "Dedicated Support",
                description: "Active support team to help with any issues or questions",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full neon-border">
                  <CardHeader>
                    <div className="mx-auto">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="neon-text-cyan">Questions</span>
            </h2>
            <p className="text-muted-foreground">Find answers to common questions about our bot</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

