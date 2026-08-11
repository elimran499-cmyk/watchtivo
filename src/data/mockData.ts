import { Plan, ChannelItem, VodItem, Feature, FaqItem, DeviceSetup, Testimonial, ServerNode, ConnectionOption } from '../types';

export const PLANS: Plan[] = [
  {
    id: 'plan-6m',
    name: '6 Months Pass',
    durationMonths: 6,
    pricePerMonth: 7.99,
    totalPrice: 47.94,
    originalPrice: 79.99,
    savingsPercentage: 50,
    popular: false,
    features: [
      '18,500+ Live Channels (4K / FHD)',
      '65,000+ VOD Movies & TV Series',
      'Anti-Freeze Technology v10.0',
      '99.9% Server Uptime Guarantee',
      '7-Day Electronic Program Guide (EPG)',
      'TV Catch-up & Recording Options',
      'Free Automatic Channel Updates',
      'Works on All Devices (Firestick, Smart TV, etc)',
      'VIP Fast-Track 24/7 Live Support',
      'Multi-Sub Discount Eligible'
    ]
  },
  {
    id: 'plan-12m',
    name: '12 Months VIP',
    durationMonths: 12,
    pricePerMonth: 4.99,
    totalPrice: 59.88,
    originalPrice: 149.99,
    savingsPercentage: 60,
    popular: true,
    features: [
      '18,500+ Live Channels (4K HDR / 60 FPS)',
      '65,000+ VOD Movies & TV Series in 4K',
      'Anti-Freeze Technology v10.0 Premium',
      '99.99% Ultra Dedicated Server Uptime',
      'Full EPG & 14-Day Catch-up TV',
      'Free Multi-DNS Backup Connections',
      'Anti-Freeze Technology & 99.9% Uptime',
      'Instant Email & WhatsApp Activation',
      'Priority 24/7 Technical Support',
      '7-Day No-Questions-Asked Money Back Guarantee'
    ]
  },
  {
    id: 'plan-24m',
    name: '24 Months Ultra',
    durationMonths: 24,
    pricePerMonth: 3.75,
    totalPrice: 89.99,
    originalPrice: 249.99,
    savingsPercentage: 65,
    popular: false,
    features: [
      '18,500+ Live Channels (4K HDR / 60 FPS)',
      '65,000+ VOD Movies & TV Series in 4K',
      'Anti-Freeze Technology v10.0 Ultimate',
      'Max Bandwidth Uncapped 10 Gbps Streams',
      'Full EPG & 14-Day Catch-up TV',
      'Free App License Code Included',
      'Free Unlimited Playlist Updates',
      'Instant Activation in < 2 Minutes',
      'Dedicated Account Manager Support',
      '7-Day Money Back Guarantee'
    ]
  }
];

export const CONNECTION_OPTIONS: ConnectionOption[] = [
  { connections: 1, multiplier: 1.0, label: '1 Screen (Single Connection)' },
  { connections: 2, multiplier: 1.65, label: '2 Screens (Simultaneous Multi-Room)' },
  { connections: 3, multiplier: 2.2, label: '3 Screens (Family Pack)' },
  { connections: 4, multiplier: 2.7, label: '4 Screens (Ultimate Household)' },
];

export const FEATURES: Feature[] = [
  {
    id: 'feat-antifreeze',
    title: 'Anti-Freeze Tech 10.0',
    description: 'Our proprietary load-balancing engine prevents stuttering, buffering, and packet loss even during high-traffic FIFA, NFL, or Champions League finals.',
    iconName: 'Zap',
    highlightText: '0.01s Stutter Rate',
    badge: 'EXCLUSIVE'
  },
  {
    id: 'feat-uptime',
    title: '99.9% Uptime Guarantee',
    description: 'Hosted across 48 redundant high-speed edge data centers in US, EU, UK, and Asia to guarantee 24/7 uninterrupted live streams.',
    iconName: 'ShieldCheck',
    highlightText: '48 Edge Clusters',
    badge: 'GUARANTEED'
  },
  {
    id: 'feat-4k',
    title: 'Pure 4K HDR & 60 FPS',
    description: 'Experience crystal-clear picture quality with true 4K Ultra HD resolution, HDR10 color dynamic range, and smooth 60fps sports broadcasts.',
    iconName: 'Tv',
    highlightText: 'True 2160p Quality',
    badge: 'ULTRA HD'
  },
  {
    id: 'feat-devices',
    title: 'Multi-Device Compatibility',
    description: 'Seamlessly watch on Firestick, Smart TVs (Samsung, LG, Sony), Android Box, Apple TV, MAG, Formuler, iOS, Windows, and Web browser.',
    iconName: 'Smartphone',
    highlightText: 'Instant M3U & Xtream',
    badge: 'ALL APPS'
  },
  {
    id: 'feat-epg',
    title: '7-Day EPG & Catch-up',
    description: 'Never miss a show with our full Electronic Program Guide and 14-day catch-up recording for major sports and TV broadcasts.',
    iconName: 'CalendarDays',
    highlightText: 'Interactive TV Guide'
  },
  {
    id: 'feat-support',
    title: '24/7 VIP Setup Support',
    description: 'Our expert customer care team is available around the clock via Live Chat, Telegram, and Email to guide you through instant setup in 2 minutes.',
    iconName: 'Headphones',
    highlightText: '< 3 Min Response'
  }
];

