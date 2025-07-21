import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Star, Menu, Wallet } from "lucide-react";

export default function CosmicNav() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/zodiac", label: "Find My Sign" },
    { href: "/horoscope", label: "Horoscope" },
    { href: "/compatibility", label: "Compatibility" },
    { href: "/memes", label: "Memes" },
    { href: "/stickers", label: "Stickers" },
    { href: "/nft-vault", label: "NFT Vault" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glassmorphism border-b border-white/20"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Star className="text-2xl text-cosmic-gold animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-aurora-purple bg-clip-text text-transparent">
                Zodiacverse
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`cursor-pointer transition-colors ${
                    isActive(item.href)
                      ? "text-neon-pink"
                      : "text-white hover:text-neon-pink"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-cosmic-purple to-neon-pink px-6 py-2 font-medium hover:scale-105 transition-transform">
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 cosmic-gradient border-l border-white/20">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`block text-lg cursor-pointer transition-colors ${
                          isActive(item.href)
                            ? "text-neon-pink"
                            : "text-white hover:text-neon-pink"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
