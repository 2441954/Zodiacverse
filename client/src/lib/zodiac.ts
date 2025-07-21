import { zodiacSigns } from "@/data/zodiac-data";

export function calculateZodiacSign(birthDate: string): string {
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

export function getZodiacInfo(signName: string) {
  const sign = zodiacSigns.find(s => s.name === signName);
  if (!sign) {
    return {
      funFact: "A mysterious cosmic entity",
      roast: "You're so unique that even the stars are confused about you! 🌟",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      symbol: "?"
    };
  }
  return sign;
}

export function calculateCompatibility(sign1: string, sign2: string) {
  const compatibilityMatrix: Record<string, Record<string, number>> = {
    "Aries": { "Leo": 95, "Sagittarius": 93, "Gemini": 85, "Aquarius": 83, "Libra": 75, "Cancer": 65, "Capricorn": 60, "Virgo": 55, "Scorpio": 50, "Pisces": 45, "Taurus": 40 },
    "Taurus": { "Virgo": 95, "Capricorn": 93, "Cancer": 88, "Pisces": 85, "Scorpio": 78, "Leo": 70, "Aquarius": 65, "Libra": 60, "Sagittarius": 55, "Gemini": 45, "Aries": 40 },
    "Gemini": { "Libra": 95, "Aquarius": 92, "Aries": 85, "Leo": 83, "Sagittarius": 80, "Virgo": 70, "Pisces": 65, "Scorpio": 60, "Cancer": 55, "Capricorn": 50, "Taurus": 45 },
    "Cancer": { "Scorpio": 95, "Pisces": 93, "Taurus": 88, "Virgo": 85, "Capricorn": 78, "Gemini": 70, "Sagittarius": 65, "Aries": 60, "Libra": 55, "Leo": 50, "Aquarius": 45 },
    "Leo": { "Aries": 95, "Sagittarius": 92, "Gemini": 83, "Libra": 80, "Aquarius": 75, "Scorpio": 70, "Taurus": 65, "Cancer": 60, "Pisces": 55, "Virgo": 50, "Capricorn": 45 },
    "Virgo": { "Taurus": 95, "Capricorn": 92, "Cancer": 85, "Scorpio": 83, "Pisces": 78, "Gemini": 70, "Sagittarius": 65, "Leo": 60, "Aquarius": 55, "Aries": 50, "Libra": 45 },
    "Libra": { "Gemini": 95, "Aquarius": 93, "Leo": 80, "Sagittarius": 78, "Aries": 75, "Cancer": 70, "Capricorn": 65, "Virgo": 60, "Pisces": 55, "Scorpio": 50, "Taurus": 45 },
    "Scorpio": { "Cancer": 95, "Pisces": 92, "Virgo": 83, "Capricorn": 80, "Taurus": 78, "Leo": 70, "Aquarius": 65, "Libra": 60, "Gemini": 55, "Sagittarius": 50, "Aries": 45 },
    "Sagittarius": { "Aries": 93, "Leo": 92, "Gemini": 80, "Libra": 78, "Aquarius": 75, "Virgo": 70, "Pisces": 65, "Taurus": 60, "Cancer": 55, "Scorpio": 50, "Capricorn": 45 },
    "Capricorn": { "Taurus": 93, "Virgo": 92, "Scorpio": 80, "Pisces": 78, "Cancer": 75, "Libra": 70, "Aries": 65, "Leo": 60, "Gemini": 55, "Aquarius": 50, "Sagittarius": 45 },
    "Aquarius": { "Gemini": 92, "Libra": 93, "Aries": 83, "Sagittarius": 75, "Leo": 75, "Scorpio": 70, "Cancer": 65, "Virgo": 60, "Taurus": 55, "Pisces": 50, "Capricorn": 45 },
    "Pisces": { "Cancer": 93, "Scorpio": 92, "Taurus": 85, "Capricorn": 78, "Virgo": 78, "Sagittarius": 70, "Gemini": 65, "Aries": 60, "Leo": 55, "Libra": 50, "Aquarius": 45 }
  };

  const score = compatibilityMatrix[sign1]?.[sign2] || compatibilityMatrix[sign2]?.[sign1] || 50;
  
  let verdict, emoji, shortDescription, description;

  if (score >= 90) {
    verdict = "Cosmic Soulmates!";
    emoji = "💫✨";
    shortDescription = "Written in the stars!";
    description = `${sign1} + ${sign2} = absolute perfection! You two are like celestial bodies orbiting in perfect harmony. The universe literally conspired to bring you together. Your connection is so strong that even black holes are jealous. This is the kind of love that makes other zodiac signs write poetry about you! 💕`;
  } else if (score >= 80) {
    verdict = "Cosmic Connection!";
    emoji = "🔥✨";
    shortDescription = "Y'all are giving power couple energy";
    description = `${sign1} + ${sign2} = major relationship goals! You complement each other like celestial peanut butter and jelly. Sure, you might have your moments, but your connection runs deeper than the Mariana Trench. Together, you're unstoppable force meets immovable object in the best way possible! 🌟`;
  } else if (score >= 70) {
    verdict = "Pretty Solid Vibes";
    emoji = "💖🌙";
    shortDescription = "Could definitely work with effort";
    description = `${sign1} + ${sign2} = solid potential! You're like that friend duo everyone secretly wants to be. You balance each other out nicely, though you might need to work through some cosmic differences. With a little communication and understanding, you could be relationship goals! 💫`;
  } else if (score >= 60) {
    verdict = "It's Complicated";
    emoji = "🤷‍♀️✨";
    shortDescription = "Proceed with caution but keep an open mind";
    description = `${sign1} + ${sign2} = interesting dynamics ahead! You're like two different songs that somehow create a beautiful mashup when played together. It might take some work to find your rhythm, but hey, the best relationships aren't always the easiest ones. Just remember to communicate! 🎭`;
  } else {
    verdict = "Cosmic Chaos";
    emoji = "💀🌪️";
    shortDescription = "Buckle up, it's gonna be a wild ride";
    description = `${sign1} + ${sign2} = pure entertainment for everyone else! You two are like mixing Mentos with Diet Coke - explosive and unpredictable. This relationship will either be a beautiful disaster that everyone talks about, or you'll somehow make it work through sheer stubbornness. Either way, it won't be boring! 😅`;
  }

  return {
    score,
    verdict,
    emoji,
    shortDescription,
    description
  };
}