export const CHANNELS: ChannelItem[] = [
  { id: 'ch-1', name: 'Sky Sports Main Event 4K', category: 'sports', country: 'UK', is4K: true, epgAvailable: true, viewersNow: '42.8k' },
  { id: 'ch-2', name: 'TNT Sports 1 4K HDR', category: 'sports', country: 'UK', is4K: true, epgAvailable: true, viewersNow: '38.1k' },
  { id: 'ch-3', name: 'ESPN Ultra HD USA', category: 'sports', country: 'US', is4K: true, epgAvailable: true, viewersNow: '51.2k' },
  { id: 'ch-4', name: 'NBC Sports Network 4K', category: 'sports', country: 'US', is4K: true, epgAvailable: true, viewersNow: '29.4k' },
  { id: 'ch-5', name: 'beIN Sports 1 Premium', category: 'sports', country: 'INT', is4K: true, epgAvailable: true, viewersNow: '64.0k' },
  { id: 'ch-6', name: 'DAZN 1 Bar HD', category: 'sports', country: 'DE', is4K: false, epgAvailable: true, viewersNow: '18.9k' },
  { id: 'ch-7', name: 'HBO East 4K Ultra', category: 'movies', country: 'US', is4K: true, epgAvailable: true, viewersNow: '31.5k' },
  { id: 'ch-8', name: 'Sky Cinema Premiere 4K', category: 'movies', country: 'UK', is4K: true, epgAvailable: true, viewersNow: '22.3k' },
  { id: 'ch-9', name: 'Showtime East 4K', category: 'movies', country: 'US', is4K: true, epgAvailable: true, viewersNow: '15.7k' },
  { id: 'ch-10', name: 'Canal+ Cinema 4K', category: 'movies', country: 'FR', is4K: true, epgAvailable: true, viewersNow: '19.2k' },
  { id: 'ch-11', name: 'BBC One London 4K', category: 'entertainment', country: 'UK', is4K: true, epgAvailable: true, viewersNow: '48.9k' },
  { id: 'ch-12', name: 'CBS HD East', category: 'entertainment', country: 'US', is4K: false, epgAvailable: true, viewersNow: '35.0k' },
  { id: 'ch-13', name: 'Fox Network HD', category: 'entertainment', country: 'US', is4K: false, epgAvailable: true, viewersNow: '27.8k' },
  { id: 'ch-14', name: 'CNN International 4K', category: 'news', country: 'US', is4K: true, epgAvailable: true, viewersNow: '14.2k' },
  { id: 'ch-15', name: 'BBC News 24', category: 'news', country: 'UK', is4K: false, epgAvailable: true, viewersNow: '12.8k' },
  { id: 'ch-16', name: 'Disney Channel HD', category: 'kids', country: 'US', is4K: false, epgAvailable: true, viewersNow: '21.4k' },
  { id: 'ch-17', name: 'Cartoon Network UK', category: 'kids', country: 'UK', is4K: false, epgAvailable: true, viewersNow: '16.5k' },
  { id: 'ch-18', name: 'SuperSport Grandstand 4K', category: 'sports', country: 'SA', is4K: true, epgAvailable: true, viewersNow: '33.1k' },
  { id: 'ch-19', name: 'UFC Fight Pass Live HD', category: 'sports', country: 'US', is4K: false, epgAvailable: true, viewersNow: '58.4k' },
  { id: 'ch-20', name: 'Formula 1 TV Pro 4K 60FPS', category: 'sports', country: 'INT', is4K: true, epgAvailable: true, viewersNow: '71.2k' }
];

