import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export function Logo({ 
  href = '/', 
  size = 'md', 
  className = '',
  showText = true
}: LogoProps) {
  const sizes = {
    sm: 24,
    md: 32,
    lg: 48,
  };
  
  const pixelSize = sizes[size];
  const logoUrl = "https://cdn.discordapp.com/avatars/1217850169375199313/6d82df5f034acd843dce3e2a926a6de3.png?size=1024";
  
  const logoContent = (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Image 
          src={logoUrl}
          alt="Homie Bot Logo" 
          width={pixelSize} 
          height={pixelSize} 
          className="rounded-full"
          priority
        />
      </div>
      {showText && (
        <span className="font-bold text-foreground gradient-text">
          Homie
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
