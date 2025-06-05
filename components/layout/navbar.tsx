"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-[#0A0A0A] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="https://cdn.discordapp.com/avatars/1217850169375199313/6d82df5f034acd843dce3e2a926a6de3.png?size=1024"
              alt="Homie Bot Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#C026D3]">Homie</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/commands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Commands
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <ModeToggle />
          <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-6 rounded-[20px]">
            Add to Discord
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <button onClick={toggleMenu} className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-[#0A0A0A] border-b z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Features
            </Link>
            <Link href="/commands" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Commands
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              About
            </Link>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium py-2 px-6 rounded-[20px] w-full">
              Add to Discord
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
