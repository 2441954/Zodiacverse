import React from 'react';

// SVG zodiac sticker components
export const AriesSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="ariesGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#ff1744" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#ariesGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♈</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">ARIES</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Mar 21 - Apr 19</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Born Leader</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const TaurusSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="taurusGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4caf50" />
        <stop offset="100%" stopColor="#2e7d32" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#taurusGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♉</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">TAURUS</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Apr 20 - May 20</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Stubborn Bull</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const GeminiSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="geminiGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffeb3b" />
        <stop offset="100%" stopColor="#f57f17" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#geminiGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♊</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">GEMINI</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">May 21 - Jun 20</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Twin Souls</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const CancerSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="cancerGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2196f3" />
        <stop offset="100%" stopColor="#0d47a1" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#cancerGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♋</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">CANCER</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Jun 21 - Jul 22</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Moon Child</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const LeoSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="leoGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ff9800" />
        <stop offset="100%" stopColor="#e65100" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#leoGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♌</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">LEO</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Jul 23 - Aug 22</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Cosmic Royalty</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const VirgoSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="virgoGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#9c27b0" />
        <stop offset="100%" stopColor="#4a148c" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#virgoGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♍</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">VIRGO</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Aug 23 - Sep 22</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Perfectionist</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const LibraSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="libraGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e91e63" />
        <stop offset="100%" stopColor="#880e4f" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#libraGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">⚖️</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">LIBRA</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Sep 23 - Oct 22</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Balance Keeper</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const ScorpioSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="scorpioGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#8b0000" />
        <stop offset="100%" stopColor="#4a0000" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#scorpioGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♏</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SCORPIO</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Oct 23 - Nov 21</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Mystery Master</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const SagittariusSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="sagittariusGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#673ab7" />
        <stop offset="100%" stopColor="#311b92" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#sagittariusGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♐</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">SAGITTARIUS</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Nov 22 - Dec 21</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Adventure Seeker</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const CapricornSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="capricornGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#795548" />
        <stop offset="100%" stopColor="#3e2723" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#capricornGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♑</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">CAPRICORN</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Dec 22 - Jan 19</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Mountain Climber</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const AquariusSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="aquariusGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00bcd4" />
        <stop offset="100%" stopColor="#006064" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#aquariusGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♒</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AQUARIUS</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Jan 20 - Feb 18</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Water Bearer</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const PiscesSticker = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <radialGradient id="piscesGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3f51b5" />
        <stop offset="100%" stopColor="#1a237e" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#piscesGradient)" stroke="#fff" strokeWidth="4"/>
    <text x="100" y="60" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">♓</text>
    <text x="100" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">PISCES</text>
    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12">Feb 19 - Mar 20</text>
    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Dream Fish</text>
    <path d="M 70 160 Q 100 150 130 160" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="80" cy="170" r="3" fill="white"/>
    <circle cx="100" cy="175" r="2" fill="white"/>
    <circle cx="120" cy="170" r="3" fill="white"/>
  </svg>
);

export const zodiacStickerComponents = {
  Aries: AriesSticker,
  Taurus: TaurusSticker,
  Gemini: GeminiSticker,
  Cancer: CancerSticker,
  Leo: LeoSticker,
  Virgo: VirgoSticker,
  Libra: LibraSticker,
  Scorpio: ScorpioSticker,
  Sagittarius: SagittariusSticker,
  Capricorn: CapricornSticker,
  Aquarius: AquariusSticker,
  Pisces: PiscesSticker
};