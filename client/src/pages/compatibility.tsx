import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Share } from "lucide-react";
import { calculateCompatibility } from "@/lib/zodiac";
import { zodiacSigns } from "@/data/zodiac-data";

export default function Compatibility() {
  const [sign1, setSign1] = useState<string>("");
  const [sign2, setSign2] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    if (sign1 && sign2) {
      const compatibility = calculateCompatibility(sign1, sign2);
      setResult(compatibility);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-pink to-aurora-purple bg-clip-text text-transparent">
            Cosmic Compatibility Check
          </h2>
          <p className="text-xl text-gray-300">Find out if you're soulmates or should run for the hills</p>
        </motion.div>

        <Card className="glassmorphism border-white/20">
          <CardContent className="p-8">
            {/* Sign Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Sign</label>
                <Select value={sign1} onValueChange={setSign1}>
                  <SelectTrigger className="w-full bg-white/10 border-white/20">
                    <SelectValue placeholder="Select your zodiac sign" />
                  </SelectTrigger>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign.name} value={sign.name}>
                        {sign.name} {sign.symbol}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Their Sign</label>
                <Select value={sign2} onValueChange={setSign2}>
                  <SelectTrigger className="w-full bg-white/10 border-white/20">
                    <SelectValue placeholder="Select their zodiac sign" />
                  </SelectTrigger>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign.name} value={sign.name}>
                        {sign.name} {sign.symbol}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button 
                onClick={handleCalculate}
                disabled={!sign1 || !sign2}
                className="bg-gradient-to-r from-cosmic-purple to-neon-pink px-8 py-3 font-semibold hover:scale-105 transition-transform"
              >
                Calculate Compatibility
              </Button>
            </div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Your Sign</h3>
                    <Card className="glassmorphism border-white/20">
                      <CardContent className="p-6">
                        <img
                          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                          alt={`${sign1} constellation`}
                          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                        />
                        <h4 className="text-2xl font-bold text-neon-pink">
                          {sign1} {zodiacSigns.find(s => s.name === sign1)?.symbol}
                        </h4>
                        <p className="text-sm text-gray-300 mt-2">
                          {zodiacSigns.find(s => s.name === sign1)?.dates}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <Card className="glassmorphism border-white/20">
                      <CardContent className="p-8">
                        <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-cosmic-gold to-neon-green bg-clip-text text-transparent">
                          {result.score}%
                        </div>
                        <div className="text-2xl mb-4">{result.emoji}</div>
                        <p className="text-lg font-semibold text-neon-pink">{result.verdict}</p>
                        <p className="text-sm text-gray-300 mt-2">{result.shortDescription}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Their Sign</h3>
                    <Card className="glassmorphism border-white/20">
                      <CardContent className="p-6">
                        <img
                          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                          alt={`${sign2} constellation`}
                          className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                        />
                        <h4 className="text-2xl font-bold text-galaxy-blue">
                          {sign2} {zodiacSigns.find(s => s.name === sign2)?.symbol}
                        </h4>
                        <p className="text-sm text-gray-300 mt-2">
                          {zodiacSigns.find(s => s.name === sign2)?.dates}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-neon-pink to-aurora-purple p-6 rounded-2xl mb-6">
                  <h4 className="text-xl font-semibold mb-4">The Tea ☕</h4>
                  <p className="text-lg leading-relaxed">
                    {result.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <Button className="bg-gradient-to-r from-cosmic-purple to-neon-pink px-8 py-3 font-semibold hover:scale-105 transition-transform">
                    <Share className="mr-2 h-4 w-4" />
                    Share This Cosmic Truth
                  </Button>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
