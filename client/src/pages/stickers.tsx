import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Gem, Crown } from "lucide-react";
import { zodiacSigns } from "@/data/zodiac-data";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { zodiacStickerComponents } from "@/components/zodiac-stickers";

export default function Stickers() {
  const { toast } = useToast();

  const mintNftMutation = useMutation({
    mutationFn: async ({ signName, stickerSvg }: { signName: string; stickerSvg: string }) => {
      const response = await apiRequest("POST", "/api/nft/mint", {
        userId: 1,
        nftType: "sticker",
        metadata: {
          name: `Cosmic ${signName} Sticker`,
          description: `Limited edition zodiac sticker for ${signName}`,
          image: stickerSvg,
          attributes: [
            { trait_type: "Zodiac Sign", value: signName },
            { trait_type: "Type", value: "Cosmic Sticker" },
            { trait_type: "Rarity", value: "Common" }
          ]
        }
      });
      return response.json();
    },
    onSuccess: (data, variables) => {
      toast({
        title: `${variables.signName} NFT minted! ⚡`,
        description: "Your cosmic sticker has been successfully minted as an NFT!",
      });
    },
    onError: () => {
      toast({
        title: "Minting failed",
        description: "There was an error minting your NFT. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleDownload = (signName: string) => {
    // Get the SVG component and create a downloadable file
    const StickerComponent = zodiacStickerComponents[signName as keyof typeof zodiacStickerComponents];
    if (StickerComponent) {
      // Create a temporary div to render the SVG
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = `<svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg">${tempDiv.innerHTML}</svg>`;
      
      toast({
        title: `${signName} sticker ready! 🎉`,
        description: "Your cosmic sticker SVG is ready for download.",
      });
    }
  };

  const handleMint = (signName: string) => {
    const StickerComponent = zodiacStickerComponents[signName as keyof typeof zodiacStickerComponents];
    if (StickerComponent) {
      // Convert SVG component to string for metadata
      const stickerSvg = `data:image/svg+xml;base64,${btoa(JSON.stringify(StickerComponent))}`;
      mintNftMutation.mutate({ signName, stickerSvg });
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-gold to-neon-green bg-clip-text text-transparent">
            Cosmic Sticker Collection
          </h2>
          <p className="text-xl text-gray-300">Download for free or mint as NFTs to flex your cosmic status</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {zodiacSigns.map((sign, index) => {
            const StickerComponent = zodiacStickerComponents[sign.name as keyof typeof zodiacStickerComponents];
            return (
              <motion.div
                key={sign.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform group">
                  <CardContent className="p-4">
                    <div className="w-full h-32 rounded-xl mb-3 overflow-hidden">
                      <StickerComponent />
                    </div>
                  
                  <h4 className="text-lg font-semibold text-center mb-3">
                    {sign.name} {sign.symbol}
                  </h4>
                  
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleDownload(sign.name)}
                      className="flex-1 bg-gradient-to-r from-neon-green to-galaxy-blue py-2 px-3 text-sm font-medium hover:scale-105 transition-transform"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                    <Button
                      onClick={() => handleMint(sign.name)}
                      disabled={mintNftMutation.isPending}
                      className="flex-1 bg-gradient-to-r from-cosmic-purple to-neon-pink py-2 px-3 text-sm font-medium hover:scale-105 transition-transform disabled:opacity-50"
                    >
                      <Gem className="mr-1 h-3 w-3" />
                      {mintNftMutation.isPending ? "Minting..." : "Mint"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6">Want exclusive limited edition stickers?</p>
          <Button className="bg-gradient-to-r from-cosmic-gold to-neon-pink px-8 py-4 font-semibold hover:scale-105 transition-transform">
            <Crown className="mr-2 h-5 w-5" />
            Unlock Premium Collection
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
