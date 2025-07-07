/**
 * Add Sample Data to Firestore
 * This script adds sample template data to your Firestore database
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp } = require('firebase-admin/firestore');

// Load environment variables
require('dotenv').config();

// Sample templates data
const sampleTemplates = [
  {
    name: 'E-commerce Store',
    category: 'E-commerce',
    description: 'Modern e-commerce template with cart functionality, product pages, and checkout flow',
    imageUrl: 'https://placehold.co/400x300/3b82f6/white?text=E-commerce+Store',
    price: 49,
    tags: ['react', 'tailwind', 'stripe', 'responsive'],
    features: ['Shopping Cart', 'Product Pages', 'Checkout', 'Admin Dashboard', 'Mobile Responsive'],
    demoUrl: 'https://demo.example.com/ecommerce',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.8,
    reviews: 127,
    isPopular: true,
    isFeatured: true
  },
  {
    name: 'Portfolio Website',
    category: 'Portfolio',
    description: 'Clean portfolio template for creatives, designers, and developers',
    imageUrl: 'https://placehold.co/400x300/8b5cf6/white?text=Portfolio+Site',
    price: 29,
    tags: ['react', 'portfolio', 'animations', 'dark-mode'],
    features: ['Dark Mode', 'Animations', 'Contact Form', 'Project Gallery', 'Resume Download'],
    demoUrl: 'https://demo.example.com/portfolio',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.9,
    reviews: 89,
    isPopular: false,
    isFeatured: false
  },
  {
    name: 'Restaurant Website',
    category: 'Business',
    description: 'Beautiful restaurant website with menu, reservations, and online ordering',
    imageUrl: 'https://placehold.co/400x300/10b981/white?text=Restaurant+Site',
    price: 39,
    tags: ['react', 'restaurant', 'menu', 'reservations'],
    features: ['Menu Display', 'Online Reservations', 'Photo Gallery', 'Contact Info', 'Mobile Optimized'],
    demoUrl: 'https://demo.example.com/restaurant',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.7,
    reviews: 156,
    isPopular: true,
    isFeatured: false
  },
  {
    name: 'SaaS Landing Page',
    category: 'SaaS',
    description: 'High-converting SaaS landing page with pricing, features, and testimonials',
    imageUrl: 'https://placehold.co/400x300/f59e0b/white?text=SaaS+Landing',
    price: 59,
    tags: ['react', 'saas', 'landing', 'conversion'],
    features: ['Pricing Tables', 'Feature Showcase', 'Testimonials', 'FAQ Section', 'CTA Buttons'],
    demoUrl: 'https://demo.example.com/saas',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.6,
    reviews: 203,
    isPopular: false,
    isFeatured: true
  },
  {
    name: 'Real Estate Platform',
    category: 'Real Estate',
    description: 'Complete real estate platform with property listings, search, and agent profiles',
    imageUrl: 'https://placehold.co/400x300/ef4444/white?text=Real+Estate',
    price: 79,
    tags: ['react', 'real-estate', 'search', 'maps'],
    features: ['Property Search', 'Map Integration', 'Agent Profiles', 'Mortgage Calculator', 'Saved Searches'],
    demoUrl: 'https://demo.example.com/realestate',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.5,
    reviews: 94,
    isPopular: true,
    isFeatured: false
  },
  {
    name: 'Blog & Magazine',
    category: 'Blog',
    description: 'Modern blog and magazine template with article management and social features',
    imageUrl: 'https://placehold.co/400x300/8b5cf6/white?text=Blog+Magazine',
    price: 34,
    tags: ['react', 'blog', 'cms', 'social'],
    features: ['Article Management', 'Social Sharing', 'Comments', 'Newsletter', 'Search'],
    demoUrl: 'https://demo.example.com/blog',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    rating: 4.4,
    reviews: 67,
    isPopular: false,
    isFeatured: false
  }
];

async function addSampleData() {
  try {
    console.log('🚀 Adding Sample Data to Firestore...');
    
    // Check if Firebase Admin SDK is configured
    if (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      console.error('❌ Firebase Admin SDK not configured');
      console.log('Please set up Firebase Admin SDK by either:');
      console.log('1. Setting GOOGLE_APPLICATION_CREDENTIALS environment variable');
      console.log('2. Or manually add data through Firebase Console');
      return;
    }

    // Initialize Firebase Admin SDK
    const app = initializeApp({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    });

    const db = getFirestore(app);

    // Add sample templates
    console.log('📝 Adding sample templates...');
    const templatesCollection = db.collection('templates');
    
    for (const template of sampleTemplates) {
      await templatesCollection.add(template);
      console.log(`✅ Added template: ${template.name}`);
    }

    console.log('🎉 Sample data added successfully!');
    console.log(`📊 Added ${sampleTemplates.length} templates to Firestore`);
    
  } catch (error) {
    console.error('❌ Error adding sample data:', error);
    console.log('💡 Alternative: Add data manually through Firebase Console');
  }
}

// Run the script
if (require.main === module) {
  addSampleData();
}

module.exports = { addSampleData, sampleTemplates };
