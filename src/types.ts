export interface Plan {
  id: string;
  name: string;
  durationMonths: number;
  pricePerMonth: number;
  totalPrice: number;
  originalPrice: number;
  popular?: boolean;
  savingsPercentage: number;
  features: string[];
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'sports' | 'movies' | 'entertainment' | 'news' | 'kids' | 'international';
  country: string;
  logoUrl?: string;
  is4K: boolean;
  epgAvailable: boolean;
  viewersNow: string;
}

export interface VodItem {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string;
  rating: number;
  year: number;
  posterUrl: string;
  is4K: boolean;
  quality: '4K Ultra HD' | '1080p FHD' | 'HDR10+';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightText?: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'setup' | 'billing' | 'channels';
}

export interface DeviceSetup {
  id: string;
  name: string;
  iconName: string;
  popularApps: string[];
  setupTimeMinutes: number;
  steps: string[];
  recommendationNote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBuyer: boolean;
  planPurchased: string;
}

export interface ServerNode {
  id: string;
  name: string;
  flag: string;
  location: string;
  basePing: number;
  bandwidthGbps: number;
  status: 'Online' | 'Optimal' | 'Heavy Load';
}

export interface ConnectionOption {
  connections: number;
  multiplier: number;
  label: string;
}