export const VOD_CATALOG: VodItem[] = [
  {
    id: 'vod-1',
    title: 'Gladiator II',
    type: 'movie',
    genre: 'Action / Drama',
    rating: 8.9,
    year: 2024,
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: '4K Ultra HD'
  },
  {
    id: 'vod-2',
    title: 'House of the Dragon S2',
    type: 'series',
    genre: 'Fantasy / Action',
    rating: 9.1,
    year: 2024,
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: 'HDR10+'
  },
  {
    id: 'vod-3',
    title: 'Dune: Part Two',
    type: 'movie',
    genre: 'Sci-Fi / Adventure',
    rating: 9.3,
    year: 2024,
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: '4K Ultra HD'
  },
  {
    id: 'vod-4',
    title: 'Formula 1: Drive to Survive S6',
    type: 'series',
    genre: 'Documentary / Sports',
    rating: 8.8,
    year: 2024,
    posterUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: '1080p FHD'
  },
  {
    id: 'vod-5',
    title: 'Oppenheimer',
    type: 'movie',
    genre: 'Biography / History',
    rating: 9.2,
    year: 2023,
    posterUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: '4K Ultra HD'
  },
  {
    id: 'vod-6',
    title: 'The Penguin',
    type: 'series',
    genre: 'Crime / Drama',
    rating: 8.9,
    year: 2024,
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80',
    is4K: true,
    quality: '4K Ultra HD'
  }
];

export const DEVICE_SETUPS: DeviceSetup[] = [
  {
    id: 'dev-firestick',
    name: 'Amazon Firestick / Fire TV',
    iconName: 'Tv',
    popularApps: ['TiviMate', 'IPTV Smarters Pro', 'GSE Smart IPTV', 'XCIPTV'],
    setupTimeMinutes: 2,
    steps: [
      'Enable "Apps from Unknown Sources" in Firestick Developer Options.',
      'Open the Downloader app and enter code 289384 to download TiviMate or IPTV Smarters.',
      'Open the app, select "Add Playlist" via Xtream Codes API or M3U URL.',
      'Enter the Username, Password, and Server URL sent to your email and press Login!'
    ],
    recommendationNote: 'Recommended App: TiviMate IPTV Player for ultra-fast channel switching and EPG.'
  },
  {
    id: 'dev-smarttv',
    name: 'Samsung & LG Smart TV',
    iconName: 'Tv2',
    popularApps: ['IBO Player', 'Smart IPTV (SIPTV)', 'SS IPTV', 'Nanomid Player'],
    setupTimeMinutes: 3,
    steps: [
      'Open your TV App Store (Samsung Apps / LG Content Store).',
      'Search and install "IBO Player" or "Smart IPTV".',
      'Note down the MAC Address displayed on your TV screen.',
      'Visit the app activation website, paste your MAC Address and the M3U Link we emailed you, and press Save.'
    ],
    recommendationNote: 'No extra hardware needed! Works directly on your Smart TV built-in app store.'
  },
  {
    id: 'dev-android',
    name: 'Android TV & Box / Shield',
    iconName: 'Monitor',
    popularApps: ['TiviMate', 'IPTV Smarters Pro', 'OTT Navigator', 'Sparkle TV'],
    setupTimeMinutes: 2,
    steps: [
      'Open Google Play Store on your Android TV device.',
      'Search for "IPTV Smarters Pro" or "TiviMate" and install.',
      'Launch the application and select Xtream Codes Login.',
      'Input your credentials from your instant delivery email and enjoy 4K streaming!'
    ],
    recommendationNote: 'NVIDIA Shield & Formuler Z11 Pro give the smoothest 60 FPS sports playback.'
  },
  {
    id: 'dev-apple',
    name: 'Apple TV / iPhone / iPad',
    iconName: 'Tablet',
    popularApps: ['IPTV Smarters Lite', 'iPlayTV', 'GSE Smart IPTV', 'Snappy IPTV'],
    setupTimeMinutes: 2,
    steps: [
      'Open Apple App Store and download "iPlayTV" or "IPTV Smarters Lite".',
      'Select "Xtream Codes API" connection option.',
      'Paste your Server URL, Username, and Password from your account dashboard.',
      'Hit Sync to load all live channel categories and VOD posters in high resolution.'
    ],
    recommendationNote: 'Syncs automatically across Apple TV, iPhone, and iPad seamlessly.'
  },
  {
    id: 'dev-mag',
    name: 'MAG / Formuler / Enigma',
    iconName: 'Cpu',
    popularApps: ['STB Emulator', 'MyTVOnline 2/3', 'Portal MAC Login'],
    setupTimeMinutes: 3,
    steps: [
      'Send us your device MAC Address (e.g., 00:1A:79:XX:XX:XX) during checkout.',
      'Go to System Settings -> Servers -> Portals on your MAG / Formuler device.',
      'Set Portal URL to the MAG server link provided in your welcome email.',
      'Restart device portal and enjoy full hardware-accelerated EPG and channel zap speed!'
    ],
    recommendationNote: 'Native portal connection offers zero-delay channel zapping under 0.3 seconds.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: 'Yesterday',
    comment: 'Switched from my £85/mo cable package to WatchTivo 12 Months plan. The Premier League and Champions League streams in 4K 60FPS are flawless! Zero buffering even during huge derby matches.',
    verifiedBuyer: true,
    planPurchased: '12 Months VIP'
  },
  {
    id: 'rev-2',
    name: 'David K. Miller',
    location: 'Dallas, TX, United States',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '3 days ago',
    comment: 'The Firestick setup took literally 90 seconds with TiviMate. Customer support on WhatsApp guided me through activating 2 connections for my living room and bedroom TVs. Best IPTV hands down!',
    verifiedBuyer: true,
    planPurchased: '12 Months VIP (2 Screens)'
  },
  {
    id: 'rev-3',
    name: 'Sophie Laurent',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '5 days ago',
    comment: 'Huge VOD catalog! All the latest movies and HBO / Netflix shows are updated within hours of release in true 4K HDR. The EPG program guide is super detailed.',
    verifiedBuyer: true,
    planPurchased: '6 Months Pass'
  },
  {
    id: 'rev-4',
    name: 'Liam O’Connor',
    location: 'Dublin, Ireland',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Tested anti-freeze server tech during Formula 1 live race day and UFC main card. Crystal clear 60 FPS video feed and no audio sync delay. Super impressed!',
    verifiedBuyer: true,
    planPurchased: '24 Months Ultra'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'How quickly will I receive my login details after ordering?',
    answer: 'Activation is automated and instant! You will receive an email and SMS/WhatsApp welcome packet with your Xtream Codes credentials (Username, Password, Server URL) and M3U playlist link within 2 minutes of payment confirmation.'
  },
  {
    id: 'faq-2',
    category: 'setup',
    question: 'Do I need a VPN to stream video smoothly?',
    answer: 'No VPN is strictly required because our servers use encrypted SSL streaming protocol (HTTPS) that hides traffic signatures from ISP bandwidth throttling. However, if your internet provider blocks IPTV connections, you can freely use any VPN like NordVPN or ExpressVPN.'
  },
  {
    id: 'faq-3',
    category: 'channels',
    question: 'Can I request custom channel groups or specific movies?',
    answer: 'Yes! Our subscriber portal allows you to easily hide country categories you do not watch, or submit free movie/series content requests directly to our automated VOD scraper queue.'
  },
  {
    id: 'faq-4',
    category: 'setup',
    question: 'Can I use one account on multiple devices simultaneously?',
    answer: 'Yes! You can install your playlist on unlimited devices (Firestick, Smart TV, Mobile). If you want to watch on 2 or more screens at the exact same time in different rooms, simply select the 2-Screen or 4-Screen connection addon during checkout.'
  },
  {
    id: 'faq-5',
    category: 'billing',
    question: 'What is your refund policy?',
    answer: 'We offer an ironclad 7-Day Money-Back Guarantee. If you experience technical setup issues that our 24/7 technical team cannot solve for you within 7 days, we will issue a 100% full refund with no hassle.'
  },
  {
    id: 'faq-6',
    category: 'billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept major Credit Cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Cryptocurrency (Bitcoin, USDT, Ethereum) with a bonus 10% instant discount when paying with Crypto.'
  }
];

