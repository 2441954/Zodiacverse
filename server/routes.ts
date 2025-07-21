import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertZodiacProfileSchema, 
  insertHoroscopeReadSchema, 
  insertCompatibilityCheckSchema,
  insertNftCollectionSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Calculate zodiac sign from birth date
  app.post("/api/zodiac/calculate", async (req, res) => {
    try {
      console.log("Received request body:", req.body);
      const validatedData = insertZodiacProfileSchema.parse(req.body);
      console.log("Validated data:", validatedData);
      
      // Calculate zodiac sign
      const zodiacSign = calculateZodiacSign(validatedData.birthDate);
      console.log("Calculated zodiac sign:", zodiacSign);
      
      const profile = await storage.createZodiacProfile({
        userId: validatedData.userId || 1, // Default to user ID 1 for MVP
        birthDate: validatedData.birthDate,
        zodiacSign
      });
      
      res.json(profile);
    } catch (error: any) {
      console.error("Error in zodiac calculation:", error);
      res.status(400).json({ message: error.message });
    }
  });

  // Get user's zodiac profile
  app.get("/api/zodiac/profile/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const profile = await storage.getZodiacProfileByUserId(userId);
      
      if (!profile) {
        return res.status(404).json({ message: "Zodiac profile not found" });
      }
      
      res.json(profile);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Save horoscope read
  app.post("/api/horoscope/read", async (req, res) => {
    try {
      const horoscopeData = insertHoroscopeReadSchema.parse(req.body);
      const read = await storage.createHoroscopeRead(horoscopeData);
      res.json(read);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get horoscope history for user
  app.get("/api/horoscope/history/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const history = await storage.getHoroscopeReadsByUserId(userId);
      res.json(history);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Save compatibility check
  app.post("/api/compatibility/check", async (req, res) => {
    try {
      const compatibilityData = insertCompatibilityCheckSchema.parse(req.body);
      const check = await storage.createCompatibilityCheck(compatibilityData);
      res.json(check);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get compatibility history for user
  app.get("/api/compatibility/history/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const history = await storage.getCompatibilityChecksByUserId(userId);
      res.json(history);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Mint NFT (mock implementation for MVP)
  app.post("/api/nft/mint", async (req, res) => {
    try {
      const nftData = insertNftCollectionSchema.parse(req.body);
      const nft = await storage.createNftItem(nftData);
      res.json(nft);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get user's NFT collection
  app.get("/api/nft/collection/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const collection = await storage.getNftCollectionByUserId(userId);
      res.json(collection);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Meme Generation routes
  app.post("/api/meme/generate", async (req, res) => {
    try {
      const { zodiacSign, vibe, customText } = req.body;
      
      // Generate cosmic meme text based on zodiac sign and vibe
      const memeText = generateCosmicMemeText(zodiacSign, vibe);
      
      const meme = {
        id: Date.now(),
        zodiacSign,
        vibe,
        topText: memeText.topText,
        bottomText: memeText.bottomText,
        customText,
        shareUrl: `https://zodiacverse.app/meme/${Date.now()}`,
        createdAt: new Date().toISOString()
      };
      
      res.json(meme);
    } catch (error: any) {
      console.error("Error generating meme:", error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function calculateZodiacSign(birthDate: string): string {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces";
}

// Helper function for meme text generation
function generateCosmicMemeText(zodiacSign: string, vibe: string) {
  const memeDatabase: any = {
    'Aries': {
      chaotic: { topText: "Aries starting 47 projects", bottomText: "Finishing exactly 0 of them" },
      wholesome: { topText: "Aries energy", bottomText: "Leading everyone to victory ♈" },
      roast: { topText: "Aries thinking they're the main character", bottomText: "Plot twist: they actually are" },
      spiritual: { topText: "Mars energy flowing through Aries", bottomText: "Pure cosmic fire power ✨" },
      relatable: { topText: "Me as an Aries", bottomText: "Impulsively buying things at 3am" },
      unhinged: { topText: "Aries at full power", bottomText: "Chaos incarnate but make it cute" }
    },
    'Gemini': {
      chaotic: { topText: "Gemini having 12 conversations", bottomText: "Simultaneously in their head" },
      wholesome: { topText: "Gemini social butterfly", bottomText: "Making everyone feel included 🦋" },
      roast: { topText: "Gemini: 'I'm great at commitment'", bottomText: "*changes entire personality weekly*" }
    },
    'Leo': {
      chaotic: { topText: "Leo walking into any room", bottomText: "Becomes the main character immediately" },
      roast: { topText: "Leo: 'I don't need attention'", bottomText: "*posts 47 selfies today*" }
    },
    'Scorpio': {
      chaotic: { topText: "Scorpio's trust issues", bottomText: "Actually very reasonable" },
      roast: { topText: "Scorpio: 'I'm mysterious'", bottomText: "*posts cryptic Instagram stories daily*" }
    }
  };

  const signData = memeDatabase[zodiacSign];
  if (signData && signData[vibe]) {
    return signData[vibe];
  }
  
  // Fallback to generic cosmic meme
  return {
    topText: "When you're living your best cosmic life",
    bottomText: "But Mercury is in retrograde"
  };
}
