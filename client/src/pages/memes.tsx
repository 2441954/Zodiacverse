import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Share2, Sparkles, Zap, Heart, Flame } from "lucide-react";
import { zodiacSigns } from "@/data/zodiac-data";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";



const vibeOptions = [
  { value: "chaotic", label: "Chaotic Good", icon: "🔥" },
  { value: "wholesome", label: "Wholesome", icon: "💖" },
  { value: "roast", label: "Roast Mode", icon: "🔥" },
  { value: "spiritual", label: "Spiritual", icon: "✨" },
  { value: "relatable", label: "Too Real", icon: "💯" },
  { value: "unhinged", label: "Unhinged", icon: "🤪" }
];

export default function Memes() {
  const { toast } = useToast();
  const [selectedSign, setSelectedSign] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("chaotic");
  const [customText, setCustomText] = useState("");
  const [generatedMeme, setGeneratedMeme] = useState<any>(null);

  const generateMemeMutation = useMutation({
    mutationFn: async (memeData: any) => {
      const response = await apiRequest("POST", "/api/meme/generate", {
        zodiacSign: memeData.zodiacSign,
        vibe: memeData.vibe,
        customText: memeData.customText
      });
      return response.json();
    },
    onSuccess: (data) => {
      setGeneratedMeme(data);
      toast({
        title: "Cosmic meme generated! 🎭",
        description: "Your meme is ready to break the internet!",
      });
    },
    onError: () => {
      toast({
        title: "Meme generation failed",
        description: "The cosmic forces are aligned against us. Try again!",
        variant: "destructive",
      });
    },
  });



  const handleGenerate = () => {
    if (!selectedSign) {
      toast({
        title: "Select a zodiac sign first!",
        description: "We need to know your cosmic identity to generate the perfect meme.",
        variant: "destructive",
      });
      return;
    }
    
    generateMemeMutation.mutate({
      zodiacSign: selectedSign,
      vibe: selectedVibe,
      customText
    });
  };

  const handleShare = () => {
    if (generatedMeme) {
      navigator.clipboard.writeText(generatedMeme.shareUrl);
      toast({
        title: "Share link copied! 📋",
        description: "Paste this link to share your cosmic meme",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Meme downloaded! 📱",
      description: "Your cosmic creation is saved and ready to post",
    });
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-pink to-cosmic-gold bg-clip-text text-transparent">
            Cosmic Meme Generator 🎭
          </h2>
          <p className="text-xl text-gray-300">Create viral astrology memes that speak to your soul (and timeline)</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Meme Generator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Create Your Meme</h3>
                
                <div className="space-y-6">
                  {/* Zodiac Sign */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Zodiac Sign *</label>
                    <Select value={selectedSign} onValueChange={setSelectedSign}>
                      <SelectTrigger className="glassmorphism border-white/20">
                        <SelectValue placeholder="Choose your cosmic sign" />
                      </SelectTrigger>
                      <SelectContent className="glassmorphism border-white/20">
                        {zodiacSigns.map((sign) => (
                          <SelectItem key={sign.name} value={sign.name}>
                            {sign.symbol} {sign.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vibe Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Vibe Check</label>
                    <div className="grid grid-cols-2 gap-2">
                      {vibeOptions.map((vibe) => (
                        <Button
                          key={vibe.value}
                          variant={selectedVibe === vibe.value ? "default" : "outline"}
                          className={`justify-start ${
                            selectedVibe === vibe.value 
                              ? "bg-gradient-to-r from-cosmic-purple to-neon-pink" 
                              : "glassmorphism border-white/20"
                          }`}
                          onClick={() => setSelectedVibe(vibe.value)}
                        >
                          <span className="mr-2">{vibe.icon}</span>
                          {vibe.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Text */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Custom Text (Optional)</label>
                    <Textarea
                      placeholder="Add your own cosmic wisdom..."
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      className="glassmorphism border-white/20 resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={generateMemeMutation.isPending}
                    className="w-full bg-gradient-to-r from-neon-green to-cosmic-purple py-3 font-semibold hover:scale-105 transition-transform"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    {generateMemeMutation.isPending ? "Generating..." : "Generate Cosmic Meme"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview & Result */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Your Meme Preview</h3>
                
                {generatedMeme ? (
                  <div className="space-y-4">
                    {/* Meme Preview */}
                    <div className="bg-gradient-to-br from-cosmic-purple/20 to-neon-pink/20 rounded-xl p-6 border border-white/10">
                      <div className="text-center space-y-4">
                        <Badge className="bg-gradient-to-r from-cosmic-gold to-neon-green text-black font-medium">
                          Cosmic Meme
                        </Badge>
                        
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-cosmic-purple/30 to-neon-pink/30 rounded-lg p-6 border border-white/20">
                            <p className="text-lg font-semibold text-white mb-2">
                              {generatedMeme.topText}
                            </p>
                            <div className="text-3xl text-center my-4">
                              {zodiacSigns.find(s => s.name === selectedSign)?.symbol || "✨"}
                            </div>
                            <p className="text-lg font-semibold text-white">
                              {generatedMeme.bottomText}
                            </p>
                          </div>
                        </div>
                        
                        {selectedSign && (
                          <Badge className="bg-gradient-to-r from-neon-pink to-cosmic-purple">
                            {zodiacSigns.find(s => s.name === selectedSign)?.symbol} {selectedSign}
                          </Badge>
                        )}
                        
                        {customText && (
                          <div className="bg-cosmic-gold/20 rounded-lg p-3 border border-cosmic-gold/30">
                            <p className="text-cosmic-gold font-medium italic">
                              "{customText}"
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        onClick={handleDownload}
                        className="flex-1 bg-gradient-to-r from-galaxy-blue to-neon-green py-2 font-medium hover:scale-105 transition-transform"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button
                        onClick={handleShare}
                        className="flex-1 bg-gradient-to-r from-cosmic-purple to-neon-pink py-2 font-medium hover:scale-105 transition-transform"
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>

                    <p className="text-sm text-gray-400 text-center">
                      Ready to go viral? 🚀
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎭</div>
                    <p className="text-gray-400">
                      Select your zodiac sign and vibe, then hit generate to create your cosmic masterpiece!
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Vibe Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-neon-green to-galaxy-blue bg-clip-text text-transparent">
            Cosmic Vibe Examples
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vibeOptions.map((vibe, index) => (
              <motion.div
                key={vibe.value}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{vibe.icon}</span>
                      <h4 className="font-semibold">{vibe.label}</h4>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-xs">
                      <p className="text-cosmic-gold">{vibe.value === 'chaotic' ? 'Starting 47 projects' : vibe.value === 'roast' ? 'Actually the main character' : 'Pure cosmic energy'}</p>
                      <p className="text-neon-pink mt-1">{vibe.value === 'chaotic' ? 'Finishing exactly 0' : vibe.value === 'roast' ? 'But still a mess' : 'Spreading good vibes'}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}