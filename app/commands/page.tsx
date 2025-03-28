"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample commands data
const commandsData = [
  {
    name: "help",
    description: "Shows the help menu",
    category: "Help System",
    usage: "/help [command]",
  },
  {
    name: "ping",
    description: "Checks the bot's latency",
    category: "Miscellaneous",
    usage: "/ping",
  },
  {
    name: "play",
    description: "Plays a song or playlist",
    category: "Music System",
    usage: "/play [song name or URL]",
  },
  {
    name: "skip",
    description: "Skips the current song",
    category: "Music System",
    usage: "/skip",
  },
  {
    name: "queue",
    description: "Shows the current music queue",
    category: "Music System",
    usage: "/queue",
  },
  {
    name: "image",
    description: "Generates an image from text",
    category: "AI",
    usage: "/image [prompt]",
  },
  {
    name: "chat",
    description: "Chat with the AI assistant",
    category: "AI",
    usage: "/chat [message]",
  },
  {
    name: "meme",
    description: "Generates a meme",
    category: "Fun Tools",
    usage: "/meme [template] [text1] [text2]",
  },
  {
    name: "gif",
    description: "Searches for a GIF",
    category: "GIF Commands",
    usage: "/gif [search term]",
  },
  {
    name: "serverinfo",
    description: "Shows information about the server",
    category: "Miscellaneous",
    usage: "/serverinfo",
  },
  {
    name: "userinfo",
    description: "Shows information about a user",
    category: "Miscellaneous",
    usage: "/userinfo [user]",
  },
  {
    name: "ban",
    description: "Bans a user from the server",
    category: "Moderation",
    usage: "/ban [user] [reason]",
  },
  {
    name: "kick",
    description: "Kicks a user from the server",
    category: "Moderation",
    usage: "/kick [user] [reason]",
  },
  {
    name: "purge",
    description: "Deletes a number of messages",
    category: "Moderation",
    usage: "/purge [amount]",
  },
  {
    name: "love",
    description: "Calculates love compatibility between two users",
    category: "Love Calculator",
    usage: "/love [user1] [user2]",
  },
]

// Get unique categories
const categories = ["All", ...new Set(commandsData.map((cmd) => cmd.category))]

export default function CommandsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")

  // Filter commands based on search query and category
  const filteredCommands = commandsData.filter((command) => {
    const matchesSearch =
      command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "All" || command.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen flex flex-col">
      <div className="grid-pattern">
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bot <span className="gradient-text">Commands</span>
            </h1>
            <p className="text-xl text-muted-foreground">Explore all available commands and learn how to use them</p>
          </motion.div>
        </section>

        {/* Search and Filter */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search commands..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Commands Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border neon-border overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Command</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead className="hidden md:table-cell">Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((command, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <code className="bg-secondary text-primary px-2 py-1 rounded">/{command.name}</code>
                      </TableCell>
                      <TableCell>{command.description}</TableCell>
                      <TableCell className="hidden md:table-cell">{command.category}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <code className="text-muted-foreground">{command.usage}</code>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8">
                      No commands found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </motion.div>

          <div className="text-center text-muted-foreground mt-4">
            Showing {filteredCommands.length} of {commandsData.length} commands
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

