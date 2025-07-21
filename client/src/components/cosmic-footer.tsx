import { Link } from "wouter";
import { Star } from "lucide-react";

export default function CosmicFooter() {
  return (
    <footer className="py-12 px-4 bg-black/50 border-t border-white/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="text-2xl text-cosmic-gold" />
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-aurora-purple bg-clip-text text-transparent">
                Zodiacverse
              </span>
            </div>
            <p className="text-gray-300 mb-4">Your cosmic journey through the stars, powered by Web3 and good vibes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-neon-pink transition-colors">
                <i className="fab fa-discord text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/zodiac"><span className="hover:text-neon-pink transition-colors cursor-pointer">Find Your Sign</span></Link></li>
              <li><Link href="/horoscope"><span className="hover:text-neon-pink transition-colors cursor-pointer">Daily Horoscope</span></Link></li>
              <li><Link href="/compatibility"><span className="hover:text-neon-pink transition-colors cursor-pointer">Compatibility</span></Link></li>
              <li><Link href="/stickers"><span className="hover:text-neon-pink transition-colors cursor-pointer">Cosmic Stickers</span></Link></li>
              <li><Link href="/nft-vault"><span className="hover:text-neon-pink transition-colors cursor-pointer">NFT Vault</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-neon-pink transition-colors">Discord Server</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Meme Gallery</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Share Your Roast</a></li>
              <li><a href="#" className="hover:text-neon-pink transition-colors">Cosmic Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Web3 Partners</h4>
            <ul className="space-y-2 text-gray-300">
              <li>🔗 Sequence Wallet</li>
              <li>⚡ Thirdweb NFTs</li>
              <li>📊 Goldsky Storage</li>
              <li>🌙 RedStone Oracles</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Zodiacverse. Made with ✨ and cosmic energy. 
            <span className="text-neon-pink"> May the stars be with you!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
