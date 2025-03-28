"use client"

import { motion } from "framer-motion"
import { Bot, Cpu, Image, MessageSquare, Music, Sparkles, Terminal } from "lucide-react"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  const categories = [
    {
      id: "ai",
      name: "AI",
      icon: <Cpu className="h-5 w-5" />,
      features: [
        { name: "Chat Completion", description: "Have natural conversations with the bot" },
        { name: "Image Generation", description: "Generate images from text descriptions" },
        { name: "Text Summarization", description: "Summarize long texts into concise points" },
      ],
    },
    {
      id: "autoresponder",
      name: "Auto Responder",
      icon: <MessageSquare className="h-5 w-5" />,
      features: [
        { name: "Custom Triggers", description: "Set up custom keywords to trigger responses" },
        { name: "Random Responses", description: "Configure multiple possible responses" },
        { name: "Cooldown System", description: "Prevent spam with customizable cooldowns" },
      ],
    },
    {
      id: "developer",
      name: "Developer Tools",
      icon: <Terminal className="h-5 w-5" />,
      features: [
        { name: "Code Evaluation", description: "Run and test code snippets directly in Discord" },
        { name: "API Requests", description: "Make API requests and view responses" },
        { name: "JSON Formatter", description: "Format and validate JSON data" },
      ],
    },
    {
      id: "music",
      name: "Music System",
      icon: <Music className="h-5 w-5" />,
      features: [
        { name: "High Quality Playback", description: "Crystal clear audio streaming" },
        { name: "Playlist Support", description: "Create and manage music playlists" },
        { name: "Multiple Sources", description: "Play from YouTube, Spotify, and more" },
      ],
    },
    {
      id: "image",
      name: "Image Tools",
      icon: <Image className="h-5 w-5" />,
      features: [
        { name: "Image Manipulation", description: "Apply filters and effects to images" },
        { name: "Meme Generator", description: "Create memes with custom templates" },
        { name: "GIF Search", description: "Search and send GIFs directly in Discord" },
      ],
    },
    {
      id: "fun",
      name: "Fun Tools",
      icon: <Sparkles className="h-5 w-5" />,
      features: [
        { name: "Mini Games", description: "Play games like trivia, hangman, and more" },
        { name: "Random Facts", description: "Get interesting random facts" },
        { name: "Jokes & Quotes", description: "Lighten the mood with jokes and quotes" },
      ],
    },
    {
      id: "misc",
      name: "Miscellaneous",
      icon: <Bot className="h-5 w-5" />,
      features: [
        { name: "Server Stats", description: "Track and display server statistics" },
        { name: "Welcome Messages", description: "Customize welcome messages for new members" },
        { name: "Role Management", description: "Manage roles and permissions easily" },
      ],
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
              Powerful <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground">Explore all the amazing capabilities our bot has to offer</p>
          </motion.div>
        </section>

        {/* Features Categories */}
        <section className="container mx-auto px-4 py-8 pb-24">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 m-1">
                  {category.icon}
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full neon-border overflow-hidden">
                          <CardHeader>
                            <CardTitle>{feature.name}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="text-sm text-muted-foreground">
                              Use with <code className="bg-secondary text-primary px-1 py-0.5 rounded">/command</code>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
      <Footer />
    </main>
  )
}

