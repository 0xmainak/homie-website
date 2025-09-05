"use client"
import { animated, useTrail, useSpring } from "@react-spring/web"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Music,
  Bot,
  Code,
  Gamepad2,
  Play,
  Pause,
  SkipForward,
  Volume2,
  List,
  Shuffle,
  Repeat,
  MessageSquare,
  Zap,
  Settings,
  Shield,
  Users,
  Dice6,
  ImageIcon,
  Calculator,
  Clock,
  Menu,
  X,
  Plus,
  HelpCircle,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CommandsPage() {
  const [showContent, setShowContent] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("music")

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const mobileMenuSpring = useSpring({
    transform: isMenuOpen ? "translateX(0%)" : "translateX(-100%)",
    opacity: isMenuOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  })

  const categories = [
    { id: "music", name: "Music", icon: <Music className="h-3 w-3" />, color: "orange" },
    { id: "admin", name: "Admin", icon: <Shield className="h-3 w-3" />, color: "red" },
    { id: "ai", name: "AI", icon: <Bot className="h-3 w-3" />, color: "purple" },
    { id: "autoresponder", name: "Auto", icon: <MessageSquare className="h-3 w-3" />, color: "blue" },
    { id: "gif", name: "GIF", icon: <ImageIcon className="h-3 w-3" />, color: "pink" },
    { id: "funtools", name: "Fun", icon: <Gamepad2 className="h-3 w-3" />, color: "yellow" },
    { id: "help", name: "Help", icon: <HelpCircle className="h-3 w-3" />, color: "cyan" },
    { id: "imagetools", name: "Image", icon: <ImageIcon className="h-3 w-3" />, color: "indigo" },
    { id: "lovecalc", name: "Love", icon: <Calculator className="h-3 w-3" />, color: "rose" },
    { id: "minecraft", name: "MC", icon: <Dice6 className="h-3 w-3" />, color: "emerald" },
    { id: "texttools", name: "Text", icon: <MessageSquare className="h-3 w-3" />, color: "teal" },
    { id: "tools", name: "Tools", icon: <Settings className="h-3 w-3" />, color: "gray" },
    { id: "level", name: "Level", icon: <Users className="h-3 w-3" />, color: "violet" },
    { id: "premium", name: "VIP", icon: <Zap className="h-3 w-3" />, color: "amber" },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // 16 * 4 (h-16)
      const categoryNavHeight = 60 // approximate height of category navigator
      const offset = navbarHeight + categoryNavHeight + 20 // extra padding
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  const AnimatedUnderline = () => (
    <svg
      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4C3 2 5 6 8 4C11 2 13 6 15 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw"
        style={{
          strokeDasharray: 20,
          strokeDashoffset: 20,
          animation: "draw 0.6s ease-out forwards",
        }}
      />
    </svg>
  )

  const musicCommands = [
    { name: "/skip", description: "Skip to the next music", icon: <SkipForward className="h-5 w-5" /> },
    { name: "/play", description: "Play music from various sources", icon: <Play className="h-5 w-5" /> },
    { name: "/pause", description: "Pause the current song", icon: <Pause className="h-5 w-5" /> },
    { name: "/queue", description: "Show the current music queue", icon: <List className="h-5 w-5" /> },
    { name: "/volume", description: "Adjust the music volume", icon: <Volume2 className="h-5 w-5" /> },
    { name: "/shuffle", description: "Shuffle the current queue", icon: <Shuffle className="h-5 w-5" /> },
    { name: "/loop", description: "Loop the current song or queue", icon: <Repeat className="h-5 w-5" /> },
  ]

  const adminCommands = [
    { name: "/fban", description: "Fake ban command", icon: <Shield className="h-5 w-5" /> },
    { name: "/givelevel", description: "Give a user a specific level", icon: <Users className="h-5 w-5" /> },
    { name: "/noprefix", description: "No prefix commands (alias: np)", icon: <Code className="h-5 w-5" /> },
    { name: "/moderation", description: "Access moderation tools", icon: <Shield className="h-5 w-5" /> },
  ]

  const aiCommands = [
    { name: "/chat", description: "Have a conversation with Homie's AI", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "/ask", description: "Ask Homie any question", icon: <Bot className="h-5 w-5" /> },
    { name: "/summarize", description: "Summarize text or conversations", icon: <Zap className="h-5 w-5" /> },
  ]

  const autoResponderCommands = [
    { name: "/autorespond", description: "Set up automatic responses", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "/triggers", description: "Manage response triggers", icon: <Zap className="h-5 w-5" /> },
  ]

  const gifCommands = [
    { name: "/blush", description: "Blush at someone", icon: <ImageIcon className="h-5 w-5" /> },
    { name: "/smirk", description: "Smirk at someone", icon: <ImageIcon className="h-5 w-5" /> },
    { name: "/spank", description: "Spank someone playfully", icon: <ImageIcon className="h-5 w-5" /> },
  ]

  const funToolsCommands = [
    { name: "/trollface", description: "Makes a trollface text", icon: <Gamepad2 className="h-5 w-5" /> },
    { name: "/kill", description: "Kill someone (playfully)", icon: <Dice6 className="h-5 w-5" /> },
    { name: "/gay", description: "Calculates the gayness of a user", icon: <Calculator className="h-5 w-5" /> },
    { name: "/roll", description: "Roll dice with custom sides", icon: <Dice6 className="h-5 w-5" /> },
  ]

  const helpCommands = [
    { name: "/help", description: "Get help with commands (alias: h)", icon: <HelpCircle className="h-5 w-5" /> },
    { name: "/support", description: "Get support information", icon: <HelpCircle className="h-5 w-5" /> },
  ]

  const imageToolsCommands = [
    { name: "/qr", description: "Get a QR code from given text", icon: <ImageIcon className="h-5 w-5" /> },
    { name: "/emojiid", description: "Get emoji information and ID", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "/avatar", description: "Get user's avatar", icon: <ImageIcon className="h-5 w-5" /> },
  ]

  const lovecalcCommands = [
    {
      name: "/lovecalc",
      description: "Calculates love between two users (aliases: lovecalculator, lc)",
      icon: <Calculator className="h-5 w-5" />,
    },
  ]

  const minecraftCommands = [
    {
      name: "/minecraft",
      description: "Get the information of a minecraft server (alias: mc)",
      icon: <Dice6 className="h-5 w-5" />,
    },
  ]

  const textToolsCommands = [
    {
      name: "/translate",
      description: "Translate text between languages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    { name: "/encode", description: "Encode text in various formats", icon: <Code className="h-5 w-5" /> },
  ]

  const toolsCommands = [
    { name: "/calc", description: "Perform mathematical calculations", icon: <Calculator className="h-5 w-5" /> },
    { name: "/remind", description: "Set reminders", icon: <Clock className="h-5 w-5" /> },
    { name: "/nodestatus", description: "Check node status", icon: <Settings className="h-5 w-5" /> },
  ]

  const levelCommands = [
    { name: "/level", description: "Check your level", icon: <Users className="h-5 w-5" /> },
    { name: "/levelup", description: "Level system commands", icon: <Users className="h-5 w-5" /> },
    { name: "/leaderboard", description: "Show the level leaderboard (alias: lb)", icon: <List className="h-5 w-5" /> },
    {
      name: "/weeklyleaderboard",
      description: "Show the weekly level leaderboard (alias: lbw)",
      icon: <List className="h-5 w-5" />,
    },
  ]

  const premiumCommands = [
    { name: "/premium", description: "Premium commands and features", icon: <Zap className="h-5 w-5" /> },
    { name: "/vip", description: "VIP exclusive features", icon: <Zap className="h-5 w-5" /> },
  ]

  const musicTrail = useTrail(musicCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      musicCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const adminTrail = useTrail(adminCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      adminCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const aiTrail = useTrail(aiCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      aiCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const autoResponderTrail = useTrail(autoResponderCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      autoResponderCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const gifTrail = useTrail(gifCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      gifCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const funToolsTrail = useTrail(funToolsCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      funToolsCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const helpTrail = useTrail(helpCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      helpCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const imageToolsTrail = useTrail(imageToolsCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      imageToolsCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const lovecalcTrail = useTrail(lovecalcCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      lovecalcCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const minecraftTrail = useTrail(minecraftCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      minecraftCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const textToolsTrail = useTrail(textToolsCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      textToolsCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const toolsTrail = useTrail(toolsCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      toolsCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const levelTrail = useTrail(levelCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      levelCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  const premiumTrail = useTrail(premiumCommands.length, {
    from: { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    to:
      premiumCommands.length && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(30px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 50,
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b bg-black/80 border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/homie-logo.png" alt="Homie Logo" width={32} height={32} className="w-8 h-8 mr-3" />
                <h1 className="text-xl sm:text-2xl font-bold text-white">Homie</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  Features
                  <svg
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 60 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4c8-2 12 2 16-1s8-3 12 1 8 4 12-1c4-2 8 1 6 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="60"
                      strokeDashoffset="60"
                      className="text-orange-400 group-hover:animate-[draw_0.6s_ease-out_forwards]"
                    />
                  </svg>
                </a>
                <a
                  href="#commands"
                  className="text-white hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors relative group"
                >
                  Commands
                  <svg
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 60 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4c8-2 12 2 16-1s8-3 12 1 8 4 12-1c4-2 8 1 6 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="60"
                      strokeDashoffset="60"
                      className="text-orange-400 group-hover:animate-[draw_0.6s_ease-out_forwards]"
                    />
                  </svg>
                </a>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent transition-all duration-300"
                    asChild
                  >
                    <a href="https://discord.gg/jbMuP3YzRa" target="_blank" rel="noopener noreferrer">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Get Support
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white bg-transparent transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Bot to Your Server
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-orange-400 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <animated.div style={mobileMenuSpring} className="fixed inset-0 bg-black z-30 md:hidden">
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex-1 space-y-6">
            <a
              href="#features"
              className="block text-2xl font-medium text-white hover:text-orange-400 transition-colors py-4 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#commands"
              className="block text-2xl font-medium text-white hover:text-orange-400 transition-colors py-4 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Commands
            </a>
          </div>

          <div className="space-y-4 pb-8">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent w-full py-4"
              asChild
            >
              <a href="https://discord.gg/jbMuP3YzRa" target="_blank" rel="noopener noreferrer">
                <HelpCircle className="h-5 w-5 mr-2" />
                Get Support
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white bg-transparent w-full py-4"
              asChild
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Plus className="h-5 w-5 mr-2" />
                Add Bot to Your Server
              </a>
            </Button>
          </div>
        </div>
      </animated.div>

      {/* Category Navigator */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-slate-800 transition-transform duration-300 ${isMenuOpen ? "md:translate-y-0 -translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-2 px-2 py-3 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category.id
                      ? `bg-${category.color}-600 text-white shadow-lg`
                      : `text-gray-400 hover:text-${category.color}-400 hover:bg-gray-800/50`
                  }`}
                >
                  {category.icon}
                  <span className="ml-1.5">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance mt-36 flex-col">
            <span className="text-purple-400">Homie</span> Commands
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
            Discover all the powerful commands that make Homie the ultimate Discord bot for your server
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add Homie to Server
              </a>
            </Button>
          </div>
        </section>

        {/* Music Commands */}
        <section id="music" className="mb-16">
          <div className="flex items-center mb-8">
            <Music className="h-8 w-8 text-orange-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Music Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {musicTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-orange-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-orange-400 mr-3">{musicCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{musicCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{musicCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Admin Commands */}
        <section id="admin" className="mb-16">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-red-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Admin Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adminTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-red-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-red-400 mr-3">{adminCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{adminCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{adminCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* AI Commands */}
        <section id="ai" className="mb-16">
          <div className="flex items-center mb-8">
            <Bot className="h-8 w-8 text-purple-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">AI Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-purple-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-purple-400 mr-3">{aiCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{aiCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{aiCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* AutoResponder Commands */}
        <section id="autoresponder" className="mb-16">
          <div className="flex items-center mb-8">
            <MessageSquare className="h-8 w-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">AutoResponder Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {autoResponderTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-blue-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-blue-400 mr-3">{autoResponderCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{autoResponderCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {autoResponderCommands[index].description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* GIF Commands */}
        <section id="gif" className="mb-16">
          <div className="flex items-center mb-8">
            <ImageIcon className="h-8 w-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">GIF Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gifTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-pink-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-pink-400 mr-3">{gifCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{gifCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{gifCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Fun Tools */}
        <section id="funtools" className="mb-16">
          <div className="flex items-center mb-8">
            <Gamepad2 className="h-8 w-8 text-yellow-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Fun Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funToolsTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-yellow-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-3">{funToolsCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{funToolsCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{funToolsCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Help Commands */}
        <section id="help" className="mb-16">
          <div className="flex items-center mb-8">
            <HelpCircle className="h-8 w-8 text-cyan-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Help Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {helpTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-cyan-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-cyan-400 mr-3">{helpCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{helpCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{helpCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Image Tools */}
        <section id="imagetools" className="mb-16">
          <div className="flex items-center mb-8">
            <ImageIcon className="h-8 w-8 text-indigo-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Image Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {imageToolsTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-indigo-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-indigo-400 mr-3">{imageToolsCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{imageToolsCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{imageToolsCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Love Calculator */}
        <section id="lovecalc" className="mb-16">
          <div className="flex items-center mb-8">
            <Calculator className="h-8 w-8 text-rose-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Love Calculator</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lovecalcTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-rose-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-rose-400 mr-3">{lovecalcCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{lovecalcCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{lovecalcCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Minecraft Commands */}
        <section id="minecraft" className="mb-16">
          <div className="flex items-center mb-8">
            <Dice6 className="h-8 w-8 text-emerald-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Minecraft Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {minecraftTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-emerald-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-emerald-400 mr-3">{minecraftCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{minecraftCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{minecraftCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Text Tools */}
        <section id="texttools" className="mb-16">
          <div className="flex items-center mb-8">
            <MessageSquare className="h-8 w-8 text-teal-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Text Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {textToolsTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-teal-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-teal-400 mr-3">{textToolsCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{textToolsCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{textToolsCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Tools Commands */}
        <section id="tools" className="mb-16">
          <div className="flex items-center mb-8">
            <Settings className="h-8 w-8 text-gray-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Tools Commands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toolsTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-gray-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-gray-400 mr-3">{toolsCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{toolsCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{toolsCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Level Commands */}
        <section id="level" className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="h-8 w-8 text-violet-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Leveling System</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {levelTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-violet-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-violet-400 mr-3">{levelCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{levelCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{levelCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* Premium Commands */}
        <section id="premium" className="mb-16">
          <div className="flex items-center mb-8">
            <Zap className="h-8 w-8 text-amber-400 mr-4" />
            <h2 className="text-3xl font-bold text-white">Premium Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {premiumTrail.map((style, index) => (
              <animated.div key={index} style={style}>
                <Card className="border-gray-800 hover:border-amber-400 transition-all duration-300 bg-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="text-amber-400 mr-3">{premiumCommands[index].icon}</div>
                      <CardTitle className="text-lg text-white">{premiumCommands[index].name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{premiumCommands[index].description}</CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 border-t border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Add Homie to your Discord server and start using these powerful commands today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <a
                href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Discord
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent"
              asChild
            >
              <a href="https://discord.gg/jbMuP3YzRa" target="_blank" rel="noopener noreferrer">
                Get Support
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
