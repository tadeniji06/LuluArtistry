export interface PortfolioItem {
  id: string;
  title: string;
  category: 'lashes' | 'nails' | 'tattoos' | 'brows' | 'makeup';
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'lashes' | 'nails' | 'tattoos' | 'brows' | 'tools';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  tags: string[];
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Dramatic Volume Lashes',
    category: 'lashes',
    image: '/api/placeholder/400/500',
    description: 'Full volume lash set with dramatic curl and length for special occasions.',
    tags: ['volume', 'dramatic', 'special occasion'],
    featured: true,
    date: '2024-01-15'
  },
  {
    id: '2',
    title: 'Natural Classic Set',
    category: 'lashes',
    image: '/api/placeholder/400/500',
    description: 'Subtle enhancement for everyday wear with natural-looking lashes.',
    tags: ['natural', 'classic', 'everyday'],
    featured: false,
    date: '2024-01-10'
  },
  {
    id: '3',
    title: 'Glamour Nail Art',
    category: 'nails',
    image: '/api/placeholder/400/500',
    description: 'Intricate nail art with rhinestones and metallic accents.',
    tags: ['glamour', 'rhinestones', 'metallic'],
    featured: true,
    date: '2024-01-12'
  },
  {
    id: '4',
    title: 'Minimalist Tattoo Design',
    category: 'tattoos',
    image: '/api/placeholder/400/500',
    description: 'Clean, minimalist tattoo design with fine line work.',
    tags: ['minimalist', 'fine line', 'clean'],
    featured: false,
    date: '2024-01-08'
  },
  {
    id: '5',
    title: 'Perfect Brow Shaping',
    category: 'brows',
    image: '/api/placeholder/400/500',
    description: 'Professional brow shaping and tinting for the perfect arch.',
    tags: ['shaping', 'tinting', 'professional'],
    featured: true,
    date: '2024-01-14'
  },
  {
    id: '6',
    title: 'Bridal Makeup Look',
    category: 'makeup',
    image: '/api/placeholder/400/500',
    description: 'Elegant bridal makeup with long-lasting, photo-ready finish.',
    tags: ['bridal', 'elegant', 'long-lasting'],
    featured: true,
    date: '2024-01-16'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Volume Lash Set - Dramatic',
    category: 'lashes',
    price: 45.00,
    originalPrice: 55.00,
    image: '/api/placeholder/300/400',
    images: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
    description: 'Premium volume lash set for dramatic, full-looking lashes. Perfect for special occasions.',
    features: ['0.07mm diameter', 'Multiple lengths', 'Premium synthetic fiber', 'Easy application'],
    inStock: true,
    rating: 4.8,
    reviews: 127,
    tags: ['volume', 'dramatic', 'premium'],
    featured: true
  },
  {
    id: '2',
    name: 'Classic Lash Set - Natural',
    category: 'lashes',
    price: 35.00,
    image: '/api/placeholder/300/400',
    images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
    description: 'Natural-looking classic lash set for everyday enhancement.',
    features: ['0.15mm diameter', 'Natural curl', 'Lightweight', 'Comfortable wear'],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    tags: ['natural', 'classic', 'everyday'],
    featured: false
  },
  {
    id: '3',
    name: 'Press-On Nail Set - Glamour',
    category: 'nails',
    price: 25.00,
    originalPrice: 30.00,
    image: '/api/placeholder/300/400',
    images: ['/api/placeholder/300/400', '/api/placeholder/300/400', '/api/placeholder/300/400'],
    description: 'Glamorous press-on nails with rhinestone accents and metallic finish.',
    features: ['24 pieces', 'Rhinestone accents', 'Metallic finish', 'Easy application'],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ['glamour', 'rhinestones', 'metallic'],
    featured: true
  },
  {
    id: '4',
    name: 'Professional Lash Glue',
    category: 'tools',
    price: 18.00,
    image: '/api/placeholder/300/400',
    images: ['/api/placeholder/300/400'],
    description: 'Professional-grade lash adhesive for secure, long-lasting application.',
    features: ['Latex-free', 'Long-lasting hold', 'Quick drying', 'Easy removal'],
    inStock: true,
    rating: 4.9,
    reviews: 203,
    tags: ['professional', 'latex-free', 'long-lasting'],
    featured: false
  },
  {
    id: '5',
    name: 'Brow Shaping Kit',
    category: 'brows',
    price: 32.00,
    image: '/api/placeholder/300/400',
    images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
    description: 'Complete brow shaping kit with professional tools and tinting supplies.',
    features: ['Professional tweezers', 'Brow tint', 'Shaping stencils', 'Instruction guide'],
    inStock: true,
    rating: 4.5,
    reviews: 78,
    tags: ['professional', 'complete kit', 'tinting'],
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All', count: portfolioItems.length },
  { id: 'lashes', name: 'Lashes', count: portfolioItems.filter(item => item.category === 'lashes').length },
  { id: 'nails', name: 'Nails', count: portfolioItems.filter(item => item.category === 'nails').length },
  { id: 'tattoos', name: 'Tattoos', count: portfolioItems.filter(item => item.category === 'tattoos').length },
  { id: 'brows', name: 'Brows', count: portfolioItems.filter(item => item.category === 'brows').length },
  { id: 'makeup', name: 'Makeup', count: portfolioItems.filter(item => item.category === 'makeup').length }
];
