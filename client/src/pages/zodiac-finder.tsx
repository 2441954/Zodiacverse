import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { getZodiacInfo } from "@/lib/zodiac";
import { Sparkles } from "lucide-react";

export default function ZodiacFinder() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiacResult, setZodiacResult] = useState<any>(null);
  const { toast } = useToast();

  const calculateZodiacMutation = useMutation({
    mutationFn: async (birthDate: string) => {
      const response = await apiRequest("POST", "/api/zodiac/calculate", {
        birthDate,
        userId: 1 // Mock user ID for MVP
      });
      return response.json();
    },
    onSuccess: (data) => {
      const zodiacInfo = getZodiacInfo(data.zodiacSign);
      setZodiacResult({ ...data, ...zodiacInfo });
      toast({
        title: "Cosmic truth revealed! ✨",
        description: `You're a ${data.zodiacSign}! Check out your cosmic roast below.`,
      });
    },
    onError: () => {
      toast({
        title: "Oops! Cosmic interference detected",
        description: "Please try again with a valid birth date.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) {
      toast({
        title: "Birth date required",
        description: "Please enter your birth date to discover your cosmic identity.",
        variant: "destructive",
      });
      return;
    }
    calculateZodiacMutation.mutate(birthDate);
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-aurora-purple to-cosmic-gold bg-clip-text text-transparent">
            What's Your Cosmic Identity?
          </h2>
          <p className="text-xl text-gray-300">Enter your birth date and prepare to be cosmically called out</p>
        </motion.div>
        
        <Card className="glassmorphism border-white/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Enter Your Birth Date</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="birthDate" className="block text-sm font-medium mb-2 text-gray-300">
                      Birth Date
                    </Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-neon-pink focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={calculateZodiacMutation.isPending}
                    className="w-full bg-gradient-to-r from-cosmic-purple to-neon-pink py-3 font-semibold hover:scale-105 transition-transform"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    {calculateZodiacMutation.isPending ? "Consulting the stars..." : "Reveal My Cosmic Truth"}
                  </Button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                {zodiacResult ? (
                  <div>
                    <img
                      src={zodiacResult.image}
                      alt={`${zodiacResult.zodiacSign} constellation`}
                      className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-neon-pink object-cover"
                    />
                    
                    <Card className="glassmorphism border-white/20">
                      <CardContent className="p-6">
                        <h4 className="text-3xl font-bold text-neon-pink mb-2">
                          {zodiacResult.zodiacSign} {zodiacResult.symbol}
                        </h4>
                        <p className="text-gray-300 mb-4">{zodiacResult.funFact}</p>
                        
                        <div className="bg-gradient-to-r from-neon-pink to-aurora-purple p-4 rounded-xl">
                          <p className="font-semibold text-white">
                            "{zodiacResult.roast}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-gray-600 flex items-center justify-center">
                      <Sparkles className="w-16 h-16" />
                    </div>
                    <p>Enter your birth date to reveal your cosmic identity</p>
                  </div>
                )}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
