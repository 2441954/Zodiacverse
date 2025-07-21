import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Flame, Share } from "lucide-react";
import { getHoroscopeData } from "@/data/horoscope-data";

export default function Horoscope() {
  const [mode, setMode] = useState<'vibe' | 'roast'>('vibe');
  const [selectedSign, setSelectedSign] = useState('Scorpio');
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric' 
  });
  
  const horoscopeData = getHoroscopeData(selectedSign, mode);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-green to-galaxy-blue bg-clip-text text-transparent">
            Today's Cosmic Forecast
          </h2>
          <p className="text-xl text-gray-300">Choose your vibe: inspiration or absolute destruction</p>
        </motion.div>
        
        <Card className="glassmorphism border-white/20">
          <CardContent className="p-8">
            {/* Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-full p-1 flex">
                <Button
                  onClick={() => setMode('vibe')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    mode === 'vibe'
                      ? 'bg-gradient-to-r from-neon-green to-galaxy-blue text-white font-semibold'
                      : 'bg-transparent text-gray-300 hover:text-white'
                  }`}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Vibe Mode
                </Button>
                <Button
                  onClick={() => setMode('roast')}
                  className={`px-6 py-3 rounded-full transition-all ${
                    mode === 'roast'
                      ? 'bg-gradient-to-r from-neon-pink to-aurora-purple text-white font-semibold'
                      : 'bg-transparent text-gray-300 hover:text-white'
                  }`}
                >
                  <Flame className="mr-2 h-4 w-4" />
                  Roast Me Mode
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Mystical moon phase"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Today, {currentDate}</h3>
                  <p className="text-neon-pink font-medium">🌙 Waning Crescent</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className={`p-6 rounded-2xl ${
                  mode === 'vibe' 
                    ? 'bg-gradient-to-br from-neon-green to-galaxy-blue' 
                    : 'bg-gradient-to-br from-neon-pink to-aurora-purple'
                }`}>
                  <h4 className="text-xl font-semibold mb-4">
                    {mode === 'vibe' ? 'Your Vibe for Today' : 'Your Cosmic Roast'}
                  </h4>
                  <p className="text-lg leading-relaxed mb-6">
                    {horoscopeData.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">
                        {mode === 'vibe' ? 'Vibe Level:' : 'Roast Level:'}
                      </span>
                      <div className="flex space-x-1">
                        {Array.from({ length: horoscopeData.level }, (_, i) => (
                          <span key={i} className="text-cosmic-gold">⭐</span>
                        ))}
                      </div>
                    </div>
                    <Button className="bg-white/20 px-4 py-2 text-sm hover:bg-white/30 transition-colors">
                      <Share className="mr-1 h-3 w-3" />
                      Share
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
