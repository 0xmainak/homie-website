"use client"
import { useSpring, animated, useTrail, useInView } from "@react-spring/web"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Zap, Heart, Bot, Code, Gamepad2, Menu, X, Plus, HelpCircle } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"

const StarField = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      })),
    [],
  )

  const starTrail = useTrail(stars.length, {
    from: { opacity: 0, transform: "scale(0) translate3d(0,0,0)" },
    to: { opacity: 1, transform: "scale(1) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (i) => i * 30,
  })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {starTrail.map((style, index) => (
        <animated.div
          key={stars[index]?.id}
          style={{
            ...style,
            position: "absolute",
            left: `${stars[index]?.x}%`,
            top: `${stars[index]?.y}%`,
            width: `${stars[index]?.size}px`,
            height: `${stars[index]?.size}px`,
            willChange: "transform, opacity",
          }}
          className="bg-white rounded-full"
        />
      ))}

      <div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        style={{
          animation: "bounce 3s infinite",
          animationDelay: "0s",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-50"
        style={{
          animation: "bounce 4s infinite",
          animationDelay: "1.5s",
          transform: "translate3d(0,0,0)",
        }}
      />
    </div>
  )
}

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  const loadingSpring = useSpring({
    opacity: isLoading ? 1 : 0,
    transform: isLoading ? "scale(1) translate3d(0,0,0)" : "scale(0.8) translate3d(0,0,0)",
    config: { tension: 300, friction: 30 },
  })

  const logoSpring = useSpring({
    from: { transform: "rotate(0deg) scale(0.8) translate3d(0,0,0)", opacity: 0 },
    to: { transform: "rotate(360deg) scale(1) translate3d(0,0,0)", opacity: 1 },
    config: { tension: 200, friction: 20 },
    loop: isLoading,
  })

  if (!isLoading) return null

  return (
    <animated.div style={loadingSpring} className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
      <div className="text-center px-4">
        <animated.div style={logoSpring} className="mb-6">
          <Image
            src="/homie-logo.png"
            alt="Homie Logo"
            width={64}
            height={64}
            className="mx-auto w-12 h-12 sm:w-16 sm:h-16"
          />
        </animated.div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Homie</h2>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">Loading your server experience...</p>
      </div>
    </animated.div>
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 300)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [footerRef, footerInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = (window.scrollY / totalHeight) * 100
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollBarSpring = useSpring({
    width: `${scrollProgress}%`,
    config: { tension: 300, friction: 30 },
  })

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.8) translate3d(0,0,0)" },
    to: { opacity: 1, transform: "scale(1) translate3d(0,0,0)" },
    config: { tension: 300, friction: 10 },
    delay: 600,
  })

  const heroSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    to:
      heroInView && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
  })

  const featuresHeaderSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-60px) translate3d(0,0,0)" },
    to:
      featuresInView && showContent
        ? { opacity: 1, transform: "translateX(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateX(-60px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: 200,
  })

  const ctaSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    to:
      ctaInView && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
  })

  const footerSpring = useSpring({
    from: { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    to:
      footerInView && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
  })

  const features = [
    {
      icon: <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "AI Powered",
      description: "Advanced AI capabilities for smart responses and interactions with your server members.",
    },
    {
      icon: <Music className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Music System",
      description: "High-quality music playback with playlist support from multiple streaming platforms.",
    },
    {
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Developer Tools",
      description: "Useful utilities for developers and server management to enhance your Discord experience.",
    },
    {
      icon: <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Fun Commands",
      description: "Entertaining commands to liven up your server and keep your community engaged.",
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "Lightning Fast",
      description: "Instant response times and minimal latency for the best user experience.",
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: "24/7 Uptime",
      description: "Reliable hosting ensures Homie is always ready to serve your community.",
    },
  ]

  const trail = useTrail(features.length, {
    from: { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    to:
      featuresInView && showContent
        ? { opacity: 1, transform: "translateY(0px) translate3d(0,0,0)" }
        : { opacity: 0, transform: "translateY(40px) translate3d(0,0,0)" },
    config: { tension: 280, friction: 60 },
    delay: (index) => index * 100 + 400,
  })

  const mobileMenuSpring = useSpring({
    transform: isMenuOpen ? "translateX(0%)" : "translateX(-100%)",
    opacity: isMenuOpen ? 1 : 0,
    config: { tension: 300, friction: 30 },
  })

  return (
    <div className="min-h-screen bg-black text-white relative">
      <LoadingScreen isLoading={isLoading} />

      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-800 z-[60]">
        <animated.div
          style={scrollBarSpring}
          className="h-full bg-gradient-to-r from-purple-400 via-orange-400 to-green-400 transition-all duration-300"
        />
      </div>

      <div className="relative z-10">
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b bg-black/80 border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Image src="/homie-logo.png" alt="Homie Logo" width={32} height={32} className="w-8 h-8 mr-3" />
                <h1 className="text-xl sm:text-2xl font-bold text-white">Homie</h1>
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

        <animated.div style={mobileMenuSpring} className="fixed inset-0 bg-black z-40 md:hidden">
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

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
        >
          <StarField />
          <animated.div style={heroSpring} className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-balance text-white">
              Meet <span className="text-purple-400">Homie</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 text-pretty px-4">
              Your friendly Discord all-rounder bot that brings high-quality tunes to your server with zero hassle
            </p>
            <animated.div style={buttonSpring} className="flex flex-col lg:flex-row gap-4 justify-center px-4 mt-8">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg"
                asChild
              >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Add Bot to Your Server
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                asChild
              >
                <a href="https://discord.gg/jbMuP3YzRa" target="_blank" rel="noopener noreferrer">
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Support
                </a>
              </Button>
            </animated.div>
          </animated.div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="px-4 py-16 sm:py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
              {/* Left side - Info content for desktop/tablet */}
              <div className="lg:sticky lg:top-24">
                <animated.div style={featuresHeaderSpring}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-balance text-white">
                    Why Choose <span className="text-purple-400">Homie</span>?
                  </h2>
                  <div className="hidden lg:block">
                    <p className="text-lg text-gray-300 mb-6 text-pretty">
                      Homie brings the ultimate Discord experience to your server with cutting-edge features designed
                      for modern communities.
                    </p>
                    <p className="text-base text-gray-400 mb-8 text-pretty">
                      From AI-powered interactions to high-quality music streaming, developer tools, and entertainment
                      commands - Homie has everything you need to create an engaging server environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white" asChild>
                        <a
                          href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Plus className="h-5 w-5 mr-2" />
                          Add to Server
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                        asChild
                      >
                        <a href="https://discord.gg/jbMuP3YzRa" target="_blank" rel="noopener noreferrer">
                          <HelpCircle className="h-5 w-5 mr-2" />
                          Learn More
                        </a>
                      </Button>
                    </div>
                  </div>
                </animated.div>
              </div>

              {/* Right side - Cards for desktop/tablet, below info for mobile */}
              <div className="mt-8 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {trail.map((style, index) => (
                    <animated.div key={index} style={style}>
                      <Card className="border-gray-800 hover:border-white transition-all duration-300 h-full bg-transparent group">
                        <CardHeader className="pb-4">
                          <div className="text-orange-400 mb-4">{features[index].icon}</div>
                          <CardTitle className="text-lg sm:text-xl text-white">{features[index].title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300 text-pretty text-sm sm:text-base">
                            {features[index].description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </animated.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="px-4 py-16 sm:py-24 md:py-32">
          <animated.div style={ctaSpring} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance text-white">
              Ready to Upgrade Your <span className="text-white">Server Experience</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 text-pretty px-4">
              Join thousands of Discord servers already enjoying Homie's premium features
            </p>
            <div className="flex flex-col lg:flex-row gap-4 justify-center px-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                asChild
              >
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1217850169375199313&permissions=572196434336961&integration_type=0&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Add to Discord
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent"
                asChild
              >
                <a href="/commands">
                  <Code className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  View Commands
                </a>
              </Button>
            </div>
          </animated.div>
        </section>

        {/* Footer */}
        <footer ref={footerRef} className="border-t border-gray-800 py-8 sm:py-12 px-4">
          <animated.div style={footerSpring} className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">Homie</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 flex items-center justify-center gap-2 text-sm sm:text-base">
              Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> by the Homie Team
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="https://discord.gg/your-support-server"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Support
              </a>
              <a href="/commands" className="text-gray-400 hover:text-purple-400 transition-colors">
                Commands
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms
              </a>
            </div>
          </animated.div>
        </footer>
      </div>
    </div>
  )
}
