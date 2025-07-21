import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, Heart, Images, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 mb-16">
        <div className="container mx-auto text-center">
          <div 
            className="relative mb-12 rounded-3xl overflow-hidden h-96 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="animate-float"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cosmic-gold via-neon-pink to-aurora-purple bg-clip-text text-transparent">
                  Welcome to the Zodiacverse
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  Your cosmic journey starts here. Get roasted by the stars! ✨
                </p>
                <Link href="/zodiac">
                  <Button className="bg-gradient-to-r from-neon-pink to-aurora-purple px-8 py-4 text-lg font-semibold hover:scale-110 transition-transform animate-glow">
                    <Rocket className="mr-2 h-5 w-5" />
                    Discover My Sign
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Star className="text-4xl text-cosmic-gold mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Find Your Sign</h3>
                  <p className="text-gray-300">Get your zodiac sign plus a cosmic roast that'll have you rolling</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Heart className="text-4xl text-neon-pink mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Check Compatibility</h3>
                  <p className="text-gray-300">See if you and your crush are written in the stars or destined for chaos</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <Images className="text-4xl text-neon-green mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">Cosmic Stickers</h3>
                  <p className="text-gray-300">Download zodiac stickers or mint them as NFTs for the ultimate flex</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
