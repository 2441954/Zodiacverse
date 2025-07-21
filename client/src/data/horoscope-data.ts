export function getHoroscopeData(zodiacSign: string, mode: 'vibe' | 'roast') {
  const horoscopes = {
    vibe: {
      Aries: {
        content: "The universe is literally conspiring to make your day amazing! 🔥 Mars is sending you major boss energy, and Venus wants you to shoot your shot. Trust your instincts today - they're giving main character energy.",
        level: 5
      },
      Taurus: {
        content: "Venus is blessing you with abundance today! 💚 Your persistence is about to pay off in ways that'll make you do a happy dance. Take time to appreciate the beauty around you - you deserve all the good vibes.",
        level: 4
      },
      Gemini: {
        content: "Mercury is activating your communication superpowers! ✨ Today's the perfect day to slide into those DMs or have that important conversation. Your wit is sharper than ever - use it wisely!",
        level: 5
      },
      Cancer: {
        content: "The Moon is giving you all the feels in the best way possible! 🌙 Your intuition is on point today. Trust those gut feelings and don't be afraid to show your soft side - it's your superpower.",
        level: 4
      },
      Leo: {
        content: "The Sun is literally spotlighting you today! ☀️ You're radiating main character energy, and everyone can feel it. This is your moment to shine - own it like the cosmic royalty you are!",
        level: 5
      },
      Virgo: {
        content: "Mercury is blessing your analytical mind with clarity! 🧠 Today's perfect for organizing your life and making those detailed plans. Your attention to detail will impress everyone around you.",
        level: 4
      },
      Libra: {
        content: "Venus is blessing your relationships today! 💕 You're giving diplomatic queen/king energy, and everyone wants your opinion. Balance is your superpower - use it to create harmony everywhere you go.",
        level: 4
      },
      Scorpio: {
        content: "Pluto is activating your transformation powers! 🦂 You're seeing through illusions like they're made of glass. Trust your mysterious intuition - it's leading you to something amazing.",
        level: 5
      },
      Sagittarius: {
        content: "Jupiter is expanding your horizons in the best way! 🏹 Adventure is calling your name, and wisdom is flowing through you. Your optimism is contagious - spread those good vibes everywhere!",
        level: 5
      },
      Capricorn: {
        content: "Saturn is rewarding your hard work with success! 🐐 Your ambitious energy is unstoppable today. The mountain you've been climbing? You're almost at the summit, and the view is incredible.",
        level: 4
      },
      Aquarius: {
        content: "Uranus is activating your innovation station! ⚡ Your unique perspective is exactly what the world needs right now. Don't hide your quirky genius - let your freak flag fly with pride!",
        level: 5
      },
      Pisces: {
        content: "Neptune is blessing your creative soul! 🐟 Your imagination is more vivid than a 4K movie today. Dive deep into your artistic side - the universe is ready to support your dreams.",
        level: 4
      }
    },
    roast: {
      Aries: {
        content: "Mars called and said you need to chill! 🔥 You're moving so fast that even lightning is asking for your skincare routine. Maybe try thinking before you leap... just once? Your impulse control left the chat years ago.",
        level: 5
      },
      Taurus: {
        content: "Venus tried to move you, but you said 'nah, I'm good here.' 🐂 You're so stubborn that even Google Maps gave up trying to reroute you. Change is not the enemy, bestie - try it sometime!",
        level: 4
      },
      Gemini: {
        content: "Mercury is dizzy from trying to keep up with your thoughts! 🤪 You change your mind so often that even your reflection doesn't recognize you. Pick a personality and stick with it for more than 5 minutes, please.",
        level: 5
      },
      Cancer: {
        content: "The Moon called - it wants its drama back! 🌙 You're so emotional that your feelings have their own weather forecast. Today's forecast: 90% chance of tears with scattered overthinking.",
        level: 4
      },
      Leo: {
        content: "The Sun is tired of competing with your ego! ☀️ You need so much attention that you probably have notifications for when people think about you. Not everything is about you... but you already knew that, didn't you?",
        level: 5
      },
      Virgo: {
        content: "Mercury is exhausted from all your nitpicking! 📋 You're so perfectionist that you probably proofread your grocery lists. Chill out - not everything needs to be color-coded and alphabetized!",
        level: 4
      },
      Libra: {
        content: "Venus is dizzy from watching you flip-flop! ⚖️ You're so indecisive that you need a committee to choose your breakfast. Make a choice and stick with it - the universe is tired of waiting!",
        level: 4
      },
      Scorpio: {
        content: "Pluto said your trust issues have trust issues! 🦂 You're so mysterious that even your own thoughts need security clearance. Maybe try opening up... just a little? We promise we won't bite back.",
        level: 5
      },
      Sagittarius: {
        content: "Jupiter is dizzy from your wandering! 🏹 You're so restless that even your GPS has commitment issues. Sit still for 5 minutes - the world won't end if you stay in one place!",
        level: 5
      },
      Capricorn: {
        content: "Saturn wants you to take a vacation from being so serious! 🐐 You're so work-focused that your vacation photos probably include spreadsheets. Live a little - fun won't kill your productivity!",
        level: 4
      },
      Aquarius: {
        content: "Uranus says you're too weird, even for them! ⚡ You're so quirky that normal people need a translator to understand you. Maybe dial down the uniqueness just a tiny bit? We're getting confused.",
        level: 5
      },
      Pisces: {
        content: "Neptune wants to know which dimension you're living in! 🐟 You're so dreamy that reality probably needs an appointment to see you. Come back to Earth occasionally - we miss you down here!",
        level: 4
      }
    }
  };

  return horoscopes[mode][zodiacSign as keyof typeof horoscopes.vibe] || {
    content: "The cosmos is having technical difficulties. Please try again later! 🌌",
    level: 3
  };
}
