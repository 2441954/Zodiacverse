import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Store, Share, Eye } from "lucide-react";
import { zodiacStickerComponents } from "@/components/zodiac-stickers";

export default function NftVault() {
  const { data: nftCollection = [], isLoading } = useQuery({
    queryKey: ['/api/nft/collection', 1], // User ID 1 for MVP
    queryFn: async () => {
      const response = await fetch('/api/nft/collection/1');
      if (!response.ok) throw new Error('Failed to fetch NFTs');
      return response.json();
    },
  });

  const getRarityColor = (type: string) => {
    switch (type) {
      case 'sticker': return 'bg-neon-pink';
      case 'horoscope': return 'bg-cosmic-gold';
      case 'compatibility': return 'bg-neon-green';
      default: return 'bg-galaxy-blue';
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-aurora-purple to-cosmic-gold bg-clip-text text-transparent">
            Your Cosmic NFT Vault
          </h2>
          <p className="text-xl text-gray-300">Your collection of cosmic treasures and achievements</p>
        </motion.div>
        
        <Card className="glassmorphism border-white/20">
          <CardContent className="p-8">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-pink mx-auto mb-4"></div>
                <p className="text-gray-300">Loading your cosmic collection...</p>
              </div>
            ) : nftCollection.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {nftCollection.map((nft: any, index: number) => {
                    const metadata = nft.metadata;
                    const zodiacSign = metadata?.attributes?.find((attr: any) => attr.trait_type === "Zodiac Sign")?.value;
                    const StickerComponent = zodiacSign ? zodiacStickerComponents[zodiacSign as keyof typeof zodiacStickerComponents] : null;
                    
                    return (
                      <motion.div
                        key={nft.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="glassmorphism border-white/20 hover:scale-105 transition-transform">
                          <CardContent className="p-4">
                            <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-cosmic-purple to-neon-pink flex items-center justify-center">
                              {StickerComponent ? (
                                <div className="w-32 h-32">
                                  <StickerComponent />
                                </div>
                              ) : (
                                <div className="text-6xl">🌌</div>
                              )}
                            </div>
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold truncate">{metadata?.name || 'Cosmic NFT'}</h4>
                              <Badge className={`${getRarityColor(nft.nftType)} text-white text-xs font-medium`}>
                                {nft.nftType?.charAt(0).toUpperCase() + nft.nftType?.slice(1) || 'NFT'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-300 mb-4">{metadata?.description || 'A unique cosmic NFT'}</p>
                            <Button className="w-full bg-gradient-to-r from-cosmic-purple to-neon-pink py-2 font-medium hover:scale-105 transition-transform">
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <p className="text-gray-300 mb-4">
                    Total Items: <span className="text-cosmic-gold font-semibold">{nftCollection.length}</span>
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button className="bg-gradient-to-r from-neon-green to-galaxy-blue px-6 py-3 font-medium hover:scale-105 transition-transform">
                      <Store className="mr-2 h-4 w-4" />
                      Explore Marketplace
                    </Button>
                    <Button className="bg-gradient-to-r from-cosmic-purple to-neon-pink px-6 py-3 font-medium hover:scale-105 transition-transform">
                      <Share className="mr-2 h-4 w-4" />
                      Share Collection
                    </Button>
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-semibold mb-4">Your vault is empty</h3>
                <p className="text-gray-300 mb-6">Start collecting cosmic NFTs to build your digital constellation!</p>
                <Button className="bg-gradient-to-r from-cosmic-purple to-neon-pink px-8 py-3 font-semibold hover:scale-105 transition-transform">
                  <Store className="mr-2 h-4 w-4" />
                  Browse Collection
                </Button>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
