import React from 'react';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const posts = [
   
    {
      id: 1,
      title: "Privacy-Preserving Technologies",
      source: "Akitra.com",
      category: "Privacy Tech",
      desc: "An overview of privacy-preserving technologies that shield personal data from breaches and digital invisibility.",
      date: "Dec 18, 2024",
      url: "https://akitra.com/privacy-preserving-technologies/",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Why Is Data Privacy Important",
      source: "TheLegalSchool.in",
      category: "Data Privacy",
      desc: "Insights into the importance of personal and business data privacy with tips on protection and regulations.",
      date: "Nov 27, 2025",
      url: "https://thelegalschool.in/blog/why-is-data-privacy-important",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Zcash Privacy: Why Shielded Transactions Are Not Fully Invisible",
      source: "BitHide.io",
      category: "Cryptocurrency",
      desc: "Explains Zcash's shielded transactions, privacy features, and limitations using zk-SNARKs.",
      date: "Nov 27, 2025",
      url: "https://bithide.io/blog/security/why-zcash-transactions-are-not-invisible/",
      imageUrl: "https://images.unsplash.com/photo-1639762681488-eb350cfad890?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Discover the Mina Protocol (MINA) – ZK Privacy & Ultra-Light",
      source: "LinkedIn",
      category: "Blockchain",
      desc: "Explores Mina Protocol's succinct blockchain design and zkApps enabling scalable privacy.",
      date: "Aug 10, 2025",
      url: "https://www.linkedin.com/pulse/discover-mina-protocol-zk-privacy-ultra-light-duvivier-dit-sage-heeuf",
      imageUrl: "https://images.unsplash.com/photo-1645854363758-b91c1dce80b0?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Pasta Curves Rust Implementation for Zcash",
      source: "GitHub",
      category: "Cryptography",
      desc: "Technical insights into the Pallas and Vesta curves powering Zcash's cryptographic proofs.",
      date: "N/A",
      url: "https://github.com/zcash/pasta_curves",
      imageUrl: "https://images.unsplash.com/photo-1618057360649-34b9380a0460?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Zcash and Privacy Coins: The Future of Private Transactions",
      source: "OnFinality.io",
      category: "Crypto Privacy",
      desc: "Analyzes Zcash's shielded addresses and zero-knowledge proofs compared with other privacy coins.",
      date: "Nov 11, 2025",
      url: "https://blog.onfinality.io/zcash-privacy-coins/",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-9e3dbfcb9dc8?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "The Sovereign Individual and the Paradox of the Digital Age",
      source: "Aeon.co",
      category: "Digital Privacy",
      desc: "Discusses digital privacy paradoxes and the challenges faced by sovereign individuals in surveillance states.",
      date: "Oct 05, 2025",
      url: "https://aeon.co/essays/the-sovereign-individual-and-the-paradox-of-the-digital-age",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920214?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "PrivacyEngine Data Protection Blog",
      source: "PrivacyEngine.io",
      category: "Data Protection",
      desc: "Regular insights on GDPR, AI privacy, cybersecurity, and evolving data protection trends.",
      date: "May 22, 2025",
      url: "https://www.privacyengine.io/blog/",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Importance of Data Security and Privacy in the Digital Age",
      source: "Imarticus.org",
      category: "Data Security",
      desc: "Explains the risks of data breaches and best practices for individual and business privacy.",
      date: "Apr 07, 2024",
      url: "https://imarticus.org/blog/the-importance-of-data-security-and-privacy-for-individuals-and-businesses-in-the-digital-age/",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "What Is Zcash? Privacy-Based Blockchain Protocol",
      source: "Gemini.com",
      category: "Blockchain",
      desc: "Explains Zcash's privacy features, zk-SNARKs, and opt-in shielded transactions.",
      date: "Jan 14, 2023",
      url: "https://www.gemini.com/cryptopedia/what-is-zcash-blockchain-protocol",
      imageUrl: "https://images.unsplash.com/photo-1627483239046-03071ff6fc18?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "20 Best Cybersecurity Blogs to Follow in 2025",
      source: "Draft.dev",
      category: "Cybersecurity",
      desc: "A curated list of top cybersecurity blogs for staying updated on privacy threats and defenses.",
      date: "Sep 03, 2025",
      url: "https://draft.dev/learn/best-cybersecurity-blogs",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Guide to Rollups and Mina's Place in the Landscape",
      source: "MinaProtocol.com",
      category: "Blockchain Scaling",
      desc: "Positioning Mina Protocol in the evolving rollups and zkRollups ecosystem.",
      date: "N/A",
      url: "https://minaprotocol.com/blog/guide-to-rollups-and-minas-place-in-the-landscape",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76bd83ef?w=400&h=250&fit=crop"
    },
    {
      id: 13,
      title: "35 Best Privacy Law Blogs and Websites in 2025",
      source: "Feedspot.com",
      category: "Privacy Law",
      desc: "Top privacy law blogs covering data protection and cybersecurity legal issues.",
      date: "Sep 11, 2025",
      url: "https://bloggers.feedspot.com/privacy_law_blogs/",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
    },
    {
      id: 14,
      title: "Why is Privacy So Important? (Zcash)",
      source: "Z.cash",
      category: "Privacy Philosophy",
      desc: "Highlights the critical importance of privacy for freedom, security, and dignity.",
      date: "N/A",
      url: "https://z.cash/learn/why-is-privacy-so-important/",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 15,
      title: "The Pasta Curves for Halo 2 and Beyond",
      source: "Z.cash Blog",
      category: "Cryptography",
      desc: "Discusses the design of Pasta curves enabling efficient recursive proofs in Zcash.",
      date: "Nov 22, 2020",
      url: "https://z.cash/the-pasta-curves-for-halo-2-and-beyond/",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 16,
      title: "Privacy Latest: Zcash Integration with NymVPN (2025)",
      source: "Hozk.io",
      category: "Privacy Ecosystem",
      desc: "NymVPN now accepts shielded Zcash payments for enhanced anonymity in privacy infrastructure.",
      date: "Jul 18, 2025",
      url: "https://www.hozk.io/news/privacy-latest-2025-07-18",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop"
    },
    {
      id: 17,
      title: "Zcash Is Pumping! Privacy Coin Breakout Analysis",
      source: "CoinBureau (YouTube)",
      category: "Market Analysis",
      desc: "Deep dive into Zcash's resurgence, shielded transactions vs Monero, and compliant privacy future.",
      date: "Oct 30, 2025",
      url: "https://www.youtube.com/watch?v=44vVT04m6Oc",
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=250&fit=crop"
    },
    {
      id: 18,
      title: "Privacy Blockchains Deep Dive: Zcash vs Aleo vs Mina",
      source: "Equilibrium.co",
      category: "Privacy Comparison",
      desc: "Technical comparison of Zcash record model, Mina's succinct privacy, and Aleo's DPC architecture.",
      date: "Oct 04, 2023",
      url: "https://equilibrium.co/writing/privacy-blockchains-and-aleo-deep-dive",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop"
    },
    {
      id: 19,
      title: "Top 3 Privacy Coins: Zcash Shielded Addresses Explained",
      source: "CoinGecko",
      category: "Privacy Coins",
      desc: "Zcash's optional privacy through shielded addresses and zk-proofs vs Monero's always-on model.",
      date: "Sep 27, 2023",
      url: "https://www.coingecko.com/learn/3-most-popular-privacy-coins-and-the-tech-behind-them",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
    },
    {
      id: 20,
      title: "ZK Technology: Zcash Leading Privacy Revolution",
      source: "Phemex.com",
      category: "ZK Privacy",
      desc: "Zcash ($ZEC) pioneers ZK-Privacy enhancing transaction anonymity through zero-knowledge proofs.",
      date: "Oct 09, 2025",
      url: "https://phemex.com/news/article/zk-technology-to-propel-privacy-scaling-and-generalization-in-crypto-25433",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop"
    },
    {
      id: 21,
      title: "Crypto Markets, Privacy, And Zcash Payments",
      source: "Pantera Capital",
      category: "Investment",
      desc: "Zcash reignites the right to transact without surveillance in crypto's privacy renaissance.",
      date: "Nov 26, 2025",
      url: "https://panteracapital.com/blockchain-letter/crypto-markets-privacy-and-payments/",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 22,
      title: "Zcash Leads 2025 Privacy Token Rally",
      source: "Markets.com",
      category: "Market Trends",
      desc: "Zcash surges as leading privacy coin in 2025's privacy token revival and breakout momentum.",
      date: "Nov 06, 2025",
      url: "https://www.markets.com/news/zcash-leads-privacy-token-rally-2025-1857-en",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-9e3dbfcb9dc8?w=400&h=250&fit=crop"
    },
    {
      id: 23,
      title: "Mina Foundation Updates: Privacy Gateway to Web",
      source: "MinaProtocol.com",
      category: "Mina Protocol",
      desc: "Mina's privacy features connect websites to crypto with lightweight verifiable computation.",
      date: "Mar 26, 2025",
      url: "https://minaprotocol.com/blog/changes-at-mina-foundation-and-next-steps",
      imageUrl: "https://images.unsplash.com/photo-1645854363758-b91c1dce80b0?w=400&h=250&fit=crop"
    },
    {
      id: 24,
      title: "Zcash Q4 2025 Roadmap: Enhanced Privacy Features",
      source: "Bitget.site",
      category: "Zcash Roadmap",
      desc: "Electric Coin Co. roadmap focuses on shielded transaction upgrades and privacy enhancements.",
      date: "2025",
      url: "https://www.bitget.site/news/detail/12560605042262",
      imageUrl: "https://images.unsplash.com/photo-1639762681488-eb350cfad890?w=400&h=250&fit=crop"
    },
    {
      id: 25,
      title: "Security Assumptions in Permissionless Blockchains",
      source: "ScienceDirect",
      category: "Blockchain Research",
      desc: "Academic analysis of privacy and scalability challenges in Zcash, Mina, and permissionless chains.",
      date: "2025",
      url: "https://www.sciencedirect.com/science/article/pii/S2096720925001150",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Trending Privacy & Crypto Blogs</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
           Stay synced with the updates.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