export const SERVER_NODES: ServerNode[] = [
  { id: 'node-us-east', name: 'US East (New York)', flag: '🇺🇸', location: 'Ashburn Datacenter', basePing: 12, bandwidthGbps: 10, status: 'Optimal' },
  { id: 'node-us-west', name: 'US West (Los Angeles)', flag: '🇺🇸', location: 'Silicon Valley Cluster', basePing: 24, bandwidthGbps: 10, status: 'Optimal' },
  { id: 'node-uk', name: 'United Kingdom (London)', flag: '🇬🇧', location: 'Docklands Edge Node', basePing: 8, bandwidthGbps: 10, status: 'Optimal' },
  { id: 'node-eu', name: 'Europe (Frankfurt)', flag: '🇩🇪', location: 'Equinix FR2 Hub', basePing: 14, bandwidthGbps: 10, status: 'Optimal' },
  { id: 'node-ca', name: 'Canada (Toronto)', flag: '🇨🇦', location: 'Toronto Fiber Link', basePing: 18, bandwidthGbps: 10, status: 'Optimal' },
  { id: 'node-asia', name: 'Asia Pacific (Singapore)', flag: '🇸🇬', location: 'SG Edge Datacenter', basePing: 32, bandwidthGbps: 10, status: 'Optimal' }
];
