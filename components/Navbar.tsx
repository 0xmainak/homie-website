import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Logo href="/" size="md" />
        
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/commands" className="text-sm font-medium transition-colors hover:text-primary">
            Commands
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild size="sm" className="neon-border">
            <Link href="https://discord.com/api/oauth2/authorize?client_id=1217850169375199313&permissions=8&scope=bot">
              Add to Discord
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
