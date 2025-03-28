"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Github, Globe, Twitter } from "lucide-react"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface GitHubProfile {
  name: string
  login: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  html_url: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export default function AboutPage() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching GitHub profile data
    setTimeout(() => {
      setProfile({
        name: "Mainak",
        login: "0xmainak",
        avatar_url: "/placeholder.svg?height=200&width=200",
        bio: "Full-stack developer and Discord bot creator",
        public_repos: 15,
        followers: 42,
        html_url: "https://github.com/0xmainak",
      })

      setRepos([
        {
          id: 1,
          name: "discord-bot",
          description: "A powerful Discord bot with multiple features",
          html_url: "https://github.com/0xmainak/discord-bot",
          stargazers_count: 24,
          forks_count: 8,
          language: "JavaScript",
        },
        {
          id: 2,
          name: "ai-tools",
          description: "Collection of AI tools and utilities",
          html_url: "https://github.com/0xmainak/ai-tools",
          stargazers_count: 18,
          forks_count: 5,
          language: "Python",
        },
        {
          id: 3,
          name: "web-projects",
          description: "Various web development projects and experiments",
          html_url: "https://github.com/0xmainak/web-projects",
          stargazers_count: 12,
          forks_count: 3,
          language: "TypeScript",
        },
      ])

      setLoading(false)
    }, 1500)
  }, [])

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
              About the <span className="gradient-text">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground">Meet the creator behind this Discord bot</p>
          </motion.div>
        </section>

        {/* Developer Profile */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Card className="neon-border h-full">
                <CardHeader className="text-center">
                  {loading ? (
                    <Skeleton className="h-32 w-32 rounded-full mx-auto" />
                  ) : (
                    <img
                      src={profile?.avatar_url || "/placeholder.svg"}
                      alt={profile?.name}
                      className="h-32 w-32 rounded-full mx-auto"
                    />
                  )}
                  <CardTitle className="mt-4">
                    {loading ? <Skeleton className="h-8 w-40 mx-auto" /> : profile?.name}
                  </CardTitle>
                  <CardDescription>
                    {loading ? <Skeleton className="h-4 w-24 mx-auto" /> : `@${profile?.login}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    {loading ? (
                      <Skeleton className="h-4 w-full mx-auto mb-2" />
                    ) : (
                      <p className="text-muted-foreground">{profile?.bio}</p>
                    )}
                  </div>

                  <div className="flex justify-center space-x-4 mb-6">
                    {loading ? (
                      <>
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                      </>
                    ) : (
                      <>
                        <Button size="icon" variant="outline" asChild>
                          <a href={profile?.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </a>
                        </Button>
                        <Button size="icon" variant="outline" asChild>
                          <a href="https://twitter.com/0xmainak" target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                          </a>
                        </Button>
                        <Button size="icon" variant="outline" asChild>
                          <a href="https://mainak.dev" target="_blank" rel="noopener noreferrer">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Website</span>
                          </a>
                        </Button>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-secondary rounded-lg p-3">
                      <div className="text-2xl font-bold">
                        {loading ? <Skeleton className="h-8 w-12 mx-auto" /> : profile?.public_repos}
                      </div>
                      <div className="text-xs text-muted-foreground">Repositories</div>
                    </div>
                    <div className="bg-secondary rounded-lg p-3">
                      <div className="text-2xl font-bold">
                        {loading ? <Skeleton className="h-8 w-12 mx-auto" /> : profile?.followers}
                      </div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card className="neon-border h-full">
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Other notable projects by the developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {loading
                      ? Array(3)
                          .fill(0)
                          .map((_, i) => (
                            <div key={i} className="space-y-2">
                              <Skeleton className="h-6 w-40" />
                              <Skeleton className="h-4 w-full" />
                              <div className="flex space-x-4">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-16" />
                              </div>
                            </div>
                          ))
                      : repos.map((repo) => (
                          <motion.div
                            key={repo.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="border-b border-border pb-4 last:border-0 last:pb-0"
                          >
                            <h3 className="text-lg font-semibold">
                              <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                              >
                                {repo.name}
                              </a>
                            </h3>
                            <p className="text-muted-foreground text-sm mb-2">{repo.description}</p>
                            <div className="flex flex-wrap gap-4 text-xs">
                              <span className="flex items-center gap-1">
                                <span className="h-3 w-3 rounded-full bg-primary"></span>
                                {repo.language}
                              </span>
                              <span>⭐ {repo.stargazers_count} stars</span>
                              <span>🍴 {repo.forks_count} forks</span>
                            </div>
                          </motion.div>
                        ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Bot Journey */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              The <span className="neon-text-purple">Journey</span>
            </h2>
            <p className="text-muted-foreground">How this Discord bot came to life and evolved over time</p>
          </motion.div>

          <div className="relative border-l border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0 space-y-12">
            {[
              {
                year: "2021",
                title: "The Beginning",
                description: "Started as a simple moderation bot with basic commands",
              },
              {
                year: "2022",
                title: "Adding Features",
                description: "Expanded with music, fun commands, and utility features",
              },
              {
                year: "2023",
                title: "AI Integration",
                description: "Integrated advanced AI capabilities for smarter interactions",
              },
              {
                year: "2024",
                title: "Going Public",
                description: "Released to the public with a complete feature set and documentation",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:grid md:grid-cols-5"
              >
                <div className="md:col-span-2 md:text-right md:pr-8 mb-2 md:mb-0">
                  <div className="text-2xl font-bold neon-text-cyan">{item.year}</div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 -translate-y-1/4 h-4 w-4 rounded-full bg-primary"></div>
                <div className="md:col-span-3 md:pl-8">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

