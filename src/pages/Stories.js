import React from 'react';
import { useNavigate } from 'react-router-dom';

const stories = [
  {
    id: 1,
    slug: 'mina-pasta-curves-journey',
    title: '✨ Curves That Power Privacy (Mina & Zcash)',
    category: 'Mina Protocol · Zcash',
  },
  {
     id: 2,
    slug: 'day-the-explorer-went-dark',
    title: 'The Day the Explorer Went Dark',
    category: 'Public Chains · Privacy',
  },
  {
    id: 3,
    slug: 'cafe-that-forgot-names',
    title: 'The Café That Forgot Names',
    category: 'Privacy Payments',
  },
  {
    id: 4,
    slug: 'aztec-mirror-of-choices',
    title: '🪞 The Mirror of Choices',
    category: 'AZTEC · Why Privacy Matters',
  },
  {
    id: 5,
    slug: 'osmosis-river-of-hidden-swaps',
    title: '🌊 Osmosis: The River of Hidden Swaps',
    category: 'Osmosis · Private Transactions',
  },
  {
    id: 6,
    slug: 'zcash-right-to-breathe-privately',
    title: '🌌 The Right to Breathe Privately',
    category: 'Zcash · Privacy Rights',
  },
  {
    id: 7,
    slug: 'sovereign-individual-ledger',
    title: '📜 Ledger of the Sovereign Individual',
    category: 'Zcash · Sovereignty',
  },
  {
    id: 8,
    slug: 'mina-library-of-one-page',
    title: '📚 Mina: The Library on One Page',
    category: 'Mina Protocol',
  },
  {
    id: 9,
    slug: 'aztec-privacy-puzzle',
    title: '🧩 Aztec and the Privacy Puzzle',
    category: 'AZTEC',
  },
  {
    id: 10,
    slug: 'rebellion-of-silent-transfers',
    title: '⚡ Rebellion of Silent Transfers',
    category: 'Zcash · Mina · Osmosis',
  },
  {
    id: 11,
    slug: 'secret-door-in-the-wallet',
    title: 'The Secret Door in the Wallet',
    category: 'Privacy · Zero Knowledge',
  },
  {
    id: 12,
    slug: 'aztec-market-of-quiet-voices',
    title: '🤫 Aztec: The Market of Quiet Voices',
    category: 'AZTEC',
  },
  {
    id: 13,
    slug: 'puzzle-of-the-red-door',
    title: '🧩The Puzzle of the Red Door',
    category: 'Zero Knowledge Basics',
  },
  {
    id: 14,
    slug: 'passport-without-a-face',
    title: '⚡The Passport Without a Face',
    category: 'ZK Identity',
  },
  {
    id: 15,
    slug: 'teacher-and-transparent-class',
    title: '📚The Teacher and the Transparent Class',
    category: 'Education · ZK',
  },
  {
    id: 16,
    slug: 'whisper-network',
    title: '⚡The Whisper Network',
    category: 'Mutual Aid · Privacy',
  },
  {
    id: 17,
    slug: 'verifiable-privacy-zcash-mina-city',
    title: '🛡️ Verifiable Privacy in New Harbor',
    category: 'Mina Protocol · Zcash',
  }
];

const Stories = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/stories/${slug}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-4 text-center">
        Privacy Stories
      </h2>
      <p className="text-center text-gray-500 mb-10">
       Learn through stories, not dry theory.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {stories.map(({ id, title, category, slug }) => (
    <button
      key={id}
      onClick={() => handleClick(slug)}
      className="text-left p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white"
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-xs uppercase tracking-wide text-purple-500 mb-2">
        {category}
      </p>
      <p className="text-gray-600 text-sm">
        Tap to read a full story.
      </p>
    </button>
  ))}
</div>
</div>
  );
};

export default Stories;